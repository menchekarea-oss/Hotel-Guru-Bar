# Hotel Guru Billing — Online + Offline Billing

This version is an installable Progressive Web App (PWA). Billing continues when the internet fails, and finalized sales are uploaded to Supabase when connectivity returns.

## What is stored offline

- Current running table orders (local device storage)
- Cached menu
- Finalized sales in IndexedDB
- A durable synchronization queue
- The complete application shell (HTML, CSS, JavaScript, icons and background)
- Menu images after they have been opened online at least once

A finalized sale is written to local storage and IndexedDB **before** any network request. A network failure therefore does not block the cashier.

## Synchronization flow

1. Cashier presses **Print** on a completed bill.
2. The sale immediately receives a UUID and device-specific bill number, while the print dialog opens.
3. Sale is stored in IndexedDB with `pending` status.
4. If online, the app immediately uploads it to Supabase.
5. If offline, the sale remains in the queue.
6. The app retries when the browser fires the `online` event, every 30 seconds while open, when **Sync Now** is pressed, and through Background Sync on supported Android browsers.
7. After a successful upload, the sale becomes visible in the owner's report on any connected device.

The separate **Save Bill** action only saves the receipt file. It does not create a sale.

On iPhone/iPad, background sync while the app is completely closed is limited. Pending sales sync automatically the next time the installed app is opened with internet access.

## Deploy to Vercel

Deploy the complete folder. These files must stay at the project root:

- `index.html`
- `script.js`
- `offline-sync.js`
- `sw.js`
- `manifest.webmanifest`
- `styles.css`
- `report-ui.css`
- `app-polish.css`
- `thermal-print.css`
- `offline.html`
- `icons/`
- `assets/`

Vercel provides HTTPS, which is required for an installable PWA.

## Install on mobile

### Android

1. Open the Vercel URL in Chrome.
2. Wait until the status bar says **Online**.
3. Press **Install App**, or open Chrome menu → **Install app**.
4. Open Hotel Guru Billing from the home screen.

### iPhone

1. Open the Vercel URL in Safari.
2. Tap **Share** → **Add to Home Screen**.
3. Open Hotel Guru Billing from the new home-screen icon.

## Offline test

1. Open the deployed app online once and wait for the service worker to install.
2. Add an item and press **Print** to create one test sale online.
3. Turn on airplane mode.
4. Reload/open the installed app. Menu and billing should still open.
5. Create another test bill and press **Print**.
6. Confirm the status says the printed sale is stored offline and shows a pending upload.
7. Restore the internet.
8. Press **Sync Now** or wait up to 30 seconds.
9. Open **Sales Report → Refresh Cloud** on the owner's device.
10. Confirm the offline sale appears under Cloud Bills/Cloud Sales.

## Bill identifiers

The visible bill number uses the selected simple format:

`GBR-001`, `GBR-002`, `GBR-003`, ...

Every sale also has an internal UUID, which prevents rows from overwriting each other in Supabase. The visible counter is local to a device. If several billing devices are used offline, two devices can produce the same visible number. Use one primary billing device, or later add a database-issued sequence/device prefix for legally unique multi-device invoice numbering.

## Owner report password

Sales Report is protected by a local owner password. On the first attempt to open it, the owner creates a password of at least four characters. Closing the report locks it again. The password is stored as a salted hash and must be configured separately on each device. See `OWNER_PASSWORD.md`.

## Owner report

The report distinguishes:

- **Cloud Bills / Cloud Sales** — data already confirmed in the local Supabase cache and visible remotely
- **Pending Upload** — sales safe on the current device but not uploaded yet
- **All Bills / All Sales** — cloud data plus pending offline data on the current device
- **Kitchen / Food Items Sold** — thali, snacks, starters, curry, rice, roti and other food items
- **Alcoholic Drinks Sold** — only beer, whisky/whiskey, rum, vodka, wine, gin, brandy, tequila and other menu items categorized as Drinks/liquor
- **Beverages Sold** — only water, soda, cold drinks, tea and other non-alcoholic items categorized as Beverages
- **Daily calendar history** — select any previous report date or move with Previous/Next
- **Monthly Sales** — monthly totals, active days, average per sales day, daily breakdown, top items and bill history

For secure production use, protect owner reports and menu editing with Supabase Auth and Row Level Security. The publishable key in frontend code is normal; security must come from RLS policies.

## Important operational rules

- GST is off by default for every new bill. Turn it on manually only when required; the GST row is hidden while off.
- Only **Print** finalizes the current sale and adds it to Sales Report/Supabase. **Save Bill** only downloads or writes the PDF/JSON file and keeps the running table open; it does not count as a sale.
- Do not clear browser/app site data while sales are pending.
- Check that the pending count is zero before changing phones or uninstalling the app.
- Running tables are currently local to one device. Finalized sales synchronize across devices. Move live tables/orders to Supabase Realtime if waiters and cashiers must share active orders.
- Increment the cache version in `sw.js` when deploying major asset changes if an old version remains cached.
