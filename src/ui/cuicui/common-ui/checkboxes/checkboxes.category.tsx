import type { CategoryType } from "#/src/lib/types/component";
import SimpleCheckboxPreview from "#/src/ui/cuicui/common-ui/checkboxes/simple-checkbox/simple-checkbox-preview";
import { CheckSquare2Icon } from "lucide-react";

export const checkboxesCategory: CategoryType = {
  slug: "checkboxes",
  name: "Checkboxes",
  description: "Checkboxes with various styles and interactions",
  releaseDateCategory: new Date("2024-08-31"),
  icon: CheckSquare2Icon,
  previewCategory: {
    component: <SimpleCheckboxPreview />,
    previewScale: 2,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "simple-checkbox",
      variantList: [
        {
          name: "Default",
          component: <SimpleCheckboxPreview />,
          slugPreviewFile: "simple-checkbox-preview",
          slugComponentFile: "simple-checkbox",
        },
      ],
      title: "Simple checkbox",
      description:
        "A simple checkbox that can be used in any project with simple artistic style.",
      isIframed: false,
    },
  ],
};