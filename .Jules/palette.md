## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-06-11 - Custom Styled Form Interactions
**Learning:** Terminal-style forms with uppercase labels and custom inputs can obscure standard HTML semantics, leading developers to miss standard label-to-input linkage (`htmlFor`/`id`). Additionally, non-standard label styling without cursor feedback (`cursor-pointer`) makes it unclear that labels are interactive touch/click targets.
**Action:** Always verify `htmlFor`/`id` linking in custom-styled forms, and mandate interactive cursor states on labels to reinforce that they expand the click area of the input.
