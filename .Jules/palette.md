## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-17 - Unlinked Form Labels Impair Accessibility
**Learning:** Found form labels in the Contact component that lacked `htmlFor` attributes matching input `id`s, breaking screen reader association and reducing click targets. This makes it harder for users with motor impairments or visual impairments to interact with forms effectively.
**Action:** Always link form labels to their inputs using `htmlFor` and `id` attributes, and consider adding `cursor-pointer` to labels to visually indicate their clickability.
