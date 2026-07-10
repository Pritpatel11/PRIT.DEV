## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-10 - Explicitly Linked Form Labels
**Learning:** Found custom styled form labels that visually appeared as labels but were not explicitly linked to their corresponding inputs using `htmlFor` and `id` attributes. This prevented users from clicking the labels to focus the inputs, a common UX expectation, and impaired screen reader accessibility.
**Action:** Explicitly linked labels to inputs/textareas using matching `htmlFor` and `id` attributes, and added the `cursor-pointer` utility class to labels to visually signal their clickability.
