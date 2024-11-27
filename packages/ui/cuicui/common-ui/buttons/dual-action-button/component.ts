import { PreviewDualActionButton } from "@/cuicui/common-ui/buttons/dual-action-button/preview.dual-action-button";
import type { ComponentType } from "@/lib/types/component";

export const dualActionButtonComponent: ComponentType = {
  slug: "dual-action-button",
  name: "Dual Action Button",
  description: "A button that can perform two actions.",
  sizePreview: "sm",
  variantList: [
    {
      name: "Default",
      component: PreviewDualActionButton,
      slugPreviewFile: "preview.dual-action-button",
    },
  ],
};
