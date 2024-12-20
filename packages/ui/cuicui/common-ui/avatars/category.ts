import { CircleUserRoundIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const avatarsCategory: CategoryMetaType = {
  name: "Avatars",
  description: "Create simple avatars with different styles",
  isComingSoon: true,
  icon: CircleUserRoundIcon,
  latestUpdateDate: new Date(),
};

export default avatarsCategory;
