import type { PageSectionType } from "#/src/lib/types/component";
import { FormBuilderCategory } from "#/src/ui/cuicui/tools/form-builder/category.form-builder";
import { ColorConverterCategory } from "#/src/ui/cuicui/tools/color-converter/category.color-converter";
import { bezierCurveGeneratorCategory } from "#/src/ui/cuicui/tools/bezier-curve-generator/category.bezier-curve-generator";

export const toolsSection: PageSectionType = {
  type: "page",
  name: "Tools",
  slug: "tools",
  description:
    "Tools to help you build your website, designs, UI & UX components, and animations. Everythin you need faster, all in one place. Just copy paste.",
  pageList: [
    bezierCurveGeneratorCategory,
    ColorConverterCategory,
    FormBuilderCategory,
  ],
};
