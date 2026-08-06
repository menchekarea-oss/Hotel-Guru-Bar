# Deploy the Online + Offline Guru POS to Vercel

## Deploy

1. Push this complete folder to GitHub.
2. Open https://vercel.com/new and import the repository.
3. Framework Preset: **Other**.
4. Build Command: leave empty.
5. Output Directory: leave empty.
6. Deploy.

Vercel automatically provides HTTPS, required by the service worker and PWA installation.

## Required files

Do not omit `sw.js`, `offline-sync.js`, `report-ui.css`, `thermal-print.css`, `manifest.webmanifest`, `offline.html`, `icons/`, or `assets/`.

## First mobile setup

1. Open the production Vercel URL while online.
2. Wait for the connection bar to show **Online**.
3. Reload once so the service worker controls the page.
4. Install from the **Install App** button or the browser's Add to Home Screen command.
5. Perform the offline test in `OFFLINE_PWA.md` before using it for real billing.

## Supabase

The app expects existing `menu_items` and `sales` tables. See `SUPABASE_SETUP.sql` for the compatible columns.

## Important

The local Node/SQLite server is only for local computer use. Vercel filesystem writes are not permanent. Production sale data is stored in Supabase; receipt PDFs are downloaded or written to a user-selected folder when the browser supports it.
