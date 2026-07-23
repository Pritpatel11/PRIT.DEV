## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Custom Form Components Losing Native Label Accessibility
**Learning:** Found that custom stylized form elements often lose their implicit label-to-input connection when replacing standard `<label><input/></label>` patterns, making them less accessible and requiring explicit `htmlFor` and `id` linking. Furthermore, stylized labels may not appear clickable to users if they lack standard cursor interactions.
**Action:** Explicitly link labels with their corresponding inputs using `htmlFor` and `id` attributes, and add utility classes like `cursor-pointer` to labels in stylized UI components to visually signal clickability to users.
