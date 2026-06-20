## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Missing Input Associations and Labels
**Learning:** Text inputs inside the AI bot and the Terminal lacked `aria-label`s, rendering them contextless for screen reader users. Furthermore, labels in the Contact form lacked `htmlFor` associations and a `cursor-pointer` to signify clickability.
**Action:** Always ensure any input fields, especially standalone ones like command lines or chat bots, include an `aria-label` when no visible text label is present. Explicitly associate labels with form inputs via `htmlFor` and `id`, and add visual cues (`cursor-pointer`) to enhance usability for sighted users.
