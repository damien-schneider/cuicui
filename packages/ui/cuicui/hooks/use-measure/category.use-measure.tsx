import { RulerIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseMeasure } from "@/cuicui/hooks/use-measure/preview.use-measure";

export const useMeasureCategory: SingleComponentCategoryType = {
  slug: "use-measure",
  name: "Use Measure",
  description:
    "A hook that allows you to measure the size of an element in your application",
  releaseDateCategory: new Date("2024-10-15"),
  icon: RulerIcon,
  component: {
    sizePreview: "sm",

    variantList: [
      {
        name: "variant 1",
        component: <PreviewUseMeasure />,
        slugComponentFile: "use-measure",
        slugPreviewFile: "preview-use-measure",
      },
    ],
  },
};
