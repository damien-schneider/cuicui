import { CircleUserRoundIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";

export const avatarsCategory: CategoryType = {
  slug: "avatars",
  name: "Avatars",
  description: "Create simple avatars with different styles",
  comingSoonCategory: true,
  icon: CircleUserRoundIcon,
  releaseDateCategory: new Date(),
  componentList: null,
};
