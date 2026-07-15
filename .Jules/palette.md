## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-15 - Unlinked Form Labels Impede Navigation
**Learning:** Discovered that the terminal-themed contact form utilized stylized UI labels (<label>) without explicitly linking them to their corresponding inputs (<input>, <textarea>) using `htmlFor` and `id` attributes. This missing association makes it difficult for screen reader users to understand what input field they are on and prevents clicking the label from focusing the input, which is a common expectation for mouse users.
**Action:** Always ensure that form labels explicitly reference their associated input elements via matching `htmlFor` and `id` attributes. Additionally, applied the `cursor-pointer` utility class to these stylized labels to clearly signal to sighted users that they are interactive and click-to-focus targets.
