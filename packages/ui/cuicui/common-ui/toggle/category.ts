import { ToggleLeftIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const toggleCategory: CategoryMetaType = {
  name: "Toggle",
  comingSoonCategory: true,
  description: "Toggle components",
  icon: ToggleLeftIcon,
  releaseDateCategory: new Date("2024-09-26"),
};

export default toggleCategory;
