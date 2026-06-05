## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-06-05 - Missing Form Label Associations
**Learning:** Found unlinked form labels in the Contact page form. The `<label>` elements visually indicated their purpose but lacked the `htmlFor` attribute to programmatically associate them with their respective `<input>` and `<textarea>` elements (which also lacked `id`s). This makes the form much harder to navigate for screen reader users and prevents clicking the label to focus the input.
**Action:** Always link form labels to their inputs using `htmlFor` and `id` attributes. Additionally, consider adding utility classes like `cursor-pointer` to the labels to visually signal this clickability.
