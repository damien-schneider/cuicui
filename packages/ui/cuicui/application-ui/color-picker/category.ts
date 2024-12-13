import arcColorPickerComponent from "@/cuicui/application-ui/color-picker/arc-color-picker/component";
import type { CategoryType } from "@/lib/types/component";
import { PipetteIcon } from "lucide-react";

export const colorPickerCategory: CategoryType = {
  slug: "color-picker",
  name: "Color Picker",
  description: "A collection of color pickers.",
  icon: PipetteIcon,
  releaseDateCategory: new Date("2021-11-28"),
  componentList: [arcColorPickerComponent],
};

export default colorPickerCategory;
