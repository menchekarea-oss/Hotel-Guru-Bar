# Sales Report Owner Password

This build adds a simple local password lock to the Sales Report interface.

## First-time setup

1. Open Guru POS on the billing device.
2. Press **Locked Sales / Owner only** or **Locked Report**.
3. Because no password exists yet, the app shows **Set Owner Password**.
4. Enter at least 4 characters.
5. Confirm the password.
6. Press **Set & Open Report**.

The password is stored as a random-salted SHA-256 hash. The plain password is not stored.

## Normal use

1. Press the Sales Report button.
2. The unlock screen displays only **Password or PIN**.
3. Enter the owner password.
4. Press **Unlock Report**.
5. Closing the report with **Lock & Close**, pressing Escape, or leaving the admin panel locks it again.

The fields now change correctly by mode:

- First setup: **New password or PIN** + **Confirm password**
- Normal unlock: **Password or PIN** only
- Change password: **Current password** + **New password or PIN** + **Confirm password**

After five incorrect attempts, the report is locked for 30 seconds.

## Change password

1. Unlock Sales Report.
2. Press **Change Password**.
3. Enter the current password.
4. Enter and confirm the new password.
5. Press **Change Password**.

## Multiple devices

This is a local device lock. Set the password separately on every phone, tablet, browser profile, or computer that runs the POS. The owner should perform first-time setup before giving a device to staff.

## If the password is forgotten

There is intentionally no visible bypass button. Resetting browser site data removes the local password, but it also removes running tables and any pending offline sales. Only reset site data after the pending upload count is zero and all real sales are confirmed in Supabase.

For a targeted developer reset, remove only the local-storage key `hotelGuruOwnerPin` using browser developer tools, then reopen Sales Report and set a new password.

## Security limitation

This is the simple PIN/password option selected for trusted staff. It blocks normal access to the report UI, but it does not secure the Supabase database against a technically skilled person who can inspect frontend code or network requests. For genuine remote access control, add Supabase Auth and Row Level Security so only an authenticated owner account can select sales rows.
