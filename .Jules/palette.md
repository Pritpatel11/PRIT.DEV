## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Form Accessibility Improvement
**Learning:** Found that custom form labels in Contact page were missing `htmlFor` attributes, and inputs missing `id` attributes. This breaks the link between label and input for screen readers and reduces the clickable area for users.
**Action:** Added `htmlFor` and `id` attributes to all form fields. Also found and fixed an icon-only close button on the toast notification missing an `aria-label`. Always check for semantic HTML in forms for future accessibility improvements.
