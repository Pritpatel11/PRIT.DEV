## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing ARIA Labels and Unlinked Form Labels
**Learning:** Found an accessibility issue pattern in the app's forms where inputs are not explicitly linked to their labels. Unlinked form labels reduce the click target size and can be confusing for screen readers. In addition, I noticed the toast notification had a close button without an aria-label.
**Action:** Always link form inputs to labels via `id` and `htmlFor` attributes. Ensure any icon-only button like a "close" '×' has an aria-label describing its function.
