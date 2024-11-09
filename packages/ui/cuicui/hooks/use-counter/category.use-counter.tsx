import { CalculatorIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewUseCounter from "@/cuicui/hooks/use-counter/preview-use-counter";

export const useCounterCategory: SingleComponentCategoryType = {
	slug: "use-counter",
	name: "Use counter",
	description: "A hook that allows you to count easily",
	releaseDateCategory: new Date("2024-09-16"),
	icon: CalculatorIcon,
	previewCategory: {
		component: <PreviewUseCounter />,
		previewScale: 1,
	},
	component: {
		sizePreview: "lg",

		variantList: [
			{
				name: "variant 1",
				component: <PreviewUseCounter />,
				slugComponentFile: "use-counter",
				slugPreviewFile: "preview-use-counter",
			},
		],
	},
};
