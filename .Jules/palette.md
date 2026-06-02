## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2024-05-24 - Form Label Clickability Insights
**Learning:** Even when labels are explicitly linked to inputs with `htmlFor` and `id`, users may still struggle to realize they are clickable without explicit visual cues, especially on stylized interfaces. Applying a `cursor-pointer` to explicitly linked labels improves click target discoverability significantly.
**Action:** Always include a visual cursor indicator (e.g., `cursor-pointer`) when linking `<label>` elements to input fields on customized form UIs to reinforce the interactive nature of the labels.
