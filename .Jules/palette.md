## 2024-03-24 - Form Field Accessibility
**Learning:** In highly styled React components, standard `<label>` elements often lack `htmlFor` attributes, reducing screen reader compatibility and mouse clickability.
**Action:** Always verify form inputs have unique `id`s and their corresponding labels use `htmlFor`. Additionally, add `cursor-pointer` to labels to visually reinforce the expanded click target.
