import AnimatedCounterPreview from "@/cuicui/marketing-ui/statistics/animated-counter/animated-counter-preview";
import { AnimatedNumberVariant1 } from "@/cuicui/marketing-ui/statistics/animated-on-scroll/variant1";
import IncreaseToValueVariant1 from "@/cuicui/marketing-ui/statistics/increase-to-value/variant1";
import type { CategoryType } from "@/lib/types/component";
import { BarChart2Icon } from "lucide-react";

export const statisticsCategory: CategoryType = {
	slug: "statistics",
	name: "Statistics",
	description: "Showcase your product statistics with style",
	releaseDateCategory: new Date("2024-08-11"),
	icon: BarChart2Icon,
	previewCategory: {
		component: <AnimatedNumberVariant1 />,
		previewScale: 0.5,
	},
	componentList: [
		{
			lastUpdatedDateComponent: new Date("2024-08-11"),
			sizePreview: "sm",
			slug: "animated-on-scroll",
			isIframed: true,
			rerenderButton: true,
			name: "Animated numbers",
			description: "Show numbers that animate when they appear on the screen.",
			variantList: [
				{
					name: "Animated Number",
					component: <AnimatedNumberVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
		},
		{
			lastUpdatedDateComponent: new Date("2024-08-11"),
			sizePreview: "sm",
			slug: "increase-to-value",
			rerenderButton: true,
			name: "Increase to value",
			description: "Show numbers that animate when they appear on the screen.",
			variantList: [
				{
					name: "Increase To Value",
					component: <IncreaseToValueVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
		},
		{
			lastUpdatedDateComponent: new Date("2024-09-10"),
			sizePreview: "sm",
			slug: "animated-counter",
			rerenderButton: true,
			name: "Animated Counter",
			description: "Show numbers that animate automatically when updated.",
			variantList: [
				{
					name: "Increase To Value",
					component: <AnimatedCounterPreview />,
					slugPreviewFile: "animated-counter-preview",
					slugComponentFile: "animated-counter",
				},
			],
			inspiration: "Build UI",
			inspirationLink: "https://buildui.com/recipes/animated-counter",
		},
	],
};
