## 2025-02-26 - Form Accessibility in Stylized Components
**Learning:** Stylized custom inputs often lose their semantic connection to labels, reducing both screen reader accessibility and the click target size for users.
**Action:** Always explicitly link `<label>` and `<input>`/`<textarea>` elements using `htmlFor` and `id`, and add `cursor-pointer` to labels to visually signal clickability.
