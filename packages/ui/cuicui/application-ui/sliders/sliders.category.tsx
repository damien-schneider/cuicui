import { SlidersHorizontalIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { ElasticSliderVariant1 } from "@/cuicui/application-ui/sliders/elastic-slider/variant1";
import SimpleModernSlider from "@/cuicui/application-ui/sliders/simple-modern-slider/simple-modern-slider";
import SimpleModernSliderWithMax from "@/cuicui/application-ui/sliders/simple-modern-slider/simple-modern-slider-with-max";

export const slidersCategory: CategoryType = {
	slug: "sliders",
	name: "Sliders",
	description: "Slider components with animations",
	releaseDateCategory: new Date("2024-08-10"),
	icon: SlidersHorizontalIcon,
	previewCategory: {
		component: <ElasticSliderVariant1 />,
		previewScale: 1,
	},
	componentList: [
		{
			slug: "elastic-slider",
			name: "Elastic Slider",
			description: "Smooth slider with scale effect.",
			sizePreview: "xs",
			variantList: [
				{
					name: "Default",
					component: <ElasticSliderVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
			inspiration: "Build UI",
			inspirationLink: "https://buildui.com/recipes/elastic-slider",
			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
		{
			slug: "simple-modern-slider",
			name: "Simple Modern Slider",
			description: "Simple modern slider with micro animations.",
			sizePreview: "xs",
			variantList: [
				{
					name: "Smooth",
					component: <SimpleModernSlider />,
					slugPreviewFile: "simple-modern-slider",
				},
				{
					name: "Min & max steps",
					component: <SimpleModernSliderWithMax />,
					slugPreviewFile: "simple-modern-slider-with-max",
				},
			],
			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
	],
};
