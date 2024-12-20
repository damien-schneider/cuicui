import { PaletteIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const ColorConverterCategory: CategoryMetaType = {
  name: "Color Converter",
  icon: PaletteIcon,
  description:
    "Convert standard colors to tailwind classes equivalent. Convert seamlessly HEX to RGB, HSL and more or convert from tailwind classes to HEX, RGB, HSL.",
  // component: <PageColorConverter />,
  latestUpdateDate: new Date("2024-09-28"),
};
