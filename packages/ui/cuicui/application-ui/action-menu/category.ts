import { StretchHorizontalIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const actionMenuCategory: CategoryMetaType = {
  name: "Action Menu",
  description: "Create action menus to display actions in a dropdown",
  releaseDateCategory: new Date("2024-07-29"),
  icon: StretchHorizontalIcon,
  comingSoonCategory: true,
};

export default actionMenuCategory;
