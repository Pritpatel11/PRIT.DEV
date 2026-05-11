## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2025-05-11 - Missing Form Input Labels and ARIA Labels
**Learning:** Discovered inputs across the application (specifically contact forms and terminal/chat UI) lacking explicitly associated `<label>`s via `htmlFor` / `id` or implicit `aria-label`s. This prevents screen reader users from understanding what data should be entered into the fields and prevents users from clicking labels to focus input elements.
**Action:** Associated visible form labels with their corresponding inputs using `htmlFor` matching the input `id`. For inputs without a visible label, added descriptive `aria-label` attributes. Always ensure input fields are semantically associated with a descriptive label or aria-label for future enhancements.
