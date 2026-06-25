## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-06-25 - Unlinked Form Labels Impair Screen Reader Accessibility
**Learning:** Found that customized UI form components (like the terminal-themed form in Contact.jsx) often lack semantic `htmlFor` and `id` linkages between `<label>`s and inputs. This causes screen readers to announce inputs without their descriptive labels, severely hurting accessibility, especially when standard visual cues are replaced with stylized text.
**Action:** Explicitly linked all form labels to their inputs using `htmlFor` and matching `id` attributes, and added `cursor-pointer` to labels to reinforce visual clickability. For future stylized form enhancements, always ensure semantic linking is maintained.
