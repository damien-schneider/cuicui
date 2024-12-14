import type { CategoryMetaType } from "@/lib/types/component";
import { PipetteIcon } from "lucide-react";

export const colorPickerCategory: CategoryMetaType = {
  name: "Color Picker",
  description: "A collection of color pickers.",
  icon: PipetteIcon,
  releaseDateCategory: new Date("2021-11-28"),
};

export default colorPickerCategory;
