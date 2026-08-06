"use strict";

const APP_CACHE = "guru-pos-app-v9";
const IMAGE_CACHE = "guru-pos-images-v1";
const DB_NAME = "guru-pos-offline";
const DB_VERSION = 1;
const SALES_STORE = "sales";
const QUEUE_STORE = "sync_queue";

const SUPABASE_URL = "https://qujeznrhidgyripoqirf.supabase.co";
const SUPABASE_KEY = "sb_publishable_t9Vz4mu8f7I8N9xqPZaEUQ_ifJ02wpM";
const MENU_ENDPOINT = `${SUPABASE_URL}/rest/v1/menu_items`;
const SALES_ENDPOINT = `${SUPABASE_URL}/rest/v1/sales`;

const APP_SHELL = [
  "/",
  "/index.html",
  "/styles.css",
  "/report-ui.css?v=8",
  "/thermal-print.css?v=9",
  "/offline-sync.js",
  "/script.js?v=8",
  "/manifest.webmanifest",
  "/offline.html",
  "/assets/bar-background.webp",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => ![APP_CACHE, IMAGE_CACHE].includes(name))
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.hostname.includes("supabase.co") || url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(APP_CACHE).then((cache) => cache.put("/index.html", copy));
          return response;
        })
        .catch(async () => (await caches.match("/index.html")) || caches.match("/offline.html"))
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, APP_CACHE));
    return;
  }

  if (request.destination === "image") {
    event.respondWith(cacheFirstImage(request));
  }
});

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);
  if (cached) {
    network.catch(() => null);
    return cached;
  }
  const response = await network;
  return response || new Response("Offline", { status: 503, statusText: "Offline" });
}

async function cacheFirstImage(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response("", { status: 504, statusText: "Image unavailable offline" });
  }
}

self.addEventListener("sync", (event) => {
  if (event.tag === "guru-pos-sync") event.waitUntil(syncQueuedChanges());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SYNC_NOW") {
    event.waitUntil(syncQueuedChanges());
  }
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

function openDatabase() {
  return new Promise((resolve, reject) => {
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
      if (!database.objectStoreNames.contains("meta")) {
        database.createObjectStore("meta", { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

function requestResult(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getQueue(database) {
  const transaction = database.transaction(QUEUE_STORE, "readonly");
  const entries = await requestResult(transaction.objectStore(QUEUE_STORE).getAll());
  await transactionDone(transaction);
  return entries.sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || "")));
}

function headers(extra = {}) {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    ...extra
  };
}

function menuRow(item, index = 0) {
  return {
    id: item.id,
    name: item.name,
    price: Number(item.price) || 0,
    category: item.category || "Thali",
    subcategory: item.category === "Drinks" ? item.subcategory || "Beer" : null,
    photo: item.photo || "",
    sort_order: Number(item.sort_order ?? index) || 0
  };
}

function saleRow(sale) {
  return {
    id: sale.saleId,
    bill_no: sale.billNo,
    sale_date: sale.date,
    grand_total: Number(sale.grandTotal) || 0,
    bill: sale,
    saved_at: sale.savedAt
  };
}

async function replayEntry(entry) {
  if (entry.kind === "sale-upsert") {
    return fetch(SALES_ENDPOINT, {
      method: "POST",
      headers: headers({
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal"
      }),
      body: JSON.stringify(saleRow(entry.payload))
    });
  }

  if (entry.kind === "menu-upsert") {
    return fetch(MENU_ENDPOINT, {
      method: "POST",
      headers: headers({
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal"
      }),
      body: JSON.stringify(menuRow(entry.payload, entry.payload.sort_order || 0))
    });
  }

  if (entry.kind === "menu-delete") {
    return fetch(`${MENU_ENDPOINT}?id=eq.${encodeURIComponent(entry.payload.id)}`, {
      method: "DELETE",
      headers: headers({ Prefer: "return=minimal" })
    });
  }

  if (entry.kind === "menu-reset") {
    const deleteResponse = await fetch(`${MENU_ENDPOINT}?id=neq.__empty__`, {
      method: "DELETE",
      headers: headers({ Prefer: "return=minimal" })
    });
    if (!deleteResponse.ok) return deleteResponse;
    return fetch(MENU_ENDPOINT, {
      method: "POST",
      headers: headers({
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal"
      }),
      body: JSON.stringify((entry.payload.items || []).map(menuRow))
    });
  }

  return new Response("Unknown queue operation", { status: 400 });
}

async function completeEntry(database, entry) {
  const stores = entry.kind === "sale-upsert" ? [QUEUE_STORE, SALES_STORE] : [QUEUE_STORE];
  const transaction = database.transaction(stores, "readwrite");
  transaction.objectStore(QUEUE_STORE).delete(entry.id);

  if (entry.kind === "sale-upsert") {
    const sales = transaction.objectStore(SALES_STORE);
    const request = sales.get(entry.payload.saleId);
    request.onsuccess = () => {
      sales.put({
        ...(request.result || entry.payload),
        syncState: "synced",
        syncedAt: new Date().toISOString()
      });
    };
  }

  await transactionDone(transaction);
}

async function failEntry(database, entry, error) {
  const transaction = database.transaction(QUEUE_STORE, "readwrite");
  transaction.objectStore(QUEUE_STORE).put({
    ...entry,
    attempts: Number(entry.attempts || 0) + 1,
    lastAttemptAt: new Date().toISOString(),
    lastError: String(error?.message || error || "Sync failed").slice(0, 500)
  });
  await transactionDone(transaction);
}

async function notifyClients(message) {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  clients.forEach((client) => client.postMessage(message));
}

async function syncQueuedChanges() {
  const database = await openDatabase();
  const entries = await getQueue(database);
  let synced = 0;

  for (const entry of entries) {
    try {
      const response = await replayEntry(entry);
      if (!response.ok) {
        const message = await response.text();
        await failEntry(database, entry, new Error(message || `HTTP ${response.status}`));
        continue;
      }
      await completeEntry(database, entry);
      synced += 1;
    } catch (error) {
      await failEntry(database, entry, error);
      await notifyClients({ type: "GURU_SYNC_FAILED", message: String(error?.message || error) });
      throw error;
    }
  }

  await notifyClients({ type: "GURU_SYNC_COMPLETE", synced });
  return synced;
}
