# Windows 58 mm Thermal Printer Setup

The app now declares a 58 mm page and keeps receipt content within the approximately 48 mm printable area used by most POS-58 printers. This prevents the right-side amount column from being cut off.

## Application files

Keep `thermal-print.css` beside `index.html`. The page loads it as `thermal-print.css?v=9` only while printing.

## Windows printer preferences

1. Open Windows **Settings → Bluetooth & devices → Printers & scanners**.
2. Select **POS-58-Series**.
3. Open **Printing preferences** or **Printer properties → Advanced → Printing Defaults**.
4. Select a paper/form named similar to:
   - `58mm`
   - `POS58`
   - `58(48) mm`
   - `Roll Paper 58mm`
5. Set orientation to **Portrait**.
6. Set scaling/zoom to **100%**.
7. Disable any driver option that automatically enlarges the document to page width.

## Chrome/Edge print dialog

1. Destination: **POS-58-Series**.
2. Layout: **Portrait**.
3. Open **More settings**.
4. Paper size: choose the 58 mm/POS58 roll form.
5. Margins: **None**.
6. Scale: **100** or **Default**; do not use a value above 100.
7. Disable **Headers and footers**.
8. Print one test receipt.

## If no 58 mm paper size appears

1. Open **Control Panel → Devices and Printers**.
2. Select any printer, then open **Print server properties** from the toolbar.
3. Open the **Forms** tab.
4. Enable **Create a new form**.
5. Name it `POS58`.
6. Width: `5.8 cm`.
7. Height: use a receipt length supported by the driver, such as `20 cm` or a continuous/receipt-roll option.
8. Save the form.
9. Return to POS-58-Series Printing Preferences and select `POS58`.

Some POS printer drivers supply their own continuous-roll form. Prefer that form over a fixed A4 form to avoid feeding unnecessary blank paper.

## Expected preview

- The white page is 58 mm wide.
- The receipt content is centered in a safe 48 mm printable column.
- Item names may wrap.
- Prices and totals remain completely visible on the right.
- No browser header, footer, URL, or page number appears.

## Important

The browser can format for 58 mm, but Windows and the printer driver control the physical paper form. Both the CSS page size and the selected Windows paper size must be 58 mm-compatible.
