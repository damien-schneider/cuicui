import { BatteryChargingIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const batteryCategory: CategoryMetaType = {
  name: "Battery",
  description: "Battery components",
  releaseDateCategory: new Date("2024-08-21"),
  icon: BatteryChargingIcon,
};

export default batteryCategory;
