import { BatteryCharging } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useBatteryCategory: CategoryMetaType = {
  name: "Use Battery",
  description: "A hook to get battery informations",
  releaseDateCategory: new Date("2024-09-16"),
  icon: BatteryCharging,
};

export default useBatteryCategory;
