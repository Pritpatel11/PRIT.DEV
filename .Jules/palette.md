## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-06-27 - Form Labels not Associated with Inputs
**Learning:** Found that custom form labels in the Contact page lacked `htmlFor` and `id` links to their corresponding input fields, making it difficult for screen reader users to identify which field they are typing into, and preventing mouse/touch users from clicking the label to focus the input.
**Action:** Always link custom labels to their inputs using `htmlFor` and `id`, and add a `cursor-pointer` utility class to visually signal that the label is interactive.
