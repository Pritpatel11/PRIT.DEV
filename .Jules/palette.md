## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Missing Linked Form Labels in Custom Components
**Learning:** Custom styled form labels without explicit `htmlFor` (and corresponding `id` on inputs) hinder accessibility and usability. Specifically, users cannot click the label to focus the input, and screen readers fail to associate the label with the input correctly.
**Action:** Always link form labels to their inputs explicitly using `id` and `htmlFor`. Additionally, apply `cursor-pointer` to custom labels to visually signify clickability.
