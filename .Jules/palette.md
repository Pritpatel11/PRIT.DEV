## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-18 - Missing Form Label Associations
**Learning:** Found that custom-styled forms (like the Contact page) sometimes lack proper `htmlFor` and `id` bindings between labels and inputs. This prevents users from clicking the label to focus the input and degrades screen reader experience.
**Action:** Added explicit `htmlFor` to `label`s and `id` to `input`s. Also added `cursor-pointer` to labels to visually indicate that they are clickable to focus the associated input field.
