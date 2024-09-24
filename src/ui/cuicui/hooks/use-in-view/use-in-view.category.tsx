import { ViewIcon } from "lucide-react";
import PreviewImageUseInView from "#/src/assets/components-preview/use-in-view.png";
import type { CategoryType } from "#/src/lib/types/component";
import { PreviewUseInView } from "#/src/ui/cuicui/hooks/use-in-view/hook/preview-in-view";
export const useInViewCategory: CategoryType = {
  slug: "use-in-view",
  name: "Use in View",
  description:
    "A hook that allows you to know if an element is in the viewport",
  releaseDateCategory: new Date("2024-08-28"),
  icon: ViewIcon,
  previewCategory: {
    component: <PreviewUseInView />,
    previewImage: PreviewImageUseInView,
    previewScale: 0.8,
  },
  componentList: [
    {
      lastUpdatedDateComponent: new Date("2024-08-28"),
      sizePreview: "lg",
      slug: "hook",
      isIframed: true,
      title: "Use in View",
      description:
        "A hook that allows you to know if an element is in the viewport",
      variantList: [
        {
          name: "variant 1",
          component: <PreviewUseInView />,
          slugComponentFile: "use-in-view",
          slugPreviewFile: "preview-in-view",
        },
      ],
    },
  ],
};
