## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Form Inputs Missing Semantic Links
**Learning:** Found that custom form inputs (like the terminal-styled Contact form) often use `label` elements visually but fail to semantically link them to the input fields using `htmlFor` and `id`. This prevents screen readers from announcing the label when the input is focused, creating a poor experience for users relying on assistive technologies.
**Action:** Always ensure that `label` elements use the `htmlFor` attribute that strictly matches the `id` of their corresponding input/textarea element, especially in stylized, custom form components.
