import { ServerCrashIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const catchErrorCategory: CategoryMetaType = {
  name: "CatchError",
  description:
    "A utility function to catch and handle errors effectively in a clean way",
  icon: ServerCrashIcon,
  releaseDateCategory: new Date("2024-09-26"),
};

export default catchErrorCategory;
