## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-14 - Forms Accessibility
**Learning:** React inputs without associated labels (using `htmlFor` and `id`) cause screen readers to fail to announce their purpose, harming the experience for visually impaired users.
**Action:** Always link form labels to their respective input fields with matching `htmlFor` and `id` properties.
