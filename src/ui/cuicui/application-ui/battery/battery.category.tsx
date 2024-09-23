import { BatteryChargingIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { PreviewBatteryIndicator } from "#/src/ui/cuicui/application-ui/battery/battery-indicator/preview-battery-indicator";

export const batteryCategory: CategoryType = {
  slug: "battery",
  name: "Battery",
  description: "Battery components",
  releaseDateCategory: new Date("2024-08-21"),
  icon: BatteryChargingIcon,
  previewCategory: {
    component: <PreviewBatteryIndicator />,
    previewScale: 1,
  },
  componentList: [
    {
      isIframed: false,
      sizePreview: "sm",
      slug: "battery-indicator",
      variantList: [
        {
          name: "Battery Indicator",
          component: <PreviewBatteryIndicator />,
          slugPreviewFile: "preview-battery-indicator",
          slugComponentFile: "battery-indicator",
        },
      ],
      title: "Battery Indicator",
      description: "A battery indicator component.",
    },
  ],
};
