import { PanelTopOpenIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { macOsDropdownComponent } from "@/cuicui/application-ui/dropdown-menu/mac-os-dropdown/component";

export const dropdownMenuCategory: CategoryType = {
  slug: "dropdown-menu",
  name: "Dropdown Menu",
  description: "Dropdown menu components",
  releaseDateCategory: new Date("2024-11-23"),
  icon: PanelTopOpenIcon,
  componentList: [macOsDropdownComponent],
};

export default dropdownMenuCategory;
