## 2025-02-20 - Ensure Explicit Form Labels Accessibility
**Learning:** In stylised dark-mode or cyber-themed user interfaces, form labels may lack explicit linkability via `id` and `htmlFor`, negatively impacting screen reader usability and click-to-focus behaviors. Also custom cursor styles on labels can be misleading if not clickable.
**Action:** Add `id` and `htmlFor` explicitly in form elements, and always add `cursor-pointer` to visual labels to indicate clickability for accessibility.
