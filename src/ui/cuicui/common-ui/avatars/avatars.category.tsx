import type { CategoryType } from "#/src/lib/types/component";
import { CircleUserRoundIcon } from "lucide-react";

export const avatarsCategory: CategoryType = {
  slug: "avatars",
  name: "Avatars",
  description: "Create simple avatars with different styles",
  comingSoonCategory: true,
  icon: CircleUserRoundIcon,
  releaseDateCategory: new Date(),
  componentList: null,
};
