import { ViewIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseThrottle } from "#/src/ui/cuicui/hooks/use-throttle/preview-use-throttle";

export const useThrottleCategory: SingleComponentCategoryType = {
  slug: "use-throttle",
  name: "Use Throttle",
  description:
    "A hook that throttles the execution of a function, limiting how often it can be invoked",
  releaseDateCategory: new Date("2024-09-28"),
  icon: ViewIcon,
  previewCategory: {
    component: <PreviewUseThrottle />,
    previewScale: 0.8,
  },
  component: {
    lastUpdatedDateComponent: new Date("2024-09-28"),
    sizePreview: "sm",
    isIframed: false,
    variantList: [
      {
        name: "default variant",
        component: <PreviewUseThrottle />,
        slugComponentFile: "use-throttle",
        slugPreviewFile: "preview-use-throttle",
      },
    ],
  },
};
