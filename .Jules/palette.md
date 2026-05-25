## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-05-25 - Disconnected Form Labels in Styled Components
**Learning:** Found a pattern where visually distinct form labels (e.g., stylized text above inputs in Contact form) were not programmatically linked to their inputs using `htmlFor` and `id`. This hurts a11y and UX, as clicking the label doesn't focus the input.
**Action:** Always verify that labels in custom/styled form components are explicitly linked using `htmlFor` and `id` attributes, and add `cursor-pointer` to labels to visually signal this standard behavior to mouse users.
