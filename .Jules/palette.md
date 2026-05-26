## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2025-05-26 - Input Field Accessibility
**Learning:** Discovered inputs across the application (Terminal, PritBot, Contact form) lacking accessible names (`aria-label`s or associated `<label>`s with `htmlFor`/`id`), preventing screen readers from identifying their purpose. In addition, standalone labels lacked visual indicators of interactivity.
**Action:** Added `aria-label` to standalone inputs and properly linked labels to inputs using `htmlFor` and `id` where visible labels exist. Added the `cursor-pointer` utility to interactive labels. Moving forward, ensure all new inputs have an accessible name and that visible labels clearly indicate clickability.
