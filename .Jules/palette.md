## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing label association in forms
**Learning:** Forms were missing explicit association between labels and input fields. Although `<label>` elements were placed visually near the fields, missing `htmlFor` on the label and a corresponding `id` on the input prevents screen readers from announcing what the input field is for, and clicking the label doesn't focus the input.
**Action:** Added `htmlFor` and `id` tags in `src/pages/Contact.jsx` to correctly associate labels with inputs and textareas for better accessibility. Always explicitly associate forms in the future.
