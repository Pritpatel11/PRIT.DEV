## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-22 - Disconnected Form Elements
**Learning:** Found a pattern of stylized but semantically disconnected form elements within the app's components (e.g. Contact page). Visual styling was prioritized, leaving inputs disconnected from their labels for screen readers, and limiting click area.
**Action:** Explicitly link labels and inputs using `htmlFor` and `id` attributes. Additionally, always add utility classes like `cursor-pointer` to labels to visually signal clickability and improve usability.
