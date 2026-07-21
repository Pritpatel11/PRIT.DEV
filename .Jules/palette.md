## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-21 - Semantic Form Labels and Interactive Cursors
**Learning:** Discovered that styled custom forms often miss standard semantic associations (`htmlFor` -> `id`) and visual cues (`cursor-pointer`) that make interacting with forms easier, especially for users relying on screen readers or users expecting to click the label to focus the input.
**Action:** Always explicitly link `<label>`s and inputs/textareas using `htmlFor` and `id`, and apply utility classes like `cursor-pointer` to labels to signal clickability to mouse users.
