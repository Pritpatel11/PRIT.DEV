## 2024-05-24 - Form Label Accessibility
**Learning:** In highly stylized UI components, form labels often lose their semantic connection to inputs and lack visual affordances (like pointer cursors) that indicate clickability, frustrating users who expect to click the label to focus the input.
**Action:** Always explicitly link `<label>` elements to their corresponding inputs using `htmlFor` and `id` attributes, and apply utility classes like `cursor-pointer` to stylized labels to visually signal interactivity.
