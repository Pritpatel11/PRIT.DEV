## 2023-10-27 - Form Label Clickability
**Learning:** Users often click labels instead of inputs on stylised forms. Without `htmlFor` and explicit cursor styles, this natural interaction fails, leading to friction.
**Action:** Always link labels to inputs with `htmlFor`/`id` and apply `cursor-pointer` to labels in stylised UI components to signal clickability.
