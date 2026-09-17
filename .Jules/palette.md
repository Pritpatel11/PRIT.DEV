## 2026-09-17 - Proper Form Label Associations
**Learning:** In highly stylized forms (like the cyber-themed terminal on the Contact page), explicit `htmlFor` and `id` bindings are often missed. Relying solely on visual proximity is an accessibility anti-pattern. Clicking the stylized label should focus the input.
**Action:** Add `htmlFor` to `<label>` elements and matching `id` attributes to their corresponding `<input>` or `<textarea>` fields. Additionally, apply the `cursor-pointer` utility class to labels in stylized UI components to visually signal clickability.
