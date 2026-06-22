## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2026-06-22 - Unlinked Form Labels
**Learning:** Found that form labels in the Contact page were not explicitly linked to their corresponding inputs and textareas. This impacts screen reader users and users with motor disabilities who rely on clicking labels to focus inputs.
**Action:** Linked the labels to their inputs using the `htmlFor` and `id` attributes, and added the `cursor-pointer` class to visually signify this functionality.
