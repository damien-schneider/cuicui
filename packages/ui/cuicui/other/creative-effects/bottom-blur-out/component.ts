import type { ComponentType } from "@/lib/types/component";
import PreviewBottomBlurOut from "@/cuicui/other/creative-effects/bottom-blur-out/bottom-blur-out.variant";

export const bottomBlurOutComponent: ComponentType = {
  sizePreview: "sm",
  slug: "bottom-blur-out",
  isResizable: false,
  isIframed: true,
  name: "Bottom blur out disapearance effect",
  description:
    "A bottom blur out effect that can be used in any project with any artisitic style",
  variantList: [
    {
      name: "Bottom blur out",
      component: PreviewBottomBlurOut,
      slugPreviewFile: "preview.bottom-blur-out",
      slugComponentFile: "bottom-blur-out",
    },
  ],
};

export default bottomBlurOutComponent;
