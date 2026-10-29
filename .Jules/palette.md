## 2024-10-29 - Explicit Label Linking in Terminal Forms
**Learning:** The custom terminal-styled forms in this app rely heavily on visual proximity for labels, but omit `htmlFor` attributes which breaks screen reader association and click-to-focus behavior. Additionally, stylized text labels lack visual affordance for clickability.
**Action:** Always explicitly link `<label htmlFor="...">` to `<input id="...">` in stylized terminal forms, and use `cursor-pointer` to visually reinforce that labels can be clicked to focus inputs.
