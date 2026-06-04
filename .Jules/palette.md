## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Form Accessibility and Input Labels
**Learning:** Found a pattern where custom-styled form labels (e.g., in the Contact component) were purely visual and lacked semantic association with their corresponding inputs via `htmlFor` and `id` attributes. Additionally, standalone inputs (like in the Terminal and PritBot components) lacked explicit `aria-label`s.
**Action:** Addressed these by linking labels to inputs using `htmlFor` and `id` attributes, and ensuring standalone inputs have descriptive `aria-label`s to improve accessibility for screen readers and keyboard users.
