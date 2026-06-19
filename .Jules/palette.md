## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-06-19 - Disconnected Form Labels in Terminal Components
**Learning:** Stylized form components (like the Terminal form in Contact.jsx) often drop native HTML associations (`htmlFor` -> `id`) in favor of visual styling. This breaks focus management for both screen readers and mouse users trying to click the stylized labels.
**Action:** When working with custom UI forms, always verify native label-input associations are preserved. Additionally, apply `cursor-pointer` to stylized labels to provide visual feedback that they remain interactive trigger points for their inputs.
