## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing Form Label Associations
**Learning:** Found that form labels in custom-styled UI components (like the terminal-themed contact form) lacked explicit `htmlFor` and `id` linkages to their respective input fields. This breaks screen reader functionality and reduces the clickable area for users.
**Action:** Added explicit `htmlFor` and `id` attributes to link labels and inputs, and included the `cursor-pointer` class on labels to visually indicate they are clickable. Always ensure semantic HTML connections remain intact even when building highly stylized components.
