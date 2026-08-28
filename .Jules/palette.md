## 2026-08-28 - Custom Styled Forms Accessibility
**Learning:** Custom styled components like terminal-themed forms often omit standard accessibility features. Forms that don't look like standard web forms frequently lack explicitly linked labels and inputs using `htmlFor` and `id`, breaking keyboard/screen reader navigation.
**Action:** Always verify that stylistic UI wrappers don't strip away core semantic HTML requirements, especially explicitly linked labels in forms. Include `cursor-pointer` on labels in these custom UIs to signal their interactability.
