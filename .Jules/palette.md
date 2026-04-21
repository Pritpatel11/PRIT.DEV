## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2024-05-17 - Unlinked Form Labels in Custom Styled Forms
**Learning:** Custom styled forms frequently omit explicit `htmlFor` and `id` linkage between labels and inputs, relying on visual proximity instead. This breaks screen reader associations and prevents users from clicking labels to focus inputs, which is especially problematic for smaller input fields or custom designs.
**Action:** Always verify explicit semantic linkage (`htmlFor` matching `id`) in form elements, particularly when reviewing custom-styled components, to ensure robust screen reader support and maximize clickable hit targets for inputs.
