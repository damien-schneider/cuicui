import { FingerprintIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";
export const authenticationCategory: CategoryMetaType = {
  name: "Authentication",
  description: "Authentication components",
  releaseDateCategory: new Date("2024-08-21"),
  icon: FingerprintIcon,
};

export default authenticationCategory;
