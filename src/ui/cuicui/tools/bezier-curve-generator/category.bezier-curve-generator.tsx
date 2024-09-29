import type { PageCategoryType } from "#/src/lib/types/component";
import { PageBezierCurveGenerator } from "#/src/ui/cuicui/tools/bezier-curve-generator/page.bezier-curve-generator";
import { TangentIcon } from "lucide-react";

export const bezierCurveGeneratorCategory: PageCategoryType = {
  slug: "bezier-curve-generator",
  name: "Bezier Curve Generator",
  icon: TangentIcon,
  description:
    "Build forms with ease using the Form Builder tool. Based on shadCn components.",
  component: <PageBezierCurveGenerator />,
};
