const http = require("http");
const fs = require("fs");
const path = require("path");
const initSqlJs = require("sql.js");

const root = __dirname;
const billsDir = path.join(root, "bills");
const dbPath = path.join(billsDir, "guru_billing.sqlite");
const port = Number(process.env.PORT || 8080);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8"
};

let databaseReady = null;
let db = null;

function safeName(value) {
  return String(value || "bill").replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "");
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function getDatabase() {
  if (!databaseReady) {
    databaseReady = initSqlJs().then((SQL) => {
      fs.mkdirSync(billsDir, { recursive: true });
      db = fs.existsSync(dbPath)
        ? new SQL.Database(fs.readFileSync(dbPath))
        : new SQL.Database();
      db.run(`
        CREATE TABLE IF NOT EXISTS bills (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          bill_no TEXT NOT NULL,
          bill_date TEXT,
          table_name TEXT,
          customer_name TEXT,
          subtotal INTEGER NOT NULL DEFAULT 0,
          service_charge INTEGER NOT NULL DEFAULT 0,
          gst_enabled INTEGER NOT NULL DEFAULT 0,
          gst_rate REAL NOT NULL DEFAULT 0,
          gst_amount INTEGER NOT NULL DEFAULT 0,
          grand_total INTEGER NOT NULL DEFAULT 0,
          html_path TEXT,
          json_path TEXT,
          raw_json TEXT NOT NULL,
          saved_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS bill_items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          bill_id INTEGER NOT NULL,
          item_name TEXT NOT NULL,
          category TEXT,
          kind TEXT,
          price INTEGER NOT NULL DEFAULT 0,
          quantity INTEGER NOT NULL DEFAULT 0,
          line_total INTEGER NOT NULL DEFAULT 0,
          FOREIGN KEY (bill_id) REFERENCES bills(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS daily_reports (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          report_no TEXT NOT NULL,
          report_date TEXT,
          bills_count INTEGER NOT NULL DEFAULT 0,
          total_sales INTEGER NOT NULL DEFAULT 0,
          drinks_sold INTEGER NOT NULL DEFAULT 0,
          bottles_sold INTEGER NOT NULL DEFAULT 0,
          html_path TEXT,
          json_path TEXT,
          raw_json TEXT NOT NULL,
          saved_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS daily_report_items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          report_id INTEGER NOT NULL,
          item_name TEXT NOT NULL,
          quantity INTEGER NOT NULL DEFAULT 0,
          FOREIGN KEY (report_id) REFERENCES daily_reports(id) ON DELETE CASCADE
        );
      `);
      persistDatabase();
      return db;
    });
  }

  return databaseReady;
}

function persistDatabase() {
  if (!db) return;
  fs.mkdirSync(billsDir, { recursive: true });
  fs.writeFileSync(dbPath, Buffer.from(db.export()));
}

async function insertBillIntoDatabase(bill, htmlPath, jsonPath) {
  const database = await getDatabase();
  const savedAt = bill.savedAt || new Date().toISOString();
  database.run(
    `INSERT INTO bills (
      bill_no, bill_date, table_name, customer_name, subtotal, service_charge,
      gst_enabled, gst_rate, gst_amount, grand_total, html_path, json_path,
      raw_json, saved_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      bill.billNo || "Bill",
      bill.date || "",
      bill.table || "",
      bill.customer || "",
      Number(bill.subtotal) || 0,
      Number(bill.serviceCharge) || 0,
      bill.gstEnabled ? 1 : 0,
      Number(bill.gstRate) || 0,
      Number(bill.gstAmount) || 0,
      Number(bill.grandTotal) || 0,
      htmlPath,
      jsonPath,
      JSON.stringify(bill),
      savedAt
    ]
  );

  const billId = Number(database.exec("SELECT last_insert_rowid() AS id")[0].values[0][0]);
  const insertItem = database.prepare(`
    INSERT INTO bill_items (bill_id, item_name, category, kind, price, quantity, line_total)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  (bill.items || []).forEach((item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    insertItem.run([
      billId,
      item.name || "",
      item.category || "",
      item.kind || "",
      price,
      quantity,
      price * quantity
    ]);
  });
  insertItem.free();
  persistDatabase();
}

async function insertReportIntoDatabase(report, htmlPath, jsonPath) {
  const database = await getDatabase();
  const savedAt = report.savedAt || new Date().toISOString();
  database.run(
    `INSERT INTO daily_reports (
      report_no, report_date, bills_count, total_sales, drinks_sold, bottles_sold,
      html_path, json_path, raw_json, saved_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      report.reportNo || "Daily-Sales",
      report.date || "",
      Number(report.bills) || 0,
      Number(report.total) || 0,
      Number(report.drinkCount) || 0,
      Number(report.bottleCount) || 0,
      htmlPath,
      jsonPath,
      JSON.stringify(report),
      savedAt
    ]
  );

  const reportId = Number(database.exec("SELECT last_insert_rowid() AS id")[0].values[0][0]);
  const insertItem = database.prepare(`
    INSERT INTO daily_report_items (report_id, item_name, quantity)
    VALUES (?, ?, ?)
  `);
  (report.topItems || []).forEach(([name, quantity]) => {
    insertItem.run([reportId, name || "", Number(quantity) || 0]);
  });
  insertItem.free();
  persistDatabase();
}

async function saveBill(req, res) {
  try {
    const payload = JSON.parse(await readBody(req));
    fs.mkdirSync(billsDir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const billNo = safeName(payload.bill?.billNo || payload.billNo);
    const base = `${billNo}-${stamp}`;
    const htmlPath = path.join(billsDir, `${base}.html`);
    const jsonPath = path.join(billsDir, `${base}.json`);
    const bill = payload.bill || payload;
    fs.writeFileSync(htmlPath, payload.receiptHtml || "", "utf8");
    fs.writeFileSync(jsonPath, JSON.stringify(bill, null, 2), "utf8");
    await insertBillIntoDatabase(bill, htmlPath, jsonPath);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, htmlPath, jsonPath, dbPath }));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: error.message }));
  }
}

async function saveReport(req, res) {
  try {
    const payload = JSON.parse(await readBody(req));
    fs.mkdirSync(billsDir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const reportNo = safeName(payload.report?.reportNo || payload.reportNo || "daily-sales-report");
    const base = `${reportNo}-${stamp}`;
    const htmlPath = path.join(billsDir, `${base}.html`);
    const jsonPath = path.join(billsDir, `${base}.json`);
    const report = payload.report || payload;
    fs.writeFileSync(htmlPath, payload.reportHtml || "", "utf8");
    fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), "utf8");
    await insertReportIntoDatabase(report, htmlPath, jsonPath);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, htmlPath, jsonPath, dbPath }));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: error.message }));
  }
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/save-bill") {
    saveBill(req, res);
    return;
  }

  if (req.method === "POST" && req.url === "/api/save-report") {
    saveReport(req, res);
    return;
  }

  const requestUrl = new URL(req.url, `http://localhost:${port}`);
  const pathname = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
  const filePath = path.resolve(root, `.${pathname}`);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Hotel Guru billing app running at http://127.0.0.1:${port}`);
  console.log(`Bills will be saved in ${billsDir}`);
  console.log(`SQLite database will be saved at ${dbPath}`);
});
