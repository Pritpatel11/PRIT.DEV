## 2024-05-20 - Form label accessibility in terminal UI
**Learning:** In highly stylized components like the terminal UI, semantic `htmlFor`/`id` bindings combined with `cursor-pointer` on labels provide essential affordance and screen reader context that might otherwise be lost.
**Action:** Always pair custom UI labels with their inputs using `id` and `htmlFor` and add `cursor-pointer` to signal clickability to sighted users.
