import { KeyboardIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useKeyPressCategory: CategoryMetaType = {
  name: "Use Key Press",
  description:
    "A hook that allows you to know if an element is in the viewport",
  releaseDateCategory: new Date("2024-09-28"),
  icon: KeyboardIcon,
};

export default useKeyPressCategory;
