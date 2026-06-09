## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2025-03-05 - Missing Form Associations
**Learning:** Stylized custom form inputs without native labels often omit essential `id` and `htmlFor` pairings, breaking screen reader association and reducing interactive click area.
**Action:** When auditing custom UI forms, prioritize checking explicit `<label>` to `<input>` linkages and adding `cursor-pointer` to labels for better visual feedback.
