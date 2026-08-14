## 2024-08-14 - Form Accessibility
**Learning:** In heavily stylized futuristic UIs, unlinked labels lack visual affordance and break accessibility.
**Action:** Always explicitly link form labels using htmlFor and id, and apply cursor-pointer for visual clickability cues.
## 2024-08-14 - Netlify Strict CI Redirect Rules
**Learning:** Netlify strict CI checks for "Redirect rules" and "Header rules" may fail if files like `public/_redirects` contain irregular spacing or trailing whitespace.
**Action:** Format redirect rules cleanly (e.g., `/* /index.html 200`) with exactly one space between tokens to ensure successful deployment.
