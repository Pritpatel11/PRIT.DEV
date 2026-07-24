## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-07-24 - Missing Explicit Label Bindings and Visual Clickability Cues
**Learning:** Found that stylized form labels in `src/pages/Contact.jsx` lacked explicit `id` and `htmlFor` bindings to their corresponding inputs, and also lacked visual cues (like `cursor-pointer`) to indicate they are clickable. This makes it harder for users to interact with the form, as clicking the label does not focus the input.
**Action:** Added `id` attributes to inputs and `htmlFor` attributes to labels to explicitly bind them, and added `cursor-pointer` to the labels to visually signal their clickability. Also added `aria-label` to the toast close button.
