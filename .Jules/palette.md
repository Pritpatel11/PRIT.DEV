## 2024-11-23 - Link labels with form inputs for Accessibility
**Learning:** Found labels in Contact.jsx form without `htmlFor` properties to explicitly link them to `id` properties on the related input elements. This is an accessibility violation that affects screen reader users.
**Action:** Always add `htmlFor` to labels and corresponding `id` to inputs to link them correctly.
