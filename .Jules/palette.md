## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-06-30 - Explicitly Linking Form Labels and Inputs
**Learning:** Discovered that styled form components (like those in the Contact page) often fail to implicitly link their `<label>`s and `<input>`s, which can negatively impact accessibility and usability. Specifically, without explicit linkage, clicking the label doesn't focus the input. Adding the `cursor-pointer` class to labels provides an important visual cue to users that they are interactive.
**Action:** For all future and existing form developments, strictly enforce the use of explicit linkage using `htmlFor` on the label and a corresponding `id` on the input/textarea. Ensure labels that are styled to look like custom UI elements include a `cursor-pointer` class or similar visual affordance to indicate interactivity.
