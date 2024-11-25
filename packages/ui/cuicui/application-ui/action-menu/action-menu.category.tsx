import { StretchHorizontalIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";

export const actionMenuCategory: CategoryType = {
  name: "Action Menu",
  slug: "action-menu",
  description: "Create action menus to display actions in a dropdown",
  releaseDateCategory: new Date("2024-07-29"),
  icon: StretchHorizontalIcon,
  comingSoonCategory: true,
  componentList: null,
  // componentList: [advancedBottomActionMenuComponent],
};
