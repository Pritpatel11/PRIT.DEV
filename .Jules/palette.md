## 2025-05-18 - Form Associations and Icon ARIA Labels
**Learning:** React elements like `<label>` wrapping an input natively link in HTML, but for improved screen reader reliability (and when styled as non-wrapping siblings), explicitly passing `htmlFor` on labels mapping to the `id` of inputs is highly recommended. Similarly, icon-only buttons need an explicit `aria-label` to provide context.
**Action:** Ensure all `<label>` components use `htmlFor` with corresponding `id`s on `<input>` and `<textarea>`, and `aria-label` properties on icon-only buttons for full accessibility.
