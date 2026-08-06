(() => {
  "use strict";

  const DB_NAME = "guru-pos-offline";
  const DB_VERSION = 1;
  const SALES_STORE = "sales";
  const QUEUE_STORE = "sync_queue";
  const META_STORE = "meta";

  let databasePromise;

  function openDatabase() {
    if (!databasePromise) {
      databasePromise = new Promise((resolve, reject) => {
        if (!("indexedDB" in window)) {
          reject(new Error("IndexedDB is not supported in this browser."));
          return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = () => {
          const database = request.result;

          if (!database.objectStoreNames.contains(SALES_STORE)) {
            const sales = database.createObjectStore(SALES_STORE, { keyPath: "saleId" });
            sales.createIndex("date", "date", { unique: false });
            sales.createIndex("syncState", "syncState", { unique: false });
          }

          if (!database.objectStoreNames.contains(QUEUE_STORE)) {
            const queue = database.createObjectStore(QUEUE_STORE, { keyPath: "id" });
            queue.createIndex("kind", "kind", { unique: false });
            queue.createIndex("createdAt", "createdAt", { unique: false });
          }

          if (!database.objectStoreNames.contains(META_STORE)) {
            database.createObjectStore(META_STORE, { keyPath: "key" });
          }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error("Could not open offline database."));
      });
    }
    return databasePromise;
  }

  function transactionDone(transaction) {
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Offline database transaction failed."));
      transaction.onabort = () => reject(transaction.error || new Error("Offline database transaction was cancelled."));
    });
  }

  function requestResult(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Offline database request failed."));
    });
  }

  function emitQueueChange() {
    window.dispatchEvent(new CustomEvent("guru-queue-change"));
  }

  async function saveSale(sale, { queue = true } = {}) {
    const database = await openDatabase();
    const transaction = database.transaction([SALES_STORE, QUEUE_STORE], "readwrite");
    const sales = transaction.objectStore(SALES_STORE);
    const syncQueue = transaction.objectStore(QUEUE_STORE);
    const now = new Date().toISOString();

    sales.put({
      ...sale,
      syncState: queue ? "pending" : "synced",
      queuedAt: queue ? now : sale.queuedAt || null,
      syncedAt: queue ? sale.syncedAt || null : sale.syncedAt || now
    });

    if (queue) {
      syncQueue.put({
        id: `sale:${sale.saleId}`,
        kind: "sale-upsert",
        payload: sale,
        createdAt: now,
        attempts: 0,
        lastError: ""
      });
    }

    await transactionDone(transaction);
    emitQueueChange();
    return sale;
  }

  async function cacheCloudSales(sales) {
    if (!Array.isArray(sales) || !sales.length) return;
    const database = await openDatabase();
    const transaction = database.transaction(SALES_STORE, "readwrite");
    const store = transaction.objectStore(SALES_STORE);
    const syncedAt = new Date().toISOString();

    sales.forEach((sale) => {
      store.put({
        ...sale,
        syncState: "synced",
        syncedAt,
        queuedAt: sale.queuedAt || null
      });
    });

    await transactionDone(transaction);
  }

  async function getSales() {
    const database = await openDatabase();
    const transaction = database.transaction(SALES_STORE, "readonly");
    const sales = await requestResult(transaction.objectStore(SALES_STORE).getAll());
    await transactionDone(transaction);
    return sales.sort((a, b) => String(a.savedAt || "").localeCompare(String(b.savedAt || "")));
  }

  async function queueMenuUpsert(item) {
    return putQueueEntry({
      id: `menu:${item.id}`,
      kind: "menu-upsert",
      payload: item
    });
  }

  async function queueMenuDelete(itemId) {
    return putQueueEntry({
      id: `menu:${itemId}`,
      kind: "menu-delete",
      payload: { id: itemId }
    });
  }

  async function queueMenuReset(items) {
    const database = await openDatabase();
    const transaction = database.transaction(QUEUE_STORE, "readwrite");
    const store = transaction.objectStore(QUEUE_STORE);
    const existing = await requestResult(store.getAll());
    existing.filter((entry) => entry.kind.startsWith("menu-")).forEach((entry) => store.delete(entry.id));
    store.put({
      id: "menu:__reset__",
      kind: "menu-reset",
      payload: { items },
      createdAt: new Date().toISOString(),
      attempts: 0,
      lastError: ""
    });
    await transactionDone(transaction);
    emitQueueChange();
  }

  async function putQueueEntry(entry) {
    const database = await openDatabase();
    const transaction = database.transaction(QUEUE_STORE, "readwrite");
    transaction.objectStore(QUEUE_STORE).put({
      ...entry,
      createdAt: new Date().toISOString(),
      attempts: 0,
      lastError: ""
    });
    await transactionDone(transaction);
    emitQueueChange();
    return entry;
  }

  async function getQueue() {
    const database = await openDatabase();
    const transaction = database.transaction(QUEUE_STORE, "readonly");
    const queue = await requestResult(transaction.objectStore(QUEUE_STORE).getAll());
    await transactionDone(transaction);
    return queue.sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || "")));
  }

  async function completeQueueEntry(entry) {
    const database = await openDatabase();
    const storeNames = entry.kind === "sale-upsert" ? [QUEUE_STORE, SALES_STORE] : [QUEUE_STORE];
    const transaction = database.transaction(storeNames, "readwrite");
    transaction.objectStore(QUEUE_STORE).delete(entry.id);

    if (entry.kind === "sale-upsert") {
      const sales = transaction.objectStore(SALES_STORE);
      const request = sales.get(entry.payload.saleId);
      request.onsuccess = () => {
        const current = request.result || entry.payload;
        sales.put({
          ...current,
          syncState: "synced",
          syncedAt: new Date().toISOString()
        });
      };
    }

    await transactionDone(transaction);
    emitQueueChange();
  }

  async function failQueueEntry(entry, error) {
    const database = await openDatabase();
    const transaction = database.transaction(QUEUE_STORE, "readwrite");
    transaction.objectStore(QUEUE_STORE).put({
      ...entry,
      attempts: Number(entry.attempts || 0) + 1,
      lastAttemptAt: new Date().toISOString(),
      lastError: String(error?.message || error || "Sync failed").slice(0, 500)
    });
    await transactionDone(transaction);
    emitQueueChange();
  }

  async function getQueueSummary() {
    const queue = await getQueue();
    return {
      total: queue.length,
      sales: queue.filter((entry) => entry.kind === "sale-upsert").length,
      menu: queue.filter((entry) => entry.kind.startsWith("menu-")).length,
      failed: queue.filter((entry) => Number(entry.attempts || 0) > 0).length
    };
  }

  async function setMeta(key, value) {
    const database = await openDatabase();
    const transaction = database.transaction(META_STORE, "readwrite");
    transaction.objectStore(META_STORE).put({ key, value, updatedAt: new Date().toISOString() });
    await transactionDone(transaction);
  }

  async function getMeta(key, fallback = null) {
    const database = await openDatabase();
    const transaction = database.transaction(META_STORE, "readonly");
    const record = await requestResult(transaction.objectStore(META_STORE).get(key));
    await transactionDone(transaction);
    return record ? record.value : fallback;
  }

  async function requestBackgroundSync() {
    if (!("serviceWorker" in navigator)) return false;
    try {
      const registration = await navigator.serviceWorker.ready;
      if (!("sync" in registration)) return false;
      await registration.sync.register("guru-pos-sync");
      return true;
    } catch (error) {
      console.warn("Background sync registration was not available", error);
      return false;
    }
  }

  window.GuruOffline = {
    ready: openDatabase,
    saveSale,
    cacheCloudSales,
    getSales,
    queueMenuUpsert,
    queueMenuDelete,
    queueMenuReset,
    getQueue,
    getQueueSummary,
    completeQueueEntry,
    failQueueEntry,
    setMeta,
    getMeta,
    requestBackgroundSync
  };
})();
