# Updating the Installed Hotel Guru Billing PWA

Hotel Guru Billing is installed from the Vercel website; it does not need a Play Store update for normal website changes.

## Update flow

1. Push the new website version to the production Vercel project.
2. The installed PWA checks `/sw.js` when it opens, when it returns to the foreground, every five minutes while open, and during normal navigation.
3. A **New Hotel Guru Billing update available** banner appears.
4. Press **Update Now**.
5. The new service worker activates and the app reloads once.
6. Running tables remain safe because table changes are stored locally.

Press **Later** to finish current work. The waiting update is offered again the next time the app opens.

## Requirements

- The mobile/desktop device must have internet access to download an update.
- Deploy all versioned files together, especially `index.html`, `script.js`, `sw.js`, `report-ui.css`, `app-polish.css`, and `thermal-print.css`.
- Keep the Vercel `sw.js` no-cache header from `vercel.json`.

## What does not require reinstalling

- UI changes
- Menu/report code changes
- Offline logic changes
- Print CSS changes
- Bug fixes

A Play Store release is only needed if the project is later wrapped as a native Android APK and distributed through Google Play.
