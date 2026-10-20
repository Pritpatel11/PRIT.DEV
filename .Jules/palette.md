## 2025-02-18 - Missing ARIA Labels on Dismiss Buttons
**Learning:** Found a consistent pattern where dismiss/close buttons in overlay components (modals, toasts, terminals) lack ARIA labels. Since these buttons only use icons or simple text like "×", screen readers cannot announce their purpose.
**Action:** Ensure all interactive elements that do not have visible text labels have an `aria-label` attribute describing their action.
