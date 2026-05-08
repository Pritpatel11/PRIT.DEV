## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing Semantic Links Between Labels and Inputs
**Learning:** Found a lack of semantic link between form labels and inputs in the Contact page form. The `<label>` elements did not have `htmlFor` attributes, and the corresponding `<input>`/`<textarea>` elements lacked matching `id` attributes. This breaks the accessible name calculation for screen readers, preventing them from correctly announcing the field's purpose.
**Action:** Always ensure that every form input element has a unique `id` and is explicitly associated with a `<label>` via the `htmlFor` attribute to provide accessible naming.
