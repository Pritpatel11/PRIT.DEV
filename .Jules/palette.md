## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-07-03 - Explicitly Linking Form Labels
**Learning:** Discovered that form labels in `src/pages/Contact.jsx` were not explicitly linked to their corresponding input/textarea elements using `htmlFor` and `id`. This impacts screen reader users who need clear associations to understand the purpose of each field. Additionally, adding `cursor-pointer` to the labels visually cues users that clicking the label focuses the input.
**Action:** Added `htmlFor` attributes to `<label>`s and matching `id`s to `<input>`/`<textarea>`s in the Contact form. Added `cursor-pointer` utility class to labels.
