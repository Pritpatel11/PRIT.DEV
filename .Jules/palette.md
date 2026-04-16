## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-04-16 - Missing Form and Input Associations
**Learning:** Found a widespread pattern of interactive inputs and form fields lacking proper accessibility associations. Form labels visually represented their target inputs but lacked the required `htmlFor` matching the input `id`. Similarly, interactive search/command inputs in custom components (like Terminal and PritBot) lacked visible labels and `aria-label`s, rendering them contextless for screen reader users.
**Action:** Added `htmlFor` and matching `id`s to all form fields. Added `aria-label`s to custom interactive inputs where a visible label was intentionally excluded for design reasons. For future UX enhancements, ensure all form controls are programmatically associated with labels.
