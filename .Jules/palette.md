## 2024-05-18 - Missing label references
**Learning:** In a highly stylized dark-mode app, form inputs are sometimes laid out adjacent to stylized text labels without semantic `htmlFor`/`id` linking. This damages screen reader accessibility for complex inputs like a contact form.
**Action:** Add explicit semantic IDs to `input`/`textarea` fields and matching `htmlFor` attributes on corresponding `label` elements to connect the elements syntactically.
