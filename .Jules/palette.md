## 2025-02-24 - Explicit Form Label Association
**Learning:** Relying purely on visual proximity for form labels in terminal-themed UI components leaves screen reader users without proper context, and prevents clicking the label to focus the input.
**Action:** Always link `<label>` elements to their corresponding inputs using the `htmlFor` and `id` attributes, and add utility classes like `cursor-pointer` to visually indicate clickability.
