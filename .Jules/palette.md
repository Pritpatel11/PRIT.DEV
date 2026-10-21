## 2025-03-01 - Explicit Form Label Linking
**Learning:** Stylized custom form components often lose implicit click-to-focus behavior when labels and inputs are decoupled in complex layouts, making keyboard and touch navigation difficult.
**Action:** Always explicitly link `label` elements to inputs using `htmlFor` and `id`, and apply `cursor-pointer` to labels to visually signal clickability.
