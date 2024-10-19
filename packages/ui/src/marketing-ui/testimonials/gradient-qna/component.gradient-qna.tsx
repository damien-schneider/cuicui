import type { ComponentType } from "@/lib/types/component";
import CustomChevronStyleGradientQnA from "@/src/marketing-ui/testimonials/gradient-qna/custom-chevron-style";
import DoubleContainerGradientQna from "@/src/marketing-ui/testimonials/gradient-qna/double-container";
import SimpleContainerGradientQna from "@/src/marketing-ui/testimonials/gradient-qna/simple-container";

export const gradientQnaComponent: ComponentType = {
	lastUpdatedDateComponent: new Date("2024-07-17"),
	sizePreview: "lg",
	slug: "gradient-qna",
	name: "Gradient Q&A",
	description:
		"A simple marquee component with two variants, horizontal and vertical.",
	variantList: [
		{
			name: "Double Container Q&A",
			component: <DoubleContainerGradientQna />,
			slugPreviewFile: "double-container",
		},
		{
			name: "Simple Container Q&A",
			component: <SimpleContainerGradientQna />,
			slugPreviewFile: "simple-container",
		},
		{
			name: "Custom SVG animation",
			component: <CustomChevronStyleGradientQnA />,
			slugPreviewFile: "custom-chevron-style",
		},
	],
	componentBadges: ["no-js"],
};
