## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-24 - Semantic Form Labels Missing
**Learning:** Discovered that complex, custom-styled forms in this app lack explicit semantic connections (`htmlFor` / `id`) between `label` and `input`/`textarea` elements. This makes it difficult for screen readers to associate the input with its purpose and reduces the clickable area for users.
**Action:** explicitly link `label` elements to their target inputs using `htmlFor` and `id` attributes. In stylized components, also apply `cursor-pointer` to labels to visually signal this improved clickability to all users.
