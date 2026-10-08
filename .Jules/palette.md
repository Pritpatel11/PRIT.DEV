## 2024-10-25 - Explicit Form Label Linking
**Learning:** In stylized components where input elements are custom-styled, implicitly wrapped labels or unlinked labels fail to provide clear focus targets for screen readers, and clicking the text does not focus the input.
**Action:** Always explicitly link <label> to <input> using htmlFor and id attributes, and apply cursor-pointer to the label to visually signal clickability.
