import type { CategoryType } from "#/src/lib/types/component";
import { ToggleLeftIcon } from "lucide-react";

export const toggleCategory: CategoryType = {
  name: "Toggle",
  slug: "toggle",
  comingSoonCategory: true,
  description: "",
  icon: ToggleLeftIcon,
  releaseDateCategory: new Date("2024-09-26"),
  componentList: null,
};
