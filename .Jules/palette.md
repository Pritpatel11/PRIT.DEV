## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-09 - Accessible Form Elements
**Learning:** Even highly stylized, custom components (like terminal inputs or custom-designed contact forms) require standard semantic HTML linkages (like `htmlFor`/`id` on labels/inputs) and appropriate `aria-label`s on icon-only buttons (like toast close buttons) to be usable by assistive technologies.
**Action:** Always ensure that visual design does not overshadow semantic accessibility. Check forms for proper input/label linking and buttons for accessible names.
