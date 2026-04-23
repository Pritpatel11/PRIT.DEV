## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing Explicit Form Labels
**Learning:** Found a pattern of `<label>` elements missing the `htmlFor` attribute and corresponding `id` on inputs/textareas, causing the text not to focus the input upon click. Also found missing `aria-label`s on visual-less inputs in terminal and chat UI.
**Action:** Always link form labels using `htmlFor` and `id`. Add explicit `aria-label` when visible labels aren't available for the design.
