## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Missing ARIA Labels on Unlabeled Form Inputs
**Learning:** Encountered inputs in custom components (PritBot chat, Terminal input) and buttons (Contact toast close button) that lacked explicit visual labels and `aria-label`s. Screen reader users would have difficulty understanding the purpose of these interactive elements.
**Action:** Always verify that input fields without a visible `<label>` element have a descriptive `aria-label` attribute (e.g., "Ask me something", "Terminal input"). Apply the same to any missing icon-only buttons like toast notification closures.
