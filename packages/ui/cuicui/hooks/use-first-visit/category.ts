import { TelescopeIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useFirstVisitCategory: CategoryMetaType = {
  name: "Use First Visit",
  description:
    "A hook that provides a first visit functionality to your application",
  releaseDateCategory: new Date("2024-10-06"),
  icon: TelescopeIcon,
};

export default useFirstVisitCategory;
