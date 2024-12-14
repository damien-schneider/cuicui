import { ChartNoAxesGanttIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewCn from "@/cuicui/utils/cn/cn/default.variant";

export const cnCategory: SingleComponentCategoryType = {
  name: "ClassNames",
  slug: "cn",
  component: {
    sizePreview: "sm",
    variantList: [
      {
        name: "Default",
        slugPreviewFile: "preview.cn",
        slugComponentFile: "cn",
        component: PreviewCn,
      },
    ],
  },
  description: "A utility function to merge classnames in a clean way",
  icon: ChartNoAxesGanttIcon,
  releaseDateCategory: new Date("2024-09-26"),
};

export default cnCategory;
