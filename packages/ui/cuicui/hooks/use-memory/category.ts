import type { CategoryMetaType } from "@/lib/types/component";
import { HardDriveIcon } from "lucide-react";

export const category: CategoryMetaType = {
  name: "Use Memory",
  description: "A hook to retrieve memory information",
  icon: HardDriveIcon,
  latestUpdateDate: new Date("2025-02-08"),
};

export default category;
