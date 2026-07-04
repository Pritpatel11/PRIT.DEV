## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-19 - Missing Input Labels and Form Associations
**Learning:** Found several input fields that were not accessible to screen readers because they were either missing visible labels (in PritBot and Terminal) or the visible labels were not programmatically associated with their inputs using `htmlFor` and `id` attributes (in Contact form). Additionally, adding `cursor-pointer` to explicitly linked labels improves usability by allowing users to click the label to focus the input.
**Action:** Added `aria-label` attributes to the standalone inputs and explicitly linked the form labels to their inputs using `htmlFor` and `id` attributes, along with adding `cursor-pointer` to the labels. For future UX enhancements, ensure all form fields have proper programmatic labels.
