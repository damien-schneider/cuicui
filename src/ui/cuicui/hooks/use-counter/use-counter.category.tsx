import { CalculatorIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import PreviewUseCounter from "#/src/ui/cuicui/hooks/use-counter/hook/preview-use-counter";

export const useCounterCategory: CategoryType = {
  slug: "use-counter",
  name: "Use counter",
  description: "A hook that allows you to count easily",
  releaseDateCategory: new Date("2024-09-16"),
  icon: CalculatorIcon,
  previewCategory: {
    component: <PreviewUseCounter />,
    previewScale: 1,
  },
  componentList: [
    {
      lastUpdatedDateComponent: new Date("2024-09-16"),
      sizePreview: "lg",
      slug: "hook",
      isIframed: false,
      title: "Use counter",
      description: "A hook that allows you to count easily",
      variantList: [
        {
          name: "variant 1",
          component: <PreviewUseCounter />,
          slugComponentFile: "use-counter",
          slugPreviewFile: "preview-use-counter",
        },
      ],
    },
  ],
};
