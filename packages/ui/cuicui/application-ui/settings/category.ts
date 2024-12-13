import { SettingsIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import DynamicSettingsVariant1 from "@/cuicui/application-ui/settings/dynamic-settings/default.variant";

export const settingsCategory: CategoryType = {
  slug: "settings",
  name: "Settings",
  description: "Settings components with animations",
  releaseDateCategory: new Date("2024-06-30"),
  icon: SettingsIcon,
  componentList: [
    {
      sizePreview: "sm",
      slug: "dynamic-settings",
      variantList: [
        {
          name: "Default",
          component: DynamicSettingsVariant1,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Dynamic Settings",
      description: "Settings with lots of micro-interactions and animations.",
      componentBadges: ["updated"],
      inspiration: "UI Labs",
      inspirationLink: "https://www.uilabs.dev/",
    },
  ],
};

export default settingsCategory;
