## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Form Label Association and Clickability
**Learning:** Found that `<label>` elements in custom-styled forms (like the Contact page) were missing explicit `htmlFor` attributes to associate them with their respective inputs, and lacked visual cues (like `cursor-pointer`) to indicate they can be clicked to focus the input. This affects both screen reader accessibility and general mouse/touch usability.
**Action:** Always ensure `<label>` elements are explicitly linked to inputs using `htmlFor` and `id`, and add utility classes like `cursor-pointer` to labels in stylized UI components to visually signal their interactivity.
