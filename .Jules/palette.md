## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-20 - Missing Semantic Form Bindings
**Learning:** Discovered that stylized custom form components frequently neglect explicit semantic bindings. While `label` elements exist, they often lack the `htmlFor` attribute linking them to their corresponding `input` `id`, making the click targets smaller and creating a barrier for screen reader users and users with motor difficulties.
**Action:** Added `htmlFor` and `id` attributes to all inputs in the Contact form. Also added `cursor-pointer` to labels to visually signal this improved clickability to sighted users. Always verify that stylized forms maintain these core accessibility primitives.
