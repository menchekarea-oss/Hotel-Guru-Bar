const defaultItems = [
  { id: "chicken-thali", name: "Chicken Unlimited Thali", price: 200, category: "Thali", kind: "food", color: "#b84a2a" },
  { id: "mutton-thali", name: "Mutton Unlimited Thali", price: 250, category: "Thali", kind: "food", color: "#7a2717" },
  { id: "veg-thali", name: "Veg Thali", price: 150, category: "Thali", kind: "food", color: "#2f6f55" },
  { id: "egg-thali", name: "Egg Thali", price: 170, category: "Thali", kind: "food", color: "#d1a04a" },
  { id: "chicken-fry", name: "Chicken Fry", price: 180, category: "Starter", kind: "food", color: "#d18431" },
  { id: "mutton-sukka", name: "Mutton Sukka", price: 240, category: "Starter", kind: "food", color: "#69311f" },
  { id: "chicken-lollipop", name: "Chicken Lollipop", price: 220, category: "Starter", kind: "food", color: "#c23d2a" },
  { id: "paneer-chilli", name: "Paneer Chilli", price: 180, category: "Starter", kind: "food", color: "#d1a04a" },
  { id: "masala-papad", name: "Masala Papad", price: 60, category: "Starter", kind: "food", color: "#b98a31" },
  { id: "egg-curry", name: "Egg Curry", price: 120, category: "Curry", kind: "food", color: "#d1a04a" },
  { id: "chicken-curry", name: "Chicken Curry", price: 210, category: "Curry", kind: "food", color: "#b84a2a" },
  { id: "mutton-curry", name: "Mutton Curry", price: 260, category: "Curry", kind: "food", color: "#7a2717" },
  { id: "paneer-masala", name: "Paneer Masala", price: 190, category: "Curry", kind: "food", color: "#d18431" },
  { id: "dal-fry", name: "Dal Fry", price: 110, category: "Curry", kind: "food", color: "#d1a04a" },
  { id: "plain-rice", name: "Plain Rice", price: 80, category: "Rice", kind: "food", color: "#d8c59c" },
  { id: "jeera-rice", name: "Jeera Rice", price: 110, category: "Rice", kind: "food", color: "#c99d48" },
  { id: "veg-biryani", name: "Veg Biryani", price: 160, category: "Rice", kind: "food", color: "#2f6f55" },
  { id: "chicken-biryani", name: "Chicken Biryani", price: 220, category: "Rice", kind: "food", color: "#b84a2a" },
  { id: "chapati", name: "Chapati", price: 15, category: "Roti", kind: "food", color: "#c99d48" },
  { id: "tandoori-roti", name: "Tandoori Roti", price: 25, category: "Roti", kind: "food", color: "#b97935" },
  { id: "butter-roti", name: "Butter Roti", price: 30, category: "Roti", kind: "food", color: "#d1a04a" },
  { id: "naan", name: "Naan", price: 40, category: "Roti", kind: "food", color: "#d8c59c" },
  { id: "water-bottle", name: "Water Bottle", price: 20, category: "Beverages", kind: "drink", color: "#4f8fbf" },
  { id: "cold-drink", name: "Cold Drink", price: 40, category: "Beverages", kind: "drink", color: "#8e3947" },
  { id: "soda", name: "Soda", price: 30, category: "Beverages", kind: "drink", color: "#4f8fbf" },
  { id: "lime-soda", name: "Lime Soda", price: 50, category: "Beverages", kind: "drink", color: "#2f6f55" },
  { id: "tea", name: "Tea", price: 20, category: "Beverages", kind: "drink", color: "#8a4f2b" },
  { id: "kingfisher", name: "Kingfisher Strong Beer", price: 180, category: "Drinks", subcategory: "Beer", kind: "liquor", color: "#d1a04a" },
  { id: "tuborg", name: "Tuborg Beer", price: 190, category: "Drinks", subcategory: "Beer", kind: "liquor", color: "#2f6f55" },
  { id: "oldmonk", name: "Old Monk Rum 180ml", price: 220, category: "Drinks", subcategory: "Rum", kind: "liquor", color: "#5a2519" },
  { id: "mcwhisky", name: "McDowell's Whisky 180ml", price: 260, category: "Drinks", subcategory: "Whisky", kind: "liquor", color: "#b66a2f" },
  { id: "royalstag", name: "Royal Stag 180ml", price: 310, category: "Drinks", subcategory: "Whisky", kind: "liquor", color: "#7a2717" },
  { id: "blenders", name: "Blenders Pride 180ml", price: 420, category: "Drinks", subcategory: "Whisky", kind: "liquor", color: "#243c5a" },
  { id: "signature", name: "Signature Whisky 180ml", price: 460, category: "Drinks", subcategory: "Whisky", kind: "liquor", color: "#1f5c4c" },
  { id: "vodka", name: "Magic Moments Vodka 180ml", price: 300, category: "Drinks", subcategory: "Vodka", kind: "liquor", color: "#8e3947" }
];

const itemPhotos = {
  "chicken-thali": "https://images.pexels.com/photos/35539324/pexels-photo-35539324.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "mutton-thali": "https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "veg-thali": "https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "egg-thali": "https://images.pexels.com/photos/9345670/pexels-photo-9345670.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "chicken-fry": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "mutton-sukka": "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "chicken-lollipop": "https://images.pexels.com/photos/32083371/pexels-photo-32083371.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "paneer-chilli": "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "masala-papad": "https://images.pexels.com/photos/15995519/pexels-photo-15995519.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "egg-curry": "https://images.pexels.com/photos/35539329/pexels-photo-35539329.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "chicken-curry": "https://images.pexels.com/photos/7353487/pexels-photo-7353487.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "mutton-curry": "https://images.pexels.com/photos/27200320/pexels-photo-27200320.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "paneer-masala": "https://images.pexels.com/photos/29850004/pexels-photo-29850004.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "dal-fry": "https://images.pexels.com/photos/33709317/pexels-photo-33709317.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "plain-rice": "https://images.pexels.com/photos/35539325/pexels-photo-35539325.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "jeera-rice": "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "veg-biryani": "https://images.pexels.com/photos/32518353/pexels-photo-32518353.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "chicken-biryani": "https://images.pexels.com/photos/9743517/pexels-photo-9743517.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  chapati: "https://images.pexels.com/photos/19418741/pexels-photo-19418741.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "tandoori-roti": "https://images.pexels.com/photos/20446413/pexels-photo-20446413.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "butter-roti": "https://images.pexels.com/photos/10999800/pexels-photo-10999800.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  naan: "https://images.pexels.com/photos/20446381/pexels-photo-20446381.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "water-bottle": "https://images.pexels.com/photos/2302809/pexels-photo-2302809.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "cold-drink": "https://images.pexels.com/photos/33013697/pexels-photo-33013697.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  soda: "https://images.pexels.com/photos/19065302/pexels-photo-19065302.png?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  "lime-soda": "https://images.pexels.com/photos/28273313/pexels-photo-28273313.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  tea: "https://images.pexels.com/photos/16604559/pexels-photo-16604559.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  kingfisher: "https://images.pexels.com/photos/14866145/pexels-photo-14866145.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  tuborg: "https://images.pexels.com/photos/30271790/pexels-photo-30271790.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  oldmonk: "https://images.pexels.com/photos/33109720/pexels-photo-33109720.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  mcwhisky: "https://images.pexels.com/photos/33923237/pexels-photo-33923237.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  royalstag: "https://images.pexels.com/photos/35915768/pexels-photo-35915768.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  blenders: "https://images.pexels.com/photos/16510209/pexels-photo-16510209.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  signature: "https://images.pexels.com/photos/32618806/pexels-photo-32618806.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop",
  vodka: "https://images.pexels.com/photos/19841825/pexels-photo-19841825.jpeg?auto=compress&cs=tinysrgb&w=240&h=180&fit=crop"
};

const itemImageRules = [
  { keys: ["chicken", "biryani"], photo: itemPhotos["chicken-biryani"] },
  { keys: ["veg", "biryani"], photo: itemPhotos["veg-biryani"] },
  { keys: ["chicken", "thali"], photo: itemPhotos["chicken-thali"] },
  { keys: ["mutton", "thali"], photo: itemPhotos["mutton-thali"] },
  { keys: ["veg", "thali"], photo: itemPhotos["veg-thali"] },
  { keys: ["egg", "thali"], photo: itemPhotos["egg-thali"] },
  { keys: ["chicken", "lollipop"], photo: itemPhotos["chicken-lollipop"] },
  { keys: ["chicken", "fry"], photo: itemPhotos["chicken-fry"] },
  { keys: ["chicken", "curry"], photo: itemPhotos["chicken-curry"] },
  { keys: ["mutton", "sukka"], photo: itemPhotos["mutton-sukka"] },
  { keys: ["mutton", "curry"], photo: itemPhotos["mutton-curry"] },
  { keys: ["paneer", "chilli"], photo: itemPhotos["paneer-chilli"] },
  { keys: ["paneer"], photo: itemPhotos["paneer-masala"] },
  { keys: ["masala", "papad"], photo: itemPhotos["masala-papad"] },
  { keys: ["egg", "curry"], photo: itemPhotos["egg-curry"] },
  { keys: ["dal"], photo: itemPhotos["dal-fry"] },
  { keys: ["jeera", "rice"], photo: itemPhotos["jeera-rice"] },
  { keys: ["plain", "rice"], photo: itemPhotos["plain-rice"] },
  { keys: ["tandoori", "roti"], photo: itemPhotos["tandoori-roti"] },
  { keys: ["butter", "roti"], photo: itemPhotos["butter-roti"] },
  { keys: ["chapati"], photo: itemPhotos.chapati },
  { keys: ["naan"], photo: itemPhotos.naan },
  { keys: ["water", "bottle"], photo: itemPhotos["water-bottle"] },
  { keys: ["cold", "drink"], photo: itemPhotos["cold-drink"] },
  { keys: ["lime", "soda"], photo: itemPhotos["lime-soda"] },
  { keys: ["soda"], photo: itemPhotos.soda },
  { keys: ["tea"], photo: itemPhotos.tea },
  { keys: ["kingfisher"], photo: itemPhotos.kingfisher },
  { keys: ["tuborg"], photo: itemPhotos.tuborg },
  { keys: ["beer"], photo: itemPhotos.kingfisher },
  { keys: ["old", "monk"], photo: itemPhotos.oldmonk },
  { keys: ["rum"], photo: itemPhotos.oldmonk },
  { keys: ["mcdowell"], photo: itemPhotos.mcwhisky },
  { keys: ["royal", "stag"], photo: itemPhotos.royalstag },
  { keys: ["blenders"], photo: itemPhotos.blenders },
  { keys: ["signature"], photo: itemPhotos.signature },
  { keys: ["whisky"], photo: itemPhotos.mcwhisky },
  { keys: ["whiskey"], photo: itemPhotos.mcwhisky },
  { keys: ["vodka"], photo: itemPhotos.vodka },
  { keys: ["magic", "moments"], photo: itemPhotos.vodka },
  { keys: ["biryani"], photo: itemPhotos["chicken-biryani"] },
  { keys: ["thali"], photo: itemPhotos["veg-thali"] },
  { keys: ["rice"], photo: itemPhotos["plain-rice"] },
  { keys: ["roti"], photo: itemPhotos["tandoori-roti"] }
];

const menuKey = "hotelGuruMenu";
const supabaseProjectUrl = "https://qujeznrhidgyripoqirf.supabase.co";
const supabasePublishableKey = "sb_publishable_t9Vz4mu8f7I8N9xqPZaEUQ_ifJ02wpM";
const supabaseMenuEndpoint = `${supabaseProjectUrl}/rest/v1/menu_items`;
const supabaseSalesEndpoint = `${supabaseProjectUrl}/rest/v1/sales`;
const salesKey = "hotelGuruSales";
const billCounterKey = "hotelGuruBillCounter";
const tableOrdersKey = "hotelGuruTableOrders";
const activeTableOrderKey = "hotelGuruActiveTableOrder";
const savedReportsKey = "hotelGuruSavedReports";
const reportResetHour = 2;
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

let items = loadMenu();
const quantities = new Map(items.map((item) => [item.id, 0]));
let activeFilter = "all";
let activeSubfilter = "all";
let activeDrinkSubfilter = "all";
let searchQuery = "";
let billsDirectoryHandle = null;
let activeOrderId = null;
let showAllTopItems = false;
let isRestoringOrder = false;
let rolloverTimer = null;
let menuSyncInProgress = false;
let salesSyncInProgress = false;

const itemsGrid = document.querySelector("#itemsGrid");
const billLines = document.querySelector("#billLines");
const subtotalEl = document.querySelector("#subtotal");
const serviceChargeEl = document.querySelector("#serviceCharge");
const gstRow = document.querySelector("#gstRow");
const gstLabel = document.querySelector("#gstLabel");
const gstAmountEl = document.querySelector("#gstAmount");
const grandTotalEl = document.querySelector("#grandTotal");
const billNo = document.querySelector("#billNo");
const billDate = document.querySelector("#billDate");
const tableNo = document.querySelector("#tableNo");
const customerName = document.querySelector("#customerName");
const gstEnabled = document.querySelector("#gstEnabled");
const gstRate = document.querySelector("#gstRate");
const summaryBillNo = document.querySelector("#summaryBillNo");
const summaryDate = document.querySelector("#summaryDate");
const menuTabs = document.querySelector(".menu-tabs");
const foodSubmenu = document.querySelector("#foodSubmenu");
const drinkSubmenu = document.querySelector("#drinkSubmenu");
const menuSearch = document.querySelector("#menuSearch");
const saveStatus = document.querySelector("#saveStatus");
const printReceipt = document.querySelector("#printReceipt");
const salesReport = document.querySelector("#salesReport");
const tableTabs = document.querySelector("#tableTabs");
const newTableName = document.querySelector("#newTableName");
const menuForm = document.querySelector("#menuForm");
const menuTable = document.querySelector("#menuTable");
const editItemId = document.querySelector("#editItemId");
const menuItemName = document.querySelector("#menuItemName");
const menuItemPrice = document.querySelector("#menuItemPrice");
const menuItemCategory = document.querySelector("#menuItemCategory");
const menuItemSubcategory = document.querySelector("#menuItemSubcategory");
const menuItemPhoto = document.querySelector("#menuItemPhoto");
const menuSubmitButton = menuForm?.querySelector(".form-submit");

function loadMenu() {
  try {
    return JSON.parse(localStorage.getItem(menuKey)) || defaultItems;
  } catch {
    return defaultItems;
  }
}

function saveMenu() {
  localStorage.setItem(menuKey, JSON.stringify(items));
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: supabasePublishableKey,
    Authorization: `Bearer ${supabasePublishableKey}`,
    ...extra
  };
}

function inferDrinkSubcategory(item) {
  const text = `${item.name || ""} ${item.id || ""} ${item.subcategory || ""}`.toLowerCase();
  if (text.includes("old monk") || text.includes("oldmonk") || text.includes("rum")) return "Rum";
  if (text.includes("magic moments") || text.includes("vodka")) return "Vodka";
  if (text.includes("wine")) return "Wine";
  if (
    text.includes("whisky") ||
    text.includes("whiskey") ||
    text.includes("mcdowell") ||
    text.includes("royal stag") ||
    text.includes("royalstag") ||
    text.includes("blenders") ||
    text.includes("signature") ||
    text.includes("imperial blue") ||
    text.includes("officer") ||
    text.includes("black dog") ||
    text.includes("teachers") ||
    text.includes("100 pipers") ||
    text.includes("antiquity")
  ) return "Whisky";
  if (
    text.includes("beer") ||
    text.includes("kingfisher") ||
    text.includes("tuborg") ||
    text.includes("budweiser") ||
    text.includes("carlsberg") ||
    text.includes("corona") ||
    text.includes("bira")
  ) return "Beer";
  return "";
}

function normalizeMenuItem(item) {
  const category = item.category || "Thali";
  const inferredSubcategory = category === "Drinks" ? inferDrinkSubcategory(item) : "";
  return {
    ...item,
    price: Number(item.price) || 0,
    subcategory: category === "Drinks" ? inferredSubcategory || item.subcategory || "Beer" : item.subcategory || "",
    kind: category === "Drinks" ? "liquor" : category === "Beverages" ? "drink" : "food",
    color: item.color || "#b84a2a",
    photo: item.photo || itemPhotos[item.id] || keywordImage(item) || ""
  };
}

function menuItemFromSupabase(row) {
  return normalizeMenuItem({
    id: row.id,
    name: row.name,
    price: row.price,
    category: row.category,
    subcategory: row.subcategory || "",
    photo: row.photo || "",
    color: "#b84a2a"
  });
}

function menuItemToSupabase(item, index = 0) {
  return {
    id: item.id,
    name: item.name,
    price: Number(item.price) || 0,
    category: item.category,
    subcategory: item.category === "Drinks" ? item.subcategory || "Beer" : item.subcategory || null,
    photo: item.photo || "",
    sort_order: index
  };
}

function applySyncedMenu(nextItems) {
  items = nextItems.map(normalizeMenuItem);
  const itemIds = new Set(items.map((item) => item.id));
  [...quantities.keys()].forEach((id) => {
    if (!itemIds.has(id)) quantities.delete(id);
  });
  items.forEach((item) => {
    if (!quantities.has(item.id)) quantities.set(item.id, 0);
  });
  saveMenu();
  renderItems();
  renderBill();
  renderMenuTable();
}

async function fetchSupabaseMenu() {
  const response = await fetch(`${supabaseMenuEndpoint}?select=*&order=sort_order.asc,name.asc`, {
    headers: supabaseHeaders()
  });
  if (!response.ok) throw new Error(await response.text());
  return (await response.json()).map(menuItemFromSupabase);
}

async function upsertSupabaseMenuItem(item) {
  const response = await fetch(supabaseMenuEndpoint, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates"
    }),
    body: JSON.stringify(menuItemToSupabase(item, items.findIndex((menuItem) => menuItem.id === item.id)))
  });
  if (!response.ok) throw new Error(await response.text());
}

async function deleteSupabaseMenuItem(id) {
  const response = await fetch(`${supabaseMenuEndpoint}?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: supabaseHeaders()
  });
  if (!response.ok) throw new Error(await response.text());
}

async function seedSupabaseMenuIfEmpty() {
  const cloudItems = await fetchSupabaseMenu();
  if (cloudItems.length) return cloudItems;

  const seedItems = items.map(normalizeMenuItem);
  const response = await fetch(supabaseMenuEndpoint, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates"
    }),
    body: JSON.stringify(seedItems.map(menuItemToSupabase))
  });
  if (!response.ok) throw new Error(await response.text());
  return seedItems;
}

async function syncMenuFromSupabase({ silent = true } = {}) {
  if (menuSyncInProgress) return;
  menuSyncInProgress = true;
  try {
    const cloudItems = await seedSupabaseMenuIfEmpty();
    if (cloudItems.length) applySyncedMenu(cloudItems);
    if (!silent) saveStatus.textContent = "Menu synced with Supabase.";
  } catch (error) {
    if (!silent) saveStatus.textContent = "Supabase menu sync failed. Check table setup.";
    console.error("Supabase menu sync failed", error);
  } finally {
    menuSyncInProgress = false;
  }
}

function startSupabaseMenuSync() {
  syncMenuFromSupabase();
  window.setInterval(() => syncMenuFromSupabase(), 30000);
}

function loadTableOrders() {
  try {
    return JSON.parse(localStorage.getItem(tableOrdersKey)) || {};
  } catch {
    return {};
  }
}

function saveTableOrders(orders) {
  localStorage.setItem(tableOrdersKey, JSON.stringify(orders));
}

function reserveBillNumber() {
  const current = Number(localStorage.getItem(billCounterKey) || "1");
  localStorage.setItem(billCounterKey, String(current + 1));
  return `GBR-${String(current).padStart(3, "0")}`;
}

function quantityObject() {
  return Object.fromEntries(items.map((item) => [item.id, quantities.get(item.id) || 0]).filter((entry) => entry[1] > 0));
}

function restoreQuantities(savedQuantities = {}) {
  items.forEach((item) => quantities.set(item.id, Number(savedQuantities[item.id]) || 0));
}

function currentOrderSnapshot() {
  const savedOrder = activeOrderId ? loadTableOrders()[activeOrderId] : null;
  return {
    id: activeOrderId,
    billNo: billNo.value.trim() || savedOrder?.billNo || reserveBillNumber(),
    table: tableNo.value.trim(),
    customer: customerName.value.trim(),
    date: billDate.value,
    gstEnabled: gstEnabled.checked,
    gstRate: gstRate.value,
    quantities: quantityObject(),
    updatedAt: new Date().toISOString()
  };
}

function saveActiveOrder() {
  if (!activeOrderId || isRestoringOrder) return;
  const orders = loadTableOrders();
  orders[activeOrderId] = currentOrderSnapshot();
  saveTableOrders(orders);
  renderTableTabs();
}

function createTableOrder(tableLabel) {
  const id = `order-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const existingNumbers = Object.values(loadTableOrders())
    .map((order) => String(order.table || "").match(/\d+/))
    .filter(Boolean)
    .map((match) => Number(match[0]));
  let nextTableNumber = 1;
  while (existingNumbers.includes(nextTableNumber)) nextTableNumber += 1;
  const label = tableLabel.trim() || `Table ${nextTableNumber}`;
  const order = {
    id,
    billNo: reserveBillNumber(),
    table: label,
    customer: "",
    date: billDate.value || todayValue(),
    gstEnabled: true,
    gstRate: "5",
    quantities: {},
    updatedAt: new Date().toISOString()
  };
  const orders = loadTableOrders();
  orders[id] = order;
  saveTableOrders(orders);
  setActiveOrder(id);
}

function setActiveOrder(id) {
  const orders = loadTableOrders();
  const order = orders[id];
  if (!order) return;
  activeOrderId = id;
  localStorage.setItem(activeTableOrderKey, id);
  isRestoringOrder = true;
  billNo.value = order.billNo || reserveBillNumber();
  tableNo.value = order.table || "";
  customerName.value = order.customer || "";
  billDate.value = todayValue();
  gstEnabled.checked = order.gstEnabled !== false;
  gstRate.value = order.gstRate || "5";
  restoreQuantities(order.quantities);
  isRestoringOrder = false;
  renderItems();
  renderBill();
  renderSalesReport();
  renderTableTabs();
}

function removeActiveOrder() {
  if (!activeOrderId) return;
  const orders = loadTableOrders();
  delete orders[activeOrderId];
  saveTableOrders(orders);
  const nextId = Object.keys(orders)[0];
  if (nextId) {
    setActiveOrder(nextId);
    return;
  }
  activeOrderId = null;
  localStorage.removeItem(activeTableOrderKey);
  createTableOrder("Table 1");
}

function initializeTableOrders() {
  const orders = loadTableOrders();
  const savedActive = localStorage.getItem(activeTableOrderKey);
  const firstId = savedActive && orders[savedActive] ? savedActive : Object.keys(orders)[0];
  if (firstId) {
    setActiveOrder(firstId);
    return;
  }
  createTableOrder("Table 1");
}

function tableSortValue(order) {
  const label = String(order.table || "");
  const match = label.match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

function renderTableTabs() {
  const orders = loadTableOrders();
  const entries = Object.values(orders).sort((a, b) => {
    const numberDiff = tableSortValue(a) - tableSortValue(b);
    if (numberDiff) return numberDiff;
    return String(a.table || "").localeCompare(String(b.table || ""), undefined, { numeric: true, sensitivity: "base" });
  });
  tableTabs.innerHTML = entries.length
    ? entries.map((order) => {
      const count = Object.values(order.quantities || {}).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
      return `<button type="button" class="table-tab ${order.id === activeOrderId ? "active" : ""}" data-order="${order.id}">
        <strong>${order.table || "Table"}</strong>
        <small>${order.billNo} - ${count} item${count === 1 ? "" : "s"}</small>
      </button>`;
    }).join("")
    : '<p class="empty-state">No running tables.</p>';
}

function bottleImage(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="10" fill="#f4eadb"/><ellipse cx="60" cy="102" rx="34" ry="8" fill="#cbbba6"/><rect x="49" y="18" width="22" height="24" rx="5" fill="${color}"/><path d="M43 40h34l7 49c1 8-5 15-13 15H49c-8 0-14-7-13-15l7-49z" fill="${color}"/><rect x="46" y="60" width="28" height="21" rx="3" fill="#fff7e8" opacity=".92"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function foodImage(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="10" fill="#f4eadb"/><ellipse cx="60" cy="72" rx="42" ry="34" fill="#fdf8ee" stroke="#d6c6ad" stroke-width="4"/><ellipse cx="60" cy="72" rx="31" ry="24" fill="${color}"/><circle cx="41" cy="57" r="8" fill="#fff3d3"/><circle cx="76" cy="60" r="9" fill="#e9ba45"/><path d="M36 80c14 10 34 11 50 1" fill="none" stroke="#fff4de" stroke-width="6" stroke-linecap="round" opacity=".75"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function fallbackImage(item) {
  return item.kind === "liquor" ? bottleImage(item.color) : foodImage(item.color);
}

function keywordImage(item) {
  const text = `${item.name || ""} ${item.id || ""} ${item.category || ""} ${item.subcategory || ""}`.toLowerCase();
  const rule = itemImageRules.find((imageRule) => imageRule.keys.every((key) => text.includes(key)));
  return rule?.photo || "";
}

function itemImage(item) {
  return item.photo || itemPhotos[item.id] || keywordImage(item) || fallbackImage(item);
}

function drinkSubcategory(item) {
  const inferred = inferDrinkSubcategory(item);
  if (inferred) return inferred;
  if (item.subcategory) return item.subcategory;
  return "Other";
}

function isSnackItem(item) {
  return item.category === "Snacks" || item.category === "Starter";
}

function isFoodItem(item) {
  return item.category !== "Drinks" && !isSnackItem(item);
}

function selectedItems() {
  return items.map((item) => ({ ...item, quantity: quantities.get(item.id) || 0 })).filter((item) => item.quantity > 0);
}

function getTotals() {
  const selected = selectedItems();
  const subtotal = selected.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const rate = Math.max(0, Number(gstRate.value) || 0);
  const gstAmount = gstEnabled.checked ? Math.round(subtotal * (rate / 100)) : 0;
  return { selected, subtotal, serviceCharge: 0, gstRate: rate, gstAmount, grandTotal: subtotal + gstAmount };
}

function passesFilter(item) {
  const query = searchQuery.trim().toLowerCase();
  const text = `${item.name} ${item.category}`.toLowerCase();
  if (query && !text.includes(query)) return false;
  if (activeFilter === "all") return true;
  if (activeFilter === "Drinks") return item.category === "Drinks" && (activeDrinkSubfilter === "all" || drinkSubcategory(item) === activeDrinkSubfilter);
  if (activeFilter === "Snacks") return isSnackItem(item);
  if (activeFilter === "Food") return activeSubfilter === "all" ? isFoodItem(item) : item.category === activeSubfilter;
  return true;
}

function renderItems() {
  const visibleItems = items.filter(passesFilter);
  itemsGrid.innerHTML = visibleItems.length
    ? visibleItems.map((item) => `
      <article class="item-card">
        <img class="item-image" src="${itemImage(item)}" alt="${item.name}" data-fallback="${fallbackImage(item)}" />
        <div class="item-detail">
          <span class="item-category">${item.category === "Drinks" ? drinkSubcategory(item) : isSnackItem(item) ? "Snacks" : item.category}</span>
          <h3>${item.name}</h3>
          <span class="item-price">${currency.format(item.price)}</span>
          <div class="qty-row" aria-label="${item.name} quantity">
            <button type="button" data-action="decrement" data-id="${item.id}" title="Decrease quantity">-</button>
            <input type="number" min="0" step="1" value="${quantities.get(item.id) || 0}" data-id="${item.id}" aria-label="${item.name} quantity" />
            <button type="button" data-action="increment" data-id="${item.id}" title="Increase quantity">+</button>
          </div>
        </div>
      </article>`).join("")
    : '<p class="empty-state">No menu items found.</p>';

  itemsGrid.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = image.dataset.fallback;
    }, { once: true });
  });
}

function updateQuantity(id, nextQuantity) {
  const quantity = Math.max(0, Number.parseInt(nextQuantity, 10) || 0);
  quantities.set(id, quantity);
  const input = itemsGrid.querySelector(`input[data-id="${id}"]`);
  if (input) input.value = quantity;
  renderBill();
  saveActiveOrder();
}

function renderBill() {
  summaryBillNo.textContent = billNo.value.trim() || "Bill";
  summaryDate.textContent = billDate.value ? formatDate(billDate.value) : "";
  const totals = getTotals();

  billLines.innerHTML = totals.selected.length
    ? totals.selected.map((item) => `
      <div class="bill-line">
        <span>${item.name}<small>${item.quantity} x ${currency.format(item.price)}</small></span>
        <strong>${currency.format(item.price * item.quantity)}</strong>
      </div>`).join("")
    : '<p class="empty-state">Add quantity to start billing.</p>';

  subtotalEl.textContent = currency.format(totals.subtotal);
  if (serviceChargeEl) serviceChargeEl.textContent = currency.format(0);
  gstRow.hidden = !gstEnabled.checked;
  gstLabel.textContent = `GST ${totals.gstRate}%`;
  gstAmountEl.textContent = currency.format(totals.gstAmount);
  grandTotalEl.textContent = currency.format(totals.grandTotal);
  saveActiveOrder();
}

function buildBillData() {
  const totals = getTotals();
  return {
    billNo: billNo.value.trim() || "Bill",
    date: billDate.value,
    dateText: billDate.value ? formatDate(billDate.value) : "",
    table: tableNo.value.trim(),
    customer: customerName.value.trim(),
    items: totals.selected,
    subtotal: totals.subtotal,
    serviceCharge: totals.serviceCharge,
    gstEnabled: gstEnabled.checked,
    gstRate: totals.gstRate,
    gstAmount: totals.gstAmount,
    grandTotal: totals.grandTotal,
    savedAt: new Date().toISOString()
  };
}

function receiptHtml(bill) {
  const rows = bill.items.map((item) => `
    <tr><td>${item.name}<small>${item.quantity} x ${currency.format(item.price)}</small></td><td>${currency.format(item.price * item.quantity)}</td></tr>`).join("");
  return `
    <article class="receipt">
      <h2>Hotel Guru Bar & Restaurant</h2>
      <p>Zari Bk, Latur</p>
      <div class="receipt-meta">
        <span>Bill: ${bill.billNo}</span>
        <span>Date: ${bill.dateText}</span>
        <span>Table: ${bill.table || "-"}</span>
        <span>Customer: ${bill.customer || "-"}</span>
      </div>
      <table><tbody>${rows}</tbody></table>
      <div class="receipt-totals">
        <p><span>Subtotal</span><strong>${currency.format(bill.subtotal)}</strong></p>
        ${bill.gstEnabled ? `<p><span>GST ${bill.gstRate}%</span><strong>${currency.format(bill.gstAmount)}</strong></p>` : ""}
        <p class="receipt-grand"><span>Total</span><strong>${currency.format(bill.grandTotal)}</strong></p>
      </div>
      <footer>Thank you. Visit again.</footer>
    </article>`;
}

function fullReceiptHtml(bill) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${bill.billNo}</title><style>body{font-family:Arial;padding:24px}.receipt{max-width:420px;margin:auto}.receipt h2{text-align:center}.receipt>p,.receipt footer{text-align:center}.receipt-meta{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;border-top:1px solid #999;border-bottom:1px solid #999;padding:10px 0;margin:14px 0}table{width:100%;border-collapse:collapse}td{padding:8px 0;border-bottom:1px dashed #bbb}td:last-child{text-align:right;font-weight:800}small{display:block;color:#555}.receipt-totals p{display:flex;justify-content:space-between}.receipt-grand{font-size:20px;border-top:2px solid #111;padding-top:10px}</style></head><body>${printReceipt.innerHTML}</body></html>`;
}

function pdfText(value) {
  return String(value ?? "")
    .replace(/₹/g, "Rs. ")
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function pdfMoney(value) {
  return `Rs. ${Math.round(Number(value) || 0).toLocaleString("en-IN")}`;
}

function wrapPdfText(text, maxLength = 42) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function buildBillPdf(bill) {
  const commands = [];
  let y = 792;
  const left = 44;
  const right = 552;

  function text(x, size, value, font = "F1") {
    commands.push(`BT /${font} ${size} Tf ${x} ${y} Td (${pdfText(value)}) Tj ET`);
    y -= size + 7;
  }

  function rule() {
    y -= 4;
    commands.push(`0.6 w ${left} ${y} m ${right} ${y} l S`);
    y -= 14;
  }

  text(150, 18, "Hotel Guru Bar & Restaurant", "F2");
  text(246, 10, "Zari Bk, Latur");
  rule();
  text(left, 11, `Bill No: ${bill.billNo}`, "F2");
  text(left, 11, `Date: ${bill.dateText || bill.date || "-"}`);
  text(left, 11, `Table: ${bill.table || "-"}`);
  text(left, 11, `Customer: ${bill.customer || "-"}`);
  rule();
  text(left, 12, "Items", "F2");

  bill.items.forEach((item, index) => {
    const nameLines = wrapPdfText(`${index + 1}. ${item.name}`, 44);
    text(left, 10, nameLines[0], "F2");
    nameLines.slice(1).forEach((line) => text(left + 14, 10, line, "F2"));
    y += 17;
    text(390, 10, `${item.quantity} x ${pdfMoney(item.price)}`);
    y += 17;
    text(486, 10, pdfMoney(item.price * item.quantity), "F2");
    y -= 4;
  });

  rule();
  text(360, 11, `Subtotal: ${pdfMoney(bill.subtotal)}`);
  if (bill.gstEnabled) text(360, 11, `GST ${bill.gstRate}%: ${pdfMoney(bill.gstAmount)}`);
  y -= 2;
  text(360, 15, `Total: ${pdfMoney(bill.grandTotal)}`, "F2");
  rule();
  text(205, 10, "Thank you. Visit again.");

  const content = commands.join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function prepareReceipt() {
  const bill = buildBillData();
  printReceipt.innerHTML = receiptHtml(bill);
  return bill;
}

async function chooseBillsFolder() {
  if (!window.showDirectoryPicker) {
    saveStatus.textContent = "Folder picker is not available. Save Bill will use server save or download fallback.";
    return;
  }
  billsDirectoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
  saveStatus.textContent = "Bills folder selected. Future bills will save there.";
}

async function saveWithFolderPicker(bill) {
  const pdfFile = await billsDirectoryHandle.getFileHandle(`${bill.billNo}.pdf`, { create: true });
  const jsonFile = await billsDirectoryHandle.getFileHandle(`${bill.billNo}.json`, { create: true });
  const pdfWritable = await pdfFile.createWritable();
  await pdfWritable.write(buildBillPdf(bill));
  await pdfWritable.close();
  const jsonWritable = await jsonFile.createWritable();
  await jsonWritable.write(JSON.stringify(bill, null, 2));
  await jsonWritable.close();
}

async function saveBillToFolder() {
  const bill = prepareReceipt();
  if (!bill.items.length) {
    saveStatus.textContent = "Add items before saving bill.";
    return;
  }

  if (billsDirectoryHandle) {
    await saveWithFolderPicker(bill);
    recordSale(bill);
    saveStatus.textContent = `Saved in selected bills folder: ${bill.billNo}`;
    removeActiveOrder();
    renderSalesReport();
    return;
  }

  try {
    const receiptPdfBase64 = await blobToBase64(buildBillPdf(bill));
    const response = await fetch("/api/save-bill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bill, receiptPdfBase64 })
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || "Save failed");
    recordSale(bill);
    saveStatus.textContent = `Saved in bills folder: ${bill.billNo}`;
    removeActiveOrder();
  } catch {
    downloadReceipt(bill);
    recordSale(bill);
    saveStatus.textContent = `Bill saved: ${bill.billNo}`;
    removeActiveOrder();
  }
  renderSalesReport();
}

function downloadReceipt(bill) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(buildBillPdf(bill));
  link.download = `${bill.billNo}.pdf`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function recordSale(bill) {
  const sale = normalizeSale(bill);
  mergeSales([sale]);
  markReportUnsaved(sale.date);
  upsertSupabaseSale(sale).then(() => {
    syncSalesFromSupabase();
  }).catch((error) => {
    saveStatus.textContent = "Bill saved locally. Supabase sales sync failed.";
    console.error("Supabase sale save failed", error);
  });
}

function loadSales() {
  try {
    return JSON.parse(localStorage.getItem(salesKey) || "[]");
  } catch {
    return [];
  }
}

function saveSales(sales) {
  localStorage.setItem(salesKey, JSON.stringify(sales));
}

function localDateValue(date = new Date()) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function saleStorageId(bill) {
  return bill.saleId || `${bill.billNo || "Bill"}-${bill.savedAt || Date.now()}`;
}

function normalizeSale(bill) {
  return {
    ...bill,
    saleId: saleStorageId(bill),
    date: bill.date || localDateValue(),
    savedAt: bill.savedAt || new Date().toISOString()
  };
}

function mergeSales(nextSales) {
  const merged = new Map();
  loadSales().map(normalizeSale).forEach((sale) => merged.set(sale.saleId, sale));
  nextSales.map(normalizeSale).forEach((sale) => merged.set(sale.saleId, sale));
  const sorted = [...merged.values()].sort((a, b) => String(a.savedAt || "").localeCompare(String(b.savedAt || "")));
  saveSales(sorted);
  return sorted;
}

function saleToSupabase(bill) {
  const sale = normalizeSale(bill);
  return {
    id: sale.saleId,
    bill_no: sale.billNo,
    sale_date: sale.date,
    grand_total: Number(sale.grandTotal) || 0,
    bill: sale,
    saved_at: sale.savedAt
  };
}

function saleFromSupabase(row) {
  return normalizeSale(row.bill || {
    saleId: row.id,
    billNo: row.bill_no,
    date: row.sale_date,
    grandTotal: row.grand_total,
    savedAt: row.saved_at,
    items: []
  });
}

async function upsertSupabaseSale(bill) {
  const response = await fetch(supabaseSalesEndpoint, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates"
    }),
    body: JSON.stringify(saleToSupabase(bill))
  });
  if (!response.ok) throw new Error(await response.text());
}

async function fetchSupabaseSales() {
  const response = await fetch(`${supabaseSalesEndpoint}?select=*&order=saved_at.asc`, {
    headers: supabaseHeaders()
  });
  if (!response.ok) throw new Error(await response.text());
  return (await response.json()).map(saleFromSupabase);
}

async function syncSalesFromSupabase({ silent = true } = {}) {
  if (salesSyncInProgress) return;
  salesSyncInProgress = true;
  try {
    const cloudSales = await fetchSupabaseSales();
    mergeSales(cloudSales);
    renderSalesReport();
    if (!silent) saveStatus.textContent = "Sales report synced with Supabase.";
  } catch (error) {
    if (!silent) saveStatus.textContent = "Sales sync failed. Check Supabase sales table.";
    console.error("Supabase sales sync failed", error);
  } finally {
    salesSyncInProgress = false;
  }
}

function startSupabaseSalesSync() {
  syncSalesFromSupabase();
  window.setInterval(() => syncSalesFromSupabase(), 30000);
}

function getSavedReportDates() {
  try {
    return JSON.parse(localStorage.getItem(savedReportsKey) || "[]");
  } catch {
    return [];
  }
}

function setSavedReportDates(dates) {
  localStorage.setItem(savedReportsKey, JSON.stringify([...new Set(dates)].sort()));
}

function markReportUnsaved(date) {
  if (!date) return;
  setSavedReportDates(getSavedReportDates().filter((savedDate) => savedDate !== date));
}

function markReportSaved(date) {
  if (!date) return;
  setSavedReportDates(getSavedReportDates().concat(date));
}

function buildDailyReport(date) {
  const sales = loadSales().filter((sale) => sale.date === date);
  const total = sales.reduce((sum, sale) => sum + sale.grandTotal, 0);
  const itemCounts = new Map();
  let drinkCount = 0;
  let bottleCount = 0;
  sales.forEach((sale) => {
    sale.items.forEach((item) => {
      itemCounts.set(item.name, (itemCounts.get(item.name) || 0) + item.quantity);
      if (item.kind === "drink" || item.kind === "liquor" || item.category === "Beverages" || item.category === "Drinks") {
        drinkCount += item.quantity;
      }
      if (item.kind === "liquor" || item.category === "Drinks") {
        bottleCount += item.quantity;
      }
    });
  });
  const sortedItems = [...itemCounts.entries()].sort((a, b) => b[1] - a[1]);
  return {
    reportNo: `Daily-Sales-${date}`,
    date,
    dateText: formatDate(date),
    bills: sales.length,
    total,
    drinkCount,
    bottleCount,
    topItems: sortedItems,
    sales,
    savedAt: new Date().toISOString()
  };
}

function selectedReportDate() {
  return todayValue();
}

function dailyReportHtml(report) {
  const itemRows = report.topItems.map(([name, qty], index) => `
    <tr><td>${index + 1}</td><td>${name}</td><td>${qty}</td></tr>`).join("");
  const billRows = report.sales.map((sale) => `
    <tr><td>${sale.billNo}</td><td>${sale.table || "-"}</td><td>${sale.items.length}</td><td>${currency.format(sale.grandTotal)}</td></tr>`).join("");
  return `
    <article class="receipt">
      <h2>Hotel Guru Bar & Restaurant</h2>
      <p>Zari Bk, Latur</p>
      <h3>Daily Sales Report - ${report.dateText}</h3>
      <div class="receipt-meta">
        <span>Bills: ${report.bills}</span>
        <span>Sales: ${currency.format(report.total)}</span>
        <span>Drinks Sold: ${report.drinkCount}</span>
        <span>Bottles Sold: ${report.bottleCount}</span>
      </div>
      <h3>Top Items</h3>
      <table><tbody>${itemRows || "<tr><td>No sales</td><td></td><td></td></tr>"}</tbody></table>
      <h3>Bills</h3>
      <table><tbody>${billRows || "<tr><td>No bills</td><td></td><td></td><td></td></tr>"}</tbody></table>
    </article>`;
}

function fullDailyReportHtml(report) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${report.reportNo}</title><style>body{font-family:Arial;padding:24px}.receipt{max-width:760px;margin:auto}.receipt h2,.receipt>p{text-align:center}.receipt h3{margin-top:18px}.receipt-meta{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;border-top:1px solid #999;border-bottom:1px solid #999;padding:10px 0;margin:14px 0}table{width:100%;border-collapse:collapse}td,th{padding:8px;border-bottom:1px dashed #bbb}td:last-child{text-align:right;font-weight:800}</style></head><body>${dailyReportHtml(report)}</body></html>`;
}

async function saveReportWithFolderPicker(report) {
  const htmlFile = await billsDirectoryHandle.getFileHandle(`${report.reportNo}.html`, { create: true });
  const jsonFile = await billsDirectoryHandle.getFileHandle(`${report.reportNo}.json`, { create: true });
  const htmlWritable = await htmlFile.createWritable();
  await htmlWritable.write(fullDailyReportHtml(report));
  await htmlWritable.close();
  const jsonWritable = await jsonFile.createWritable();
  await jsonWritable.write(JSON.stringify(report, null, 2));
  await jsonWritable.close();
}

function downloadDailyReport(report) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([fullDailyReportHtml(report)], { type: "text/html" }));
  link.download = `${report.reportNo}.html`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function saveDailyReport(date, { allowDownload = false } = {}) {
  const report = buildDailyReport(date);
  if (!report.bills) {
    markReportSaved(date);
    return false;
  }

  if (billsDirectoryHandle) {
    await saveReportWithFolderPicker(report);
    markReportSaved(date);
    return true;
  }

  try {
    const response = await fetch("/api/save-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ report, reportHtml: dailyReportHtml(report) })
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || "Report save failed");
    markReportSaved(date);
    return true;
  } catch {
    if (allowDownload) {
      downloadDailyReport(report);
      markReportSaved(date);
      return true;
    }
    return false;
  }
}

async function archiveOldSales() {
  const currentDate = todayValue();
  const sales = loadSales();
  const oldDates = [...new Set(sales.map((sale) => sale.date).filter((date) => date && date < currentDate))];
  const savedDates = getSavedReportDates();
  const datesToSave = oldDates.filter((date) => !savedDates.includes(date));

  for (const date of datesToSave) {
    await saveDailyReport(date);
  }

  const refreshedSavedDates = getSavedReportDates();
  const keepDates = new Set([currentDate, ...oldDates.filter((date) => !refreshedSavedDates.includes(date))]);
  saveSales(sales.filter((sale) => keepDates.has(sale.date)));
  renderSalesReport();
}

function scheduleDailyRollover() {
  if (rolloverTimer) clearTimeout(rolloverTimer);
  const now = new Date();
  const nextReset = new Date(now);
  nextReset.setHours(reportResetHour, 0, 0, 0);
  if (now >= nextReset) nextReset.setDate(nextReset.getDate() + 1);
  rolloverTimer = setTimeout(async () => {
    await archiveOldSales();
    setToday();
    scheduleDailyRollover();
  }, nextReset.getTime() - now.getTime() + 1000);
}

function renderSalesReport() {
  if (!salesReport) return;
  const reportDate = selectedReportDate();
  const report = buildDailyReport(reportDate);
  const sortedItems = report.topItems;
  const topItems = showAllTopItems ? sortedItems : sortedItems.slice(0, 5);
  salesReport.innerHTML = `
    <div class="report-card-wide report-date-card">
      <span>Report Date</span>
      <strong>${report.dateText}</strong>
      <small>Daily sales report shows bills after you save bills for this date.</small>
    </div>
    <div><span>Total Bills</span><strong>${report.bills}</strong></div>
    <div><span>Total Sales</span><strong>${currency.format(report.total)}</strong></div>
    <div><span>Drinks Sold</span><strong>${report.drinkCount}</strong></div>
    <div><span>Bottles Sold</span><strong>${report.bottleCount}</strong></div>
    <div class="report-card-wide">
      <span>Top Items</span>
      <section class="top-items-list">
        ${topItems.length ? topItems.map(([name, qty], index) => `<p><strong>${index + 1}. ${name}</strong><small>${qty} sold</small></p>`).join("") : `<p class="report-empty-line"><strong>No saved sales for ${report.dateText}</strong><small>Save a bill first</small></p>`}
      </section>
      ${sortedItems.length > 5 ? `<button class="report-toggle" type="button" data-toggle-top-items>${showAllTopItems ? "Show Top 5" : `View All ${sortedItems.length}`}</button>` : ""}
    </div>`;
}

function renderMenuTable() {
  menuTable.innerHTML = items.length ? items.map((item) => `
    <div class="menu-table-row">
      <span>${item.name}<small>${item.category === "Starter" ? "Snacks" : item.category}${item.category === "Drinks" ? ` / ${drinkSubcategory(item)}` : ""} - ${currency.format(item.price)}</small></span>
      <button type="button" data-edit="${item.id}">Edit</button>
      <button type="button" data-delete="${item.id}">Delete</button>
    </div>`).join("") : '<p class="empty-state">No menu items. Add your first item above.</p>';
}

function resetMenuForm() {
  menuForm.reset();
  editItemId.value = "";
  if (menuSubmitButton) menuSubmitButton.textContent = "Save Item";
  syncDrinkTypeField();
}

function suggestMenuItemPhoto() {
  if (menuItemPhoto.value.trim()) return;
  const suggestion = keywordImage({
    id: slugify(menuItemName.value),
    name: menuItemName.value,
    category: menuItemCategory.value,
    subcategory: menuItemSubcategory.value
  });
  if (suggestion) menuItemPhoto.placeholder = "Auto image will be used";
}

function uniqueMenuItemId(baseId) {
  let nextId = baseId;
  let index = 2;
  while (items.some((item) => item.id === nextId)) {
    nextId = `${baseId}-${index}`;
    index += 1;
  }
  return nextId;
}

async function saveMenuItem(event) {
  event.preventDefault();
  const name = menuItemName.value.trim();
  const price = Number(menuItemPrice.value);
  if (!name || !price || price < 1) return;
  const existingId = editItemId.value;
  const id = existingId || uniqueMenuItemId(slugify(name));
  const category = menuItemCategory.value;
  const selectedSubcategory = category === "Drinks" ? menuItemSubcategory.value || "" : "";
  const subcategory = category === "Drinks"
    ? inferDrinkSubcategory({ id, name, subcategory: selectedSubcategory }) || selectedSubcategory || "Beer"
    : "";
  const item = {
    id,
    name,
    price,
    category,
    subcategory,
    kind: category === "Drinks" ? "liquor" : category === "Beverages" ? "drink" : "food",
    color: "#b84a2a",
    photo: menuItemPhoto.value.trim()
  };
  items = items.filter((menuItem) => menuItem.id !== id).concat(item);
  quantities.set(id, quantities.get(id) || 0);
  saveMenu();
  try {
    await upsertSupabaseMenuItem(item);
    saveStatus.textContent = "Menu item synced to Supabase.";
  } catch (error) {
    saveStatus.textContent = "Saved on this device. Supabase sync failed.";
    console.error("Supabase menu save failed", error);
  }
  resetMenuForm();
  renderItems();
  renderMenuTable();
}

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `item-${Date.now()}`;
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function todayValue() {
  return localDateValue();
}

function setToday() {
  billDate.value = todayValue();
}

function syncDrinkTypeField() {
  const category = menuItemCategory.value;
  const subcategory = menuItemSubcategory;
  subcategory.disabled = category !== "Drinks";
  if (category !== "Drinks") subcategory.value = "";
  if (category === "Drinks" && !subcategory.value) subcategory.value = "Beer";
}

function openAdminPanel(panelId) {
  document.querySelectorAll(".admin-modal").forEach((panel) => {
    const isTarget = panel.id === panelId;
    panel.classList.toggle("modal-open", isTarget);
    panel.setAttribute("aria-hidden", String(!isTarget));
  });
  document.body.classList.add("modal-active");
  if (panelId === "salesReportPanel") renderSalesReport();
}

function closeAdminPanels() {
  document.querySelectorAll(".admin-modal").forEach((panel) => {
    panel.classList.remove("modal-open");
    panel.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("modal-active");
}

itemsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  const current = quantities.get(id) || 0;
  updateQuantity(id, button.dataset.action === "increment" ? current + 1 : current - 1);
});

itemsGrid.addEventListener("input", (event) => {
  if (event.target.matches("input[data-id]")) updateQuantity(event.target.dataset.id, event.target.value);
});

menuTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("button[data-filter]");
  if (!tab) return;
  activeFilter = tab.dataset.filter;
  foodSubmenu.hidden = activeFilter !== "Food";
  drinkSubmenu.hidden = activeFilter !== "Drinks";
  if (activeFilter === "Snacks") {
    activeSubfilter = "all";
    activeDrinkSubfilter = "all";
  }
  menuTabs.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button === tab));
  renderItems();
});

foodSubmenu.addEventListener("click", (event) => {
  const tab = event.target.closest("button[data-subfilter]");
  if (!tab) return;
  activeSubfilter = tab.dataset.subfilter;
  foodSubmenu.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button === tab));
  renderItems();
});

drinkSubmenu.addEventListener("click", (event) => {
  const tab = event.target.closest("button[data-drink-subfilter]");
  if (!tab) return;
  activeDrinkSubfilter = tab.dataset.drinkSubfilter;
  drinkSubmenu.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button === tab));
  renderItems();
});

menuTable.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-edit], button[data-delete]");
  if (!button) return;
  const editId = button.dataset.edit;
  const deleteId = button.dataset.delete;
  if (editId) {
    const item = items.find((menuItem) => menuItem.id === editId);
    if (!item) return;
    editItemId.value = item.id;
    menuItemName.value = item.name;
    menuItemPrice.value = item.price;
    menuItemCategory.value = item.category;
    menuItemSubcategory.value = item.category === "Drinks" ? drinkSubcategory(item) : "";
    syncDrinkTypeField();
    menuItemPhoto.value = item.photo || itemPhotos[item.id] || "";
    if (menuSubmitButton) menuSubmitButton.textContent = "Update Item";
    menuItemName.focus();
  }
  if (deleteId) {
    items = items.filter((menuItem) => menuItem.id !== deleteId);
    quantities.delete(deleteId);
    saveMenu();
    deleteSupabaseMenuItem(deleteId).catch((error) => {
      saveStatus.textContent = "Deleted on this device. Supabase sync failed.";
      console.error("Supabase menu delete failed", error);
    });
    renderItems();
    renderBill();
    renderMenuTable();
  }
});

menuSearch.addEventListener("input", () => {
  searchQuery = menuSearch.value;
  renderItems();
});

document.querySelector("#openTable").addEventListener("click", () => {
  createTableOrder(newTableName.value);
  newTableName.value = "";
});
newTableName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#openTable").click();
  }
});
tableTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-order]");
  if (button) setActiveOrder(button.dataset.order);
});

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-panel]");
  if (openButton) {
    openAdminPanel(openButton.dataset.openPanel);
    return;
  }

  if (event.target.closest("[data-close-panel]")) {
    closeAdminPanels();
    return;
  }

  const openPanel = event.target.classList?.contains("admin-modal") ? event.target : null;
  if (openPanel) closeAdminPanels();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAdminPanels();
});

menuForm.addEventListener("submit", saveMenuItem);
menuItemCategory.addEventListener("change", syncDrinkTypeField);
menuItemName.addEventListener("input", suggestMenuItemPhoto);
menuItemSubcategory.addEventListener("change", suggestMenuItemPhoto);
document.querySelector("#cancelEdit").addEventListener("click", () => {
  resetMenuForm();
});
document.querySelector("#resetMenu").addEventListener("click", () => {
  items = [...defaultItems];
  quantities.clear();
  items.forEach((item) => quantities.set(item.id, 0));
  localStorage.removeItem(menuKey);
  fetch(`${supabaseMenuEndpoint}?id=neq.__empty__`, {
    method: "DELETE",
    headers: supabaseHeaders()
  }).then(() => fetch(supabaseMenuEndpoint, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates"
    }),
    body: JSON.stringify(items.map((item, index) => menuItemToSupabase(normalizeMenuItem(item), index)))
  })).then(() => {
    saveStatus.textContent = "Default menu synced to Supabase.";
  }).catch((error) => {
    saveStatus.textContent = "Default menu reset locally. Supabase sync failed.";
    console.error("Supabase menu reset failed", error);
  });
  resetMenuForm();
  renderItems();
  renderBill();
  renderMenuTable();
});
document.querySelector("#clearQty").addEventListener("click", () => {
  items.forEach((item) => quantities.set(item.id, 0));
  renderItems();
  renderBill();
  saveActiveOrder();
});
function printCurrentBill() {
  const bill = prepareReceipt();
  if (!bill.items.length) {
    saveStatus.textContent = "Add items before printing bill.";
    return;
  }
  window.print();
}

document.addEventListener("click", (event) => {
  const actionButton = event.target.closest("#printBill, #printBillBottom, #saveBill, #saveBillBottom, #chooseFolder");
  if (!actionButton) return;

  event.preventDefault();

  if (actionButton.id === "printBill" || actionButton.id === "printBillBottom") {
    printCurrentBill();
    return;
  }

  if (actionButton.id === "saveBill" || actionButton.id === "saveBillBottom") {
    saveBillToFolder();
    return;
  }

  chooseBillsFolder();
});
salesReport.addEventListener("click", (event) => {
  if (!event.target.matches("[data-toggle-top-items]")) return;
  showAllTopItems = !showAllTopItems;
  renderSalesReport();
});
[billNo, billDate, tableNo, customerName, gstRate].forEach((input) => input.addEventListener("input", () => {
  renderBill();
  saveActiveOrder();
}));
gstEnabled.addEventListener("change", () => {
  renderBill();
  saveActiveOrder();
});
billDate.addEventListener("change", renderSalesReport);

setToday();
syncDrinkTypeField();
initializeTableOrders();
renderItems();
renderMenuTable();
renderBill();
renderSalesReport();
archiveOldSales();
scheduleDailyRollover();
startSupabaseMenuSync();
startSupabaseSalesSync();
