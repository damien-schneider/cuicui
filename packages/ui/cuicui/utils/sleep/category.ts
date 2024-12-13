import { HourglassIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewSleep from "@/cuicui/utils/sleep/preview-sleep";

export const sleepCategory: SingleComponentCategoryType = {
  name: "Sleep",
  slug: "sleep",
  component: {
    sizePreview: "sm",

    variantList: [
      {
        name: "Default",
        slugPreviewFile: "preview-sleep",
        slugComponentFile: "sleep",
        component: PreviewSleep,
      },
    ],
  },
  description: "A utility function to manage sleep",
  icon: HourglassIcon,
  releaseDateCategory: new Date("2024-09-26"),
};

export default sleepCategory;
