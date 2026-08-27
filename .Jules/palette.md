## 2025-02-23 - Contact Form Accessibility
**Learning:** Form labels using custom stylized elements (like Tailwind customized `label` tags) in this project lacked explicit `htmlFor` attributes linking them to input `id`s, breaking screen reader association and reducing the clickable area.
**Action:** Always verify that `<label>` elements are explicitly linked to their corresponding inputs using `htmlFor` and `id`, and add `cursor-pointer` to labels in custom UI components to visually indicate they expand the input's hit area.
