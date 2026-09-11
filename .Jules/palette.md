## 2024-03-01 - Form Accessibility
**Learning:** The contact form inputs were missing explicit linking with their labels which degrades a11y for screen readers and makes it impossible to click labels to focus inputs.
**Action:** Always add `htmlFor` on `<label>` elements matching the `id` of the input, and use `cursor-pointer` to improve mouse interaction.
