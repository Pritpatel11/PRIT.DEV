## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-06-29 - Missing Form Label Associations
**Learning:** Found that custom stylized terminal-themed forms (like in Contact.jsx) often lack explicit `htmlFor` and `id` associations between labels and inputs, relying only on visual grouping. This breaks screen reader functionality and prevents clicking the label to focus the input.
**Action:** Always verify that custom stylized form components explicitly link `<label htmlFor="id">` to `<input id="id">`. Adding a `cursor-pointer` utility class to these labels is a quick way to visually signal this interaction pattern to sighted users.
