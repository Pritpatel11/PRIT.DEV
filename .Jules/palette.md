## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-24 - Missing Input Labels
**Learning:** Found that the contact form had `<label>` elements, but they were not programmatically associated with their corresponding `<input>` or `<textarea>` elements using `htmlFor` and `id` attributes. This caused screen readers to announce the inputs without proper context, impacting accessibility.
**Action:** Added `htmlFor` attributes to labels and matching `id` attributes to inputs and textareas to ensure clear association and improve screen reader experience.
