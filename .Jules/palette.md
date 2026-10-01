## 2025-10-01 - Linked labels for stylized form fields
**Learning:** Users can have difficulty focusing on stylized form fields if the visual label is just an unconnected text element. In custom-styled UIs, explicitly connecting labels via `htmlFor`/`id` and adding `cursor-pointer` dramatically increases the clickable area for focus.
**Action:** Always link form labels to inputs using `htmlFor` and `id`, and add visual affordances like `cursor-pointer` to labels when the default input styling is altered.
