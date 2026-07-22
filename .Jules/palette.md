## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Missing Explicit Form Label Associations in Stylized Components
**Learning:** Found that custom, stylized form components (like the terminal-themed form in Contact page) often use standalone `<label>` and `<input>`/`<textarea>` elements without explicit associations (`htmlFor` and `id`). This breaks screen reader functionality, as the input fields lose their descriptive names, and prevents users from focusing the input by clicking the label text.
**Action:** Added explicit `htmlFor` and `id` attributes to link labels to their corresponding fields, and added `cursor-pointer` to visually indicate the label is clickable. Always explicitly link labels to form elements, even in highly stylized UIs.
