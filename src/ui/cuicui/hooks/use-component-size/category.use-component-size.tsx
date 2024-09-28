import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseComponentSize } from "#/src/ui/cuicui/hooks/use-component-size/preview-use-component-size";
import { RulerIcon } from "lucide-react";

export const useComponentSizeCategory: SingleComponentCategoryType = {
  slug: "use-component-size",
  name: "Use Component Size",
  description: "A hook that allows you to manage the size of a component",
  releaseDateCategory: new Date("2024-09-28"),
  icon: RulerIcon,
  previewCategory: {
    component: <PreviewUseComponentSize />,
    previewScale: 0.8,
  },
  component: {
    lastUpdatedDateComponent: new Date("2024-09-28"),
    sizePreview: "sm",
    isIframed: false,
    variantList: [
      {
        name: "default variant",
        component: <PreviewUseComponentSize />,
        slugComponentFile: "use-component-size",
        slugPreviewFile: "preview-use-component-size",
      },
    ],
  },
};
