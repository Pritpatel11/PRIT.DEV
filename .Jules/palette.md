## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2024-05-18 - Missing ID/htmlFor association in forms
**Learning:** Found that the custom contact form component used labels and inputs without proper semantic connection (missing `htmlFor` and `id`). This reduces the hit area for focusing inputs and removes critical context for screen readers.
**Action:** Always verify form inputs have unique `id`s correctly bound to `htmlFor` attributes on their corresponding `<label>`.
