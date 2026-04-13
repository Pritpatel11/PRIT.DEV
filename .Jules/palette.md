## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-04-13 - Explicit Form Label Association
**Learning:** Found that some forms and inputs relied on implicit visual proximity rather than explicit semantic linking (missing `htmlFor` on `<label>` and `id` on `<input>`). This negatively affects screen reader navigation and limits the clickable area of labels.
**Action:** Ensure all form controls are explicitly linked to their corresponding labels using the `htmlFor` / `id` pattern to improve accessibility and usability.
