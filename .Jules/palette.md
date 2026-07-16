## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-24 - Explicit Label Linking for Custom Stylized Forms
**Learning:** Found that custom stylized form labels (e.g., using Tailwind utility classes) without explicit linking to their inputs via `htmlFor` and `id` degrade accessibility. Screen readers cannot properly associate the label with the input field without it, and users expect to click a label to focus the input.
**Action:** Explicitly linked labels to inputs in the Contact form using `htmlFor` and `id` attributes and added `cursor-pointer` to labels to improve screen reader accessibility and visual feedback on clickability.
