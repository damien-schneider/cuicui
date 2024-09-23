import { ListOrderedIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { StepWithStickyColorVariant1 } from "#/src/ui/cuicui/application-ui/static-steppers/code/variant1";

export const staticSteppersCategory: CategoryType = {
  slug: "static-steppers",
  name: "Static Steppers",
  description: "Components to display a list of steps",
  releaseDateCategory: new Date("2024-08-01"),
  icon: ListOrderedIcon,
  previewCategory: {
    component: <StepWithStickyColorVariant1 />,
    previewScale: 0.75,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "code",
      variantList: [
        {
          name: "Default",
          component: <StepWithStickyColorVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "Simple static stepper",
      description:
        "A simple static stepper component to display a list of steps.",
      componentBadges: ["updated"],
      inspiration: "Hooks Scriptkavi manual installation",
      inspirationLink: "https://hooks.scriptkavi.com/docs/hooks/battery",
    },
  ],
};
