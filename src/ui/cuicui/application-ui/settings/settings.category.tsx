import { SettingsIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import DynamicSettingsVariant1 from "#/src/ui/cuicui/application-ui/settings/dynamic-settings/variant1";

export const settingsCategory: CategoryType = {
  slug: "settings",
  name: "Settings",
  description: "Settings components with animations",
  releaseDateCategory: new Date("2024-06-30"),
  icon: SettingsIcon,
  previewCategory: {
    component: <DynamicSettingsVariant1 />,
    previewScale: 1.25,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "dynamic-settings",
      variantList: [
        {
          name: "Default",
          component: <DynamicSettingsVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "Dynamic Settings",
      description: "Settings with lots of micro-interactions and animations.",
      componentBadges: ["updated"],
      inspiration: "UI Labs",
      inspirationLink: "https://www.uilabs.dev/",
    },
  ],
};
