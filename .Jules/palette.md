## 2024-05-18 - Form Label Accessibility
**Learning:** In stylised or custom-built forms, native HTML label associations are often overlooked. Missing `htmlFor` attributes on labels prevent screen readers from associating them with inputs, and visually, users expect to be able to click a label to focus the corresponding input.
**Action:** Always verify that `<label>` elements have a correct `htmlFor` attribute matching the `id` of their `<input>`, and add utility classes like `cursor-pointer` to visually reinforce clickability.
