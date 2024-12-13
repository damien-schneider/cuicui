import { SunMoonIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { ThemeSwitcherButton } from "@/cuicui/application-ui/theme/theme-switcher/theme-switcher-button.variant";

export const themeCategory: CategoryType = {
  slug: "theme",
  name: "Theme",
  description: "Theme components",
  releaseDateCategory: new Date("2024-08-29"),
  icon: SunMoonIcon,
  componentList: [
    {
      slug: "theme-switcher",
      name: "Theme Switcher",
      description: "A theme switcher button.",

      sizePreview: "xs",
      variantList: [
        {
          name: "Default",
          component: ThemeSwitcherButton,
          slugPreviewFile: "theme-switcher-button",
        },
      ],
    },
  ],
};

export default themeCategory;
