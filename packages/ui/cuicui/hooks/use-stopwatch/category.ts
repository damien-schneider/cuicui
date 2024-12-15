import { WatchIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useStopwatchCategory: CategoryMetaType = {
  name: "Use Stopwatch",
  description:
    "A hook that provides a stopwatch functionality to your application",
  releaseDateCategory: new Date("2024-09-28"),
  icon: WatchIcon,
};

export default useStopwatchCategory;
