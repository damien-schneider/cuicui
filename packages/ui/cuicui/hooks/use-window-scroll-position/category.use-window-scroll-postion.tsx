import { ScrollIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseWindowScrollPosition } from "@/cuicui/hooks/use-window-scroll-position/preview-use-window-scroll-position";

export const useWindowScrollPositionCategory: SingleComponentCategoryType = {
  slug: "use-window-scroll-position",
  name: "Use Window Scroll Position",
  description: "A hook that allows you to track the window's scroll position",
  releaseDateCategory: new Date("2024-09-28"),
  icon: ScrollIcon,
  previewCategory: {
    component: <PreviewUseWindowScrollPosition />,
    previewScale: 0.8,
  },
  component: {
    sizePreview: "sm",

    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseWindowScrollPosition />,
        slugComponentFile: "use-window-scroll-position",
        slugPreviewFile: "preview-use-window-scroll-position",
      },
    ],
  },
};
