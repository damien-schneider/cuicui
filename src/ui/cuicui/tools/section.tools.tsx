import { PencilRulerIcon } from "lucide-react";
import type { PageSectionType } from "#/src/lib/types/component";
import { bezierCurveGeneratorCategory } from "#/src/ui/cuicui/tools/bezier-curve-generator/category.bezier-curve-generator";
import { ColorConverterCategory } from "#/src/ui/cuicui/tools/color-converter/category.color-converter";
import { FormBuilderCategory } from "#/src/ui/cuicui/tools/form-builder/category.form-builder";
import { noiseGeneratorCategory } from "#/src/ui/cuicui/tools/noise-creator/category.noise-generator";
import { cssSelectorsCategory } from "#/src/ui/cuicui/tools/css-selectors/category.css-selectors";

export const toolsSection: PageSectionType = {
  type: "page",
  name: "Tools",
  slug: "tools",
  description:
    "Tools to help you build your website, designs, UI & UX components, and animations. Everythin you need faster, all in one place. Just copy paste.",
  icon: PencilRulerIcon,
  pageList: [
    bezierCurveGeneratorCategory,
    ColorConverterCategory,
    cssSelectorsCategory,
    FormBuilderCategory,
    noiseGeneratorCategory,
  ],
};
