import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import PreviewSleep from "#/src/ui/cuicui/utils/sleep/preview-sleep";
import { HourglassIcon } from "lucide-react";

export const sleepCategory: SingleComponentCategoryType = {
  name: "Sleep",
  slug: "sleep",
  previewCategory: {
    previewScale: 0.5,
    component: <PreviewSleep />,
  },
  component: {
    sizePreview: "sm",

    releaseDateComponent: new Date("2024-09-26"),
    lastUpdatedDateComponent: new Date("2024-09-26"),
    variantList: [
      {
        name: "Default",
        slugPreviewFile: "preview-sleep",
        slugComponentFile: "sleep",
        component: <PreviewSleep />,
      },
    ],
  },
  description: "A utility function to manage sleep",
  icon: HourglassIcon,
  releaseDateCategory: new Date("2024-09-26"),
};
