import { BatteryCharging } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { PreviewUseBattery } from "#/src/ui/cuicui/hooks/use-battery/hook/preview-use-battery";

export const useBatteryCategory: CategoryType = {
  slug: "use-battery",
  name: "Use Battery",
  description: "A hook to get battery informations",
  releaseDateCategory: new Date("2024-09-16"),
  icon: BatteryCharging,
  previewCategory: {
    component: <PreviewUseBattery />,
    previewScale: 1,
  },
  componentList: [
    {
      rerenderButton: true,
      lastUpdatedDateComponent: new Date("2024-09-16"),
      sizePreview: "lg",
      slug: "hook",
      isIframed: false,
      title: "Use Battery",
      description: "A hook to get battery informations",
      variantList: [
        {
          name: "variant 1",
          component: <PreviewUseBattery />,
          slugComponentFile: "use-battery",
          slugPreviewFile: "preview-use-battery",
        },
      ],
    },
  ],
};
