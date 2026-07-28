## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Missing Label-Input Links in Stylized Forms
**Learning:** Found that custom, stylized form labels (e.g., terminal-style uppercase text with cyber styling) were missing explicit links to their inputs (via `htmlFor` and `id`), breaking screen reader usability and preventing users from focusing the inputs by clicking the labels. Without standard HTML elements, it is easy to forget basic forms of interaction.
**Action:** Always ensure stylized form labels use `htmlFor` and `id` linking. Added `cursor-pointer` to explicitly signal that labels are clickable interactive elements for better UX in custom designs.
