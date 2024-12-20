import { MapIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useClickOutsideCategory: CategoryMetaType = {
  name: "Use Click Outside",
  description:
    "A React hook that allows you to detect clicks outside of a specified element.",
  latestUpdateDate: new Date("2024-10-15"),
  icon: MapIcon,
};

export default useClickOutsideCategory;
