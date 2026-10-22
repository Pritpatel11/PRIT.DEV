## 2024-05-14 - Modal Focus Management
**Learning:** When modals open, users naturally expect keyboard focus to be trapped within the modal and for 'Escape' to close it. The current `showPrivacyAlert` modal in CaseStudy lacks these essential accessibility features, meaning keyboard users can continue tabbing through the main page behind the overlay, breaking the mental model of a modal.
**Action:** Add an `aria-label` to the close button for screen readers, ensuring basic accessibility for this interaction.
