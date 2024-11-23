import type { ComponentType, SingleComponentType } from "@/lib/types/component";
import PreviewUseMouse from "@/cuicui/hooks/use-mouse/preview-use-mouse";

export const useMouseComponent: SingleComponentType = {
  sizePreview: "xs",
  variantList: [
    {
      name: "Default",
      component: <PreviewUseMouse />,
      slugPreviewFile: "preview-use-mouse",
      slugComponentFile: "use-mouse",
    },
  ],
};
