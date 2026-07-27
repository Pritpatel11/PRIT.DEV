## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Missing ARIA Labels on Navigation Dock Links
**Learning:** Discovered that icon-only navigation links inside custom app-like dock interfaces (like FloatingNav) were relying solely on visual tooltips for context, which are inaccessible to screen reader users. This reinforces the pattern that *all* interactive elements without visible text must have explicit accessible names.
**Action:** Added `aria-label` to the wrapper `<Link>` elements. For future dock/toolbar implementations, verify that screen readers announce the link destination before relying on visual hover tooltips.
