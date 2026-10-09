## 2026-10-09 - Enhance Form Accessibility
**Learning:** In futuristic or heavily stylized components (like terminals), native semantic relationships like form labels and inputs are often overlooked for aesthetics, breaking keyboard access and screen reader support.
**Action:** Always map labels to inputs with `htmlFor` and `id`, and explicitly add `cursor-pointer` when stylizing them to ensure visual affordance for clickable areas.
