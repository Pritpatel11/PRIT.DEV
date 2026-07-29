## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Missing Form Label Associations
**Learning:** Discovered unlinked `<label>` and `<input>`/`<textarea>` elements in the Contact form. Without explicit `htmlFor` and `id` linkage, screen readers cannot properly associate labels with their respective fields, reducing form accessibility. Additionally, making the label itself a clickable target (by setting cursor-pointer and linking it) increases the usable hit area for users.
**Action:** Explicitly linked all form labels to their respective fields using `htmlFor` and `id` attributes, and added `cursor-pointer` to visually indicate the label acts as a hit area for the field. For all future forms, ensure this linkage is established to guarantee accessibility for screen reader and pointer users.
