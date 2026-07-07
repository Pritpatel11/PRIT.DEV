## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing Explicit Form Labels
**Learning:** Found that custom form implementations often lack explicit label-to-input association using `htmlFor` and `id`. This impacts screen readers. Additionally, adding `cursor-pointer` to custom stylized labels visually communicates to sighted users that clicking the label focuses the corresponding input.
**Action:** Updated `Contact.jsx` to explicitly link labels and inputs, and applied `cursor-pointer`. Always verify label-input associations and consider adding pointer cursors for improved UX.
