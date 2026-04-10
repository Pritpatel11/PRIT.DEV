## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.
## 2026-04-10 - Better Form Accessibility
**Learning:** Found that custom form implementations often miss fundamental accessibility attributes like `id` and `htmlFor`, which are critical for screen readers to properly associate labels with inputs. Also found a missing `aria-label` on an icon-only close button within a toast notification.
**Action:** Always ensure that form labels explicitly reference their corresponding inputs using `htmlFor` and `id`. Check custom UI elements, like toasts and modals, for icon-only buttons that require an `aria-label`.
