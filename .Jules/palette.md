## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2026-06-18 - Missing ARIA Labels on Inputs and Unlinked Form Labels
**Learning:** Found several input fields (Terminal command, PritBot chat) lacking `aria-label`s and form labels (Contact page) not explicitly linked to their inputs using `htmlFor` and `id`. This impacts screen reader users and users relying on clicking labels to focus inputs.
**Action:** Added `aria-label`s to input fields without visual text labels and explicitly linked form labels to inputs using `htmlFor` and `id`, along with `cursor-pointer w-fit` for visual clickability.
