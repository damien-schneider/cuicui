import { HourglassIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const sleepCategory: CategoryMetaType = {
  name: "Sleep",
  description: "A utility function to manage sleep",
  icon: HourglassIcon,
  releaseDateCategory: new Date("2024-09-26"),
};

export default sleepCategory;
