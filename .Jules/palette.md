## 2024-05-24 - Form Field Accessibility
**Learning:** In highly stylized React forms without native semantic HTML links between labels and inputs, click areas are smaller, and screen readers fail to associate context. Adding `htmlFor` alongside utility classes like `cursor-pointer` on labels improves both cognitive visibility and programmatic accessibility.
**Action:** Ensure all stylized custom form fields use explicit `id` and `htmlFor` properties to maintain fundamental web accessibility standards.
