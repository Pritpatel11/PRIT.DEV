## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2024-06-21 - Form Label Clickability
**Learning:** Stylized form labels that resemble plain text (e.g., uppercase mono text with tracking) don't naturally afford clickability, even when properly linked with `htmlFor` and `id` for screen readers. Users rely on visual cues like the pointer cursor to realize they can click the label to focus the input.
**Action:** Always add utility classes like `cursor-pointer` to explicitly linked `<label>` elements in custom-styled UI components to reinforce mouse interaction.
