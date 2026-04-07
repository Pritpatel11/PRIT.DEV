## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Unlinked Form Labels
**Learning:** Found form labels in `Contact.jsx` that were visually placed next to inputs but lacked programmatic association (`htmlFor` on label, `id` on input). This prevents screen readers from announcing the label when the input receives focus, making the form very difficult to use for non-sighted users.
**Action:** Always ensure that every `<label>` has an `htmlFor` attribute that exactly matches the `id` of its corresponding form control (`<input>`, `<textarea>`, `<select>`).
