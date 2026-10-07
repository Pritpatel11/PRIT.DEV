## 2025-03-01 - Icon-only Button Accessibility
**Learning:** Icon-only close buttons (like in Toast notifications or custom modals) often lack accessible names, preventing screen readers from announcing their purpose, and lack visual focus rings for keyboard users.
**Action:** Always add descriptive `aria-label`s and `focus-visible:ring-2` (using existing theme colors) to icon-only buttons to ensure they are fully navigable and understandable by all users.
