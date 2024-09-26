import type { CategoryType } from "#/src/lib/types/component";
import PreviewSleep from "#/src/ui/cuicui/utils/sleep/sleep/preview-sleep";
import { HourglassIcon } from "lucide-react";

export const sleepCategory: CategoryType = {
  name: "Sleep",
  slug: "sleep",
  previewCategory: {
    previewScale: 0.5,
    component: <PreviewSleep />,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "sleep",
      title: "Sleep",
      description: "A utility function to manage sleep",
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
  ],
  description: "",
  icon: HourglassIcon,
  releaseDateCategory: new Date("2024-09-26"),
};
