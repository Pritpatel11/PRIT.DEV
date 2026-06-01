## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-05-18 - Missing label connections and ARIA labels on text inputs
**Learning:** Found a widespread pattern of input fields lacking either explicit ARIA labels or properly linked `<label>`s across core components (Contact Form, Terminal, PritBot). In the Contact Form, `<label>`s were visually present but not programmatically linked via `htmlFor` and `id`, breaking screen reader associations and focus-on-click functionality.
**Action:** Added descriptive `aria-label` attributes to visually labelless inputs and properly linked labels to inputs/textareas using `htmlFor` and `id`. Also added `cursor-pointer` to labels to visually signal this connection. Always check `id` and `htmlFor` pairings on forms.
