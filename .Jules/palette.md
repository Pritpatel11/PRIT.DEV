## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-24 - Explicit Label-Input Associations
**Learning:** Discovered form inputs in `Contact.jsx` lacked explicit associations with their `<label>` elements via `htmlFor` and `id` attributes. Relying solely on DOM proximity can be problematic for screen readers and affects the click target area (clicking the label should focus the input).
**Action:** Updated contact form fields to explicitly map `<label htmlFor="field-id">` to `<input id="field-id">`. Added `cursor-pointer` to labels to visually indicate this increased click target area. Always ensure `id` and `htmlFor` pairings exist on custom form layouts.
