import { PaletteIcon } from "lucide-react";
import type { PageCategoryType } from "@/lib/types/component";
import { PageColorConverter } from "@/cuicui/tools/color-converter/page.color-converter";

export const ColorConverterCategory: PageCategoryType = {
	name: "Color Converter",
	slug: "color-converter",
	icon: PaletteIcon,
	description:
		"Convert standard colors to tailwind classes equivalent. Convert seamlessly HEX to RGB, HSL and more or convert from tailwind classes to HEX, RGB, HSL.",
	component: <PageColorConverter />,
};
