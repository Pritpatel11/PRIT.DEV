## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2025-05-18 - Form Accessibility Linkage
**Learning:** Adding `htmlFor` to `<label>` tags and an identical `id` to the associated `<input>` or `<textarea>` tags is essential for keyboard navigation, focus management, and screen reader announcements in form components.
**Action:** Ensure all newly created or edited form fields explicitly link their labels to the interactive elements.
