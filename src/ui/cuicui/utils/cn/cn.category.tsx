import type { CategoryType } from "#/src/lib/types/component";
import PreviewCn from "#/src/ui/cuicui/utils/cn/cn/preview-cn";
import { ChartNoAxesGanttIcon } from "lucide-react";

export const cnCategory: CategoryType = {
  name: "CN",
  slug: "cn",
  previewCategory: {
    previewScale: 0.5,
    component: <PreviewCn />,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "cn",
      isIframed: false,
      title: "Classnames more known by cn()",
      description: "A utility function to merge classnames in a clean way",
      releaseDateComponent: new Date("2024-09-26"),
      lastUpdatedDateComponent: new Date("2024-09-26"),
      variantList: [
        {
          name: "Default",
          slugPreviewFile: "preview-cn",
          slugComponentFile: "cn",
          component: <PreviewCn />,
        },
      ],
    },
  ],
  description: "",
  icon: ChartNoAxesGanttIcon,
  releaseDateCategory: new Date("2024-09-26"),
};
