# SQLite Database

This project saves bill and daily sales data into a local SQLite database when you run the local Node server.

## Start the local server

```powershell
npm.cmd install
npm.cmd run dev
```

Then open:

```text
http://127.0.0.1:8080
```

## Database file

The SQLite database is created here:

```text
Bills/guru_billing.sqlite
```

## Tables

- `bills`
- `bill_items`
- `daily_reports`
- `daily_report_items`

## Vercel note

Vercel does not permanently save local SQLite files. SQLite storage is for local/server use on your computer. For permanent hosted data, connect a hosted database later.
