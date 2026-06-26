## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Unlinked Form Labels in Stylized UI
**Learning:** In highly stylized or "terminal-themed" UIs, traditional form labels are often rendered as decorative elements (e.g., `<label>NAME &gt;</label>`) without proper semantic linking (`htmlFor` matching input `id`). This not only breaks screen reader accessibility but also degrades the mouse/touch experience, as clicking the stylized label text doesn't focus the input.
**Action:** Always ensure that even highly stylized or decorative labels have an `htmlFor` attribute that matches the corresponding input's `id`. Additionally, add a `cursor-pointer` utility class to visually signal that the label itself is an interactive element that will focus the input when clicked.
