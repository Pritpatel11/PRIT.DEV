## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-07-11 - Linking Labels to Form Inputs
**Learning:** Found that custom stylized forms (like the terminal-themed contact form) often use block elements as visual labels without explicitly linking them to their corresponding input fields using `htmlFor` and `id`. This impacts both screen readers and usability, as users cannot click the label text to focus the input.
**Action:** Linked all form labels explicitly and added the `cursor-pointer` utility class to provide visual feedback that the label is interactive. For future custom forms, always ensure explicit label association and appropriate hover/cursor states for usability.
