## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-07-06 - Unlinked Form Labels in Custom UI
**Learning:** Discovered that custom form implementations (like in the Contact page) lack explicit linking between `<label>` and their respective `<input>`/`<textarea>` elements. Without `htmlFor` and `id`, screen readers cannot reliably associate the label with the input, and users miss out on the expanded click target area which is especially critical for accessibility on stylized elements.
**Action:** Added `htmlFor` attributes to labels, matching `id` attributes to inputs, and the `cursor-pointer` utility class to visually signal the expanded clickable area. Always ensure new form fields are explicitly linked.
