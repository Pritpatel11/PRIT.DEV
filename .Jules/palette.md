## 2025-01-01 - Linked Form Labels to Inputs
**Learning:** Stylized custom forms often omit native `<label htmlFor="...">` and input `id` attributes, relying on visual proximity. This breaks screen reader association and reduces click targets.
**Action:** Always link form labels to their inputs using `htmlFor` and `id`, and add `cursor-pointer` to visual labels to signal clickability.
