## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-05-05 - Missing Form Labels and ARIA attributes for inputs
**Learning:** Found multiple form inputs in Contact.jsx missing explicit label associations (htmlFor/id) and text inputs in Terminal/PritBot missing aria-labels. Screen reader users would navigate to these inputs without context of what information to provide.
**Action:** Linked labels using htmlFor/id attributes in forms, and added aria-label="..." to standalone inputs that lack visible label text.
