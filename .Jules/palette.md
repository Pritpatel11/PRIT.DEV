## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Missing Semantic Links for Form Labels and Inputs
**Learning:** Found that the inputs in the contact form (`Contact.jsx`) did not have their associated `<label>` semantically linked to them. Screen reader users would have a difficult time navigating this form as it wouldn't read out what the field is for.
**Action:** Added `htmlFor` on the `<label>` and the corresponding `id` on the `<input>` / `<textarea>` elements to fix this accessibility issue. For any future forms added, ensure proper semantic association between labels and inputs is used.
