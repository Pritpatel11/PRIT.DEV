## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-07-20 - Unlinked Form Labels Impair Accessibility and UX
**Learning:** Found that labels in the Contact form were not explicitly linked to their inputs using `id` and `htmlFor`. This creates an accessibility barrier for screen reader users and a UX issue because clicking the label does not focus the input. Visual styles on labels (like uppercase text and tracking) are insufficient if the semantic link is missing.
**Action:** Linked labels and inputs explicitly and added the `cursor-pointer` utility to labels to visually signal that they are interactive. Always ensure forms have explicit semantic connections between labels and inputs.
