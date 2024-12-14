import { ChartNoAxesGanttIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewCatchError } from "@/cuicui/utils/catch-error/catch-error/catch-error.variant";

export const catchErrorCategory: SingleComponentCategoryType = {
  name: "CatchError",
  slug: "catch-error",
  component: {
    sizePreview: "sm",
    variantList: [
      {
        name: "Default",
        slugPreviewFile: "preview.catch-error",
        slugComponentFile: "catch-error",
        component: PreviewCatchError,
      },
    ],
  },
  description:
    "A utility function to catch and handle errors effectively in a clean way",
  icon: ChartNoAxesGanttIcon,
  releaseDateCategory: new Date("2024-09-26"),
};

export default catchErrorCategory;
