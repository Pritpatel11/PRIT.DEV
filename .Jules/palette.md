## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Form Inputs Missing Associations and Labels
**Learning:** Found instances where form inputs lacked explicit label associations (`htmlFor`/`id`) and interactive elements like `Terminal` and `PritBot` text inputs were missing an accessible name (`aria-label`). Without these, screen reader users do not receive adequate context for the inputs, and the clickable area for form elements is unnecessarily small.
**Action:** Added `htmlFor` and `id` to the `Contact` page form elements to explicitly link labels to inputs, added `cursor-pointer` to labels for better visual cues, and provided `aria-label`s to the text inputs in `Terminal` and `PritBot`. Always ensure that every input field is either explicitly linked to a label or provided with an `aria-label` for screen reader accessibility.
