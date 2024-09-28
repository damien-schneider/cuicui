import { ViewIcon } from "lucide-react";
import PreviewImageUseInView from "#/src/assets/components-preview/use-in-view.png";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseInView } from "#/src/ui/cuicui/hooks/use-in-view/preview-in-view";
export const useInViewCategory: SingleComponentCategoryType = {
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
  component: {
    lastUpdatedDateComponent: new Date("2024-08-28"),
    sizePreview: "lg",

    isIframed: true,

    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseInView />,
        slugComponentFile: "use-in-view",
        slugPreviewFile: "preview-in-view",
      },
    ],
  },
};
