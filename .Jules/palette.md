## 2024-05-18 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a widespread pattern of icon-only buttons lacking `aria-label`s across core components (Navbar, Terminal, AccentSwitcher, PritBot). This renders them completely inaccessible to screen reader users, who will just hear "button" without any context for the action.
**Action:** Added descriptive `aria-label` attributes to these buttons (e.g., "Toggle menu", "Close terminal", "Toggle theme"). For future UX enhancements, always check if any new or existing icon-only buttons have accessible names.

## 2024-11-28 - Missing Semantic Form Label Associations
**Learning:** Stylized custom form components often use plain `<label>` tags purely for visual styling without proper `htmlFor` and `id` bindings to their corresponding inputs. This breaks screen reader functionality and clicking the label text won't focus the input. Additionally, without native-like styling (e.g. `cursor-pointer`), users may not realize the label is clickable.
**Action:** Always ensure that `htmlFor` on the `<label>` matches the `id` on the `<input>` or `<textarea>`, and add a visual cue like `cursor-pointer` to custom stylized labels to improve both accessibility and mouse interactions.
