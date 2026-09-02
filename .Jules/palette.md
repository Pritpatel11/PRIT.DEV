## 2025-05-18 - Explicitly link form labels and add pointer cursors
**Learning:** In styled UI forms, implicitly wrapping inputs with labels or leaving them unassociated creates accessibility barriers and a poor micro-UX, as users cannot click the label text to focus the input.
**Action:** Always explicitly link `<label>` elements to `<input>`/`<textarea>` fields using matching `htmlFor` and `id` attributes. Add utility classes like `cursor-pointer` to labels to visually signal this clickability.
