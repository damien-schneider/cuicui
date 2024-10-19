import { TangentIcon } from "lucide-react";
import type { PageCategoryType } from "@/lib/types/component";
import { PageBezierCurveGenerator } from "@/src/tools/bezier-curve-generator/page.bezier-curve-generator";

export const bezierCurveGeneratorCategory: PageCategoryType = {
	slug: "bezier-curve-generator",
	name: "Bezier Curve Generator",
	icon: TangentIcon,
	description:
		"Build forms with ease using the Form Builder tool. Based on shadCn components.",
	component: <PageBezierCurveGenerator />,
};
