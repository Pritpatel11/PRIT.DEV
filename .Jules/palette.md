## 2026-08-20 - Improve Accessibility of Forms and AI Chat Bots
**Learning:** Interactive components like terminal widgets and AI bots often lack accessibility attributes for inputs, making them invisible to screen readers.
**Action:** Always add explicit ARIA labels (`aria-label`) to custom inputs that don't have visual labels, and explicitly map labels to form fields using `htmlFor` and `id`.
