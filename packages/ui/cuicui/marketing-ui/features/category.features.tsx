import { AnimatedCardVariant1 } from "@/cuicui/marketing-ui/features/animated-cards/variant1";
import { Variant1FeatureFourImages } from "@/cuicui/marketing-ui/features/feature-four-images/variant1";
import { Variant2FeatureFourImages } from "@/cuicui/marketing-ui/features/feature-four-images/variant2";
import type { CategoryType } from "@/lib/types/component";
import { SparkleIcon } from "lucide-react";

export const featuresCategory: CategoryType = {
	slug: "features",
	name: "Features",
	description: "Showcase your product features with style",
	releaseDateCategory: new Date("2024-06-17"),
	icon: SparkleIcon,
	previewCategory: {
		component: <AnimatedCardVariant1 />,
		previewScale: 0.8,
	},
	componentList: [
		{
			name: "Feature Four Images",

			lastUpdatedDateComponent: new Date("2024-06-17"),
			description:
				"An auto-scrolling feature section with four images and text. It could be also used with videos or other content. Perfect to shocase in details multiple features of a product or service.",
			sizePreview: "md",
			slug: "feature-four-images",
			isIframed: true,
			variantList: [
				{
					name: "Sober colors",
					slugPreviewFile: "variant1",
					component: <Variant1FeatureFourImages />,
				},
				{
					name: "Less animations with colors",
					slugPreviewFile: "variant2",
					component: <Variant2FeatureFourImages />,
				},
			],
		},
		{
			name: "Simple feature cards",
			lastUpdatedDateComponent: new Date("2024-06-17"),
			description:
				"Simple feature cards with icons, text, and buttons. Perfect for micro-interactions and lists of features.",
			sizePreview: "sm",
			slug: "animated-cards",
			inspiration: "Inspiration from UI Labs",
			inspirationLink: "https://www.uilabs.dev/",
			variantList: [
				{
					name: "Simple Feature Cards",
					component: <AnimatedCardVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
		},
	],
};
