import { AppWindowMacIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseWindowSize } from "@/cuicui/hooks/use-window-size/preview-use-window-size";

export const useWindowSizeCategory: SingleComponentCategoryType = {
  slug: "use-window-size",
  name: "Use Window Size",
  description: "A hook that allows you to track the size of the browser window",
  releaseDateCategory: new Date("2024-08-28"),
  icon: AppWindowMacIcon,
  component: {
    sizePreview: "sm",
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
