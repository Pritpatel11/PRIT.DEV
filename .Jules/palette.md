## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-04-24 - Unassociated Form Labels and Inputs
**Learning:** Found a pattern in forms where `<label>` and `<input>` elements were placed adjacently but not semantically linked, causing screen readers to miss input descriptions and shrinking the clickable target area for users.
**Action:** Add `htmlFor` attributes to `<label>` elements and matching `id` attributes to the corresponding form controls.
