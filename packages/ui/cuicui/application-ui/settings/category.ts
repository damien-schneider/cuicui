import { SettingsIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const settingsCategory: CategoryMetaType = {
  name: "Settings",
  description: "Settings components with animations",
  releaseDateCategory: new Date("2024-06-30"),
  icon: SettingsIcon,
};

export default settingsCategory;
