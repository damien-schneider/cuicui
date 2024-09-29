import type { PageCategoryType } from "#/src/lib/types/component";
import { PageColorConverter } from "#/src/ui/cuicui/tools/color-converter/page.color-converter";
import { PaletteIcon } from "lucide-react";

export const ColorConverterCategory: PageCategoryType = {
  name: "Color Converter",
  slug: "color-converter",
  icon: PaletteIcon,
  description:
    "Convert standard colors to tailwind classes equivalent. Convert seamlessly HEX to RGB, HSL and more or convert from tailwind classes to HEX, RGB, HSL.",
  component: <PageColorConverter />,
};
