## 2026-08-26 - Explicit Form Control Linking
**Learning:** Relying solely on visual proximity for form labels isn't sufficient for accessibility or a good user experience. Even in highly stylized 'cyberpunk' themes, users expect to be able to click a label to focus its associated input.
**Action:** Always use `htmlFor` on `<label>` elements and matching `id` attributes on inputs/textareas, and ensure labels have a `cursor-pointer` class to signify clickability.
