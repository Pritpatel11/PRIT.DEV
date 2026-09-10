## 2025-02-23 - Explicitly Link Form Labels
**Learning:** Discovered that highly stylized forms without explicitly linked labels (`htmlFor` and `id`) cause severe issues for screen reader users and prevent users from clicking labels to focus inputs.
**Action:** Always explicitly connect `<label>` elements to their corresponding inputs using `htmlFor` and `id` properties in React, and add visual indicators like `cursor-pointer` to stylized labels to ensure usability.
