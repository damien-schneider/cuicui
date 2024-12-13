import { ToggleLeftIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";

export const toggleCategory: CategoryType = {
  name: "Toggle",
  slug: "toggle",
  comingSoonCategory: true,
  description: "",
  icon: ToggleLeftIcon,
  releaseDateCategory: new Date("2024-09-26"),
  componentList: null,
};

export default toggleCategory;
