## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2026-06-23 - Stylized UI Label Accessibility
**Learning:** In terminal/cyberpunk UIs where labels look like pure stylized text (e.g., uppercase, monospaced, colored text like "NAME >"), users with mice/touch devices don't naturally realize they can click the label to focus the input unless a visual indicator (like a pointer cursor) is present. Connecting labels with `htmlFor` is essential for screen readers, but the visual affordance (`cursor-pointer`) is equally critical for sighted users in these stylized designs.
**Action:** Always add `cursor-pointer` to explicitly linked labels in highly stylized UIs (like the terminal contact form) to provide immediate visual feedback that they are interactive elements that focus the associated field.
