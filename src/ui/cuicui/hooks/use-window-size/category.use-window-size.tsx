import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseWindowSize } from "#/src/ui/cuicui/hooks/use-window-size/preview-use-window-size";
import { AppWindowMacIcon } from "lucide-react";

export const useWindowSizeCategory: SingleComponentCategoryType = {
  slug: "use-window-size",
  name: "Use Window Size",
  description: "A hook that allows you to track the size of the browser window",
  releaseDateCategory: new Date("2024-08-28"),
  icon: AppWindowMacIcon,
  previewCategory: {
    component: <PreviewUseWindowSize />,
    previewScale: 0.8,
  },
  component: {
    lastUpdatedDateComponent: new Date("2024-08-28"),
    sizePreview: "sm",

    isIframed: false,

    variantList: [
      {
        name: "Default Variant",
        component: <PreviewUseWindowSize />,
        slugComponentFile: "use-window-size",
        slugPreviewFile: "preview-use-window-size",
      },
    ],
  },
};
