# Guaranteed Local Run — Hotel Guru Billing Build 13

This build includes a no-cache local-development mode and a Windows starter.

## Fastest method

1. Extract the ZIP into a brand-new folder.
2. Double-click `RUN_HOTEL_GURU_BILLING_V14.bat`.
3. Allow npm to install `sql.js` if requested.
4. The script uses port `8091` and opens `reset-local-cache.html` automatically.
5. The reset removes only old Hotel Guru Billing Cache Storage/service-worker registrations; it preserves sales, orders, menu, PIN and pending uploads for that origin.
6. The app opens with a visible `v14` badge.

The terminal must show:

`HOTEL GURU BILLING BUILD 14.0.0 — LOCAL NO-CACHE DEVELOPMENT SERVER`

and the exact project folder being served.

## Normal local URL

`http://localhost:8091`

On localhost, service-worker caching is disabled by default so source-code edits appear after a normal reload.

## Offline PWA test URL

To deliberately enable the service worker locally, use:

`http://localhost:8091/?pwa=1`

Use normal no-cache mode while developing, and only use `?pwa=1` for a specific offline test.

## Build checks

- Visible app badge: `v14`
- `http://localhost:8091/VERSION.txt`
- `http://localhost:8091/sw.js` contains `hotel-guru-billing-app-v14`
- Response header: `X-Hotel-Guru-Billing-Build: 14.0.0`
