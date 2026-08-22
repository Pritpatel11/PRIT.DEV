## 2025-02-14 - Explicitly Linked Form Labels
**Learning:** Stylized custom form labels without native `htmlFor` and `id` linking negatively impact screen reader accessibility, and lack of visual clickability cues (like `cursor-pointer`) degrades UX for sighted users who expect to be able to click labels to focus inputs.
**Action:** Always link custom UI form labels to their respective inputs using explicit `htmlFor` and `id` attributes, and add `cursor-pointer` to explicitly signal interactivity visually.
