# aria-label analysis

Looks for problem patterns in aria-label usage within HTML.

The primary dataset is homepages of Wagtail websites, as determined in the HTTP Archive. However both the methodology and the results are likely to be generally relevant for any technology.

Raw data and analysis (Google Sheets): [aria-label problems in the wild - Wagtail websites](https://docs.google.com/spreadsheets/d/1tgTxF7fg_VlByCDIW2i-Ir-T8OvhD7sHZHjfCXg6nks/edit).

| Pattern                     | %    | Count |
| --------------------------- | ---- | ----- |
| Missing visible text        | 21%  | 322   |
| Starts without visible text | 23%  | 354   |
| Disallowed for role         | 4%   | 64    |
| Overrides visible text      | 32%  | 480   |
| Any of those issues         | 34%  | 511   |
| Total                       | 100% | 1517  |
