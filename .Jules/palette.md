## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-07-26 - Explicit Label Associations and Clickable Labels in Stylized UI Components
**Learning:** Found that custom, heavily-stylized form labels often lack explicit structural association with their input fields and do not always indicate interactivity visually. While screen readers struggle without explicitly linked `id`/`htmlFor` associations on labels, users can also fail to realize a label is clickable to focus an input if it looks purely decorative.
**Action:** Implemented explicit `htmlFor` and `id` linking between `label`s and `input`/`textarea` fields on the Contact form, and added the `cursor-pointer` utility class to labels to ensure they feel interactive to mouse users while supporting screen reader context.
