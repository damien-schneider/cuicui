import { ScrollIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useWindowScrollPositionCategory: CategoryMetaType = {
  name: "Use Window Scroll Position",
  description: "A hook that allows you to track the window's scroll position",
  releaseDateCategory: new Date("2024-09-28"),
  icon: ScrollIcon,
};

export default useWindowScrollPositionCategory;
