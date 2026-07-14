## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-14 - Unlinked Form Labels Reduce Accessibility
**Learning:** Found that form labels in components like Contact.jsx lacked `htmlFor` attributes and corresponding `id`s on inputs. This breaks the semantic link for screen readers and reduces the clickable area for users, forcing them to precisely click the input instead of the label.
**Action:** Always link `label` and input elements explicitly using `htmlFor` and `id`, and add the `cursor-pointer` class to visually signal that labels are clickable.
