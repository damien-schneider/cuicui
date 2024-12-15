import { Scroll } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useAutoScrollCategory: CategoryMetaType = {
  name: "Use Auto Scroll",
  description: "A hook to automatically scroll a list",
  releaseDateCategory: new Date("2024-09-16"),
  icon: Scroll,
};

export default useAutoScrollCategory;
