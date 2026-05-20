## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Form Inputs Accessibility
**Learning:** Found `<input>` and `<textarea>` elements without associated `id` and `htmlFor` on `<label>` elements or missing `aria-label`s on elements like the Terminal prompt input.
**Action:** Added proper associations in `Contact.jsx` (name, email, message) and `aria-label` in `Terminal.jsx` to ensure screen reader compatibility for all text inputs.
