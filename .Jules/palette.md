## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Disconnected Form Labels
**Learning:** Found that form labels in `src/pages/Contact.jsx` were not explicitly linked to their inputs using `htmlFor` and `id` bindings. This reduces accessibility for screen reader users and diminishes the click target area for all users, as clicking the label does not focus the input.
**Action:** Added explicit `htmlFor` and `id` bindings to form labels and inputs. Also added the `cursor-pointer` utility class to labels to visually signal clickability. Always ensure form elements have proper explicit associations.
