## 2026-08-23 - Forms Missing Explicit Label Associations
**Learning:** The contact form lacks explicit HTML associations (`htmlFor` and `id`) between labels and input fields. This makes it difficult for screen readers to correctly interpret which label belongs to which input, and prevents users from focusing the input by clicking the label.
**Action:** Add `htmlFor` to `<label>` and corresponding `id` to `<input>`/`<textarea>` elements for all form fields, and add `cursor-pointer` to the labels.
## 2026-08-23 - Terminal and PritBot Missing Input Labels
**Learning:** The terminal and PritBot inputs lack ARIA labels, making it difficult for screen reader users to understand their purpose.
**Action:** Add `aria-label` to icon-only inputs that do not have explicit `<label>` elements.
