## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2026-04-11 - Proper Form Label Linking
**Learning:** In forms without explicit 'htmlFor' and 'id' linking, clicking the label does not focus the input, and screen readers fail to associate the label text with the input field.
**Action:** Ensure all '<label>' elements use the 'htmlFor' attribute to point to the exact 'id' of their associated '<input>' or '<textarea>' for improved usability and accessibility.
