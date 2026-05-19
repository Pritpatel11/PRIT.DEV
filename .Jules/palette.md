## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Form Input Accessibility
**Learning:** Found that the Contact form lacked proper programmatic associations between labels and input fields. Using just visual proximity (`NAME >`, `EMAIL >`) without `htmlFor` and `id` attributes makes the form difficult to navigate for screen reader users, and prevents users from clicking the label to focus the corresponding input.
**Action:** Always add `htmlFor` on `<label>` elements and a matching `id` on corresponding `<input>` or `<textarea>` elements when building or refactoring forms to ensure robust keyboard and screen reader accessibility.
