## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2026-06-24 - Unassociated Form Labels
**Learning:** Discovered that the labels in the contact form were visually styled but not programmatically linked to their inputs (missing `htmlFor` and `id` pairs). This hurts accessibility and prevents users from clicking the label to focus the input.
**Action:** Always ensure `htmlFor` on `<label>` matches the `id` on the corresponding input, and add a `cursor-pointer` class to visually indicate that labels are clickable.
