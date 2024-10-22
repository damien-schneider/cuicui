import {
	BarChart2Icon,
	BookOpenTextIcon,
	GalleryHorizontalIcon,
	SparkleIcon,
} from "lucide-react";

import type { CategoryType } from "@/lib/types/component";
import { CarouselCylindricalVariant1 } from "@/cuicui/marketing-ui/carousels/cylindric-3d-carousel/variant1";
import { SimpleCarouselPreview } from "@/cuicui/marketing-ui/carousels/simple-carousel/simple-carousel-preview";
import { AnimatedCardVariant1 } from "@/cuicui/marketing-ui/features/animated-cards/variant1";
import { Variant1FeatureFourImages } from "@/cuicui/marketing-ui/features/feature-four-images/variant1";
import { Variant2FeatureFourImages } from "@/cuicui/marketing-ui/features/feature-four-images/variant2";
import AnimatedCounterPreview from "@/cuicui/marketing-ui/statistics/animated-counter/animated-counter-preview";
import { AnimatedNumberVariant1 } from "@/cuicui/marketing-ui/statistics/animated-on-scroll/variant1";
import IncreaseToValueVariant1 from "@/cuicui/marketing-ui/statistics/increase-to-value/variant1";
import { gradientQnaComponent } from "@/cuicui/marketing-ui/testimonials/gradient-qna/component.gradient-qna";
import MarqueeVariant1 from "@/cuicui/marketing-ui/testimonials/marquee/variant1";
import MarqueeVariant2 from "@/cuicui/marketing-ui/testimonials/marquee/variant2";
import { TestimonialsVariant1 } from "@/cuicui/marketing-ui/testimonials/testimonials-component/variant1";
import { pricingTablesCategory } from "@/cuicui/marketing-ui/pricing-tables/category.pricing-tables";

export const marketingUiComponentList: CategoryType[] = [
	{
		slug: "carousels",
		name: "Carousels",
		description: "Showcase your product testimonials with style",
		releaseDateCategory: new Date("2024-08-10"),
		icon: GalleryHorizontalIcon,
		previewCategory: {
			component: <SimpleCarouselPreview />,
			previewScale: 0.5,
		},
		componentList: [
			{
				name: "Simple Carousel",
				description:
					"A simple carousel that allows you to navigate through multiple images or products.",
				sizePreview: "md",
				slug: "simple-carousel",
				lastUpdatedDateComponent: new Date("2024-09-10"),
				isIframed: false,
				variantList: [
					{
						name: "Simple Carousel",
						component: <SimpleCarouselPreview />,
						slugPreviewFile: "simple-carousel-preview",
						slugComponentFile: "simple-carousel",
					},
				],
			},
			{
				name: "Cylindric 3D Carousel",
				lastUpdatedDateComponent: new Date("2024-08-10"),
				description:
					"A 3D carousel that rotates in a cylindrical way. It's perfect for showcasing multiple images or products.",
				sizePreview: "md",
				slug: "cylindric-3d-carousel",
				variantList: [
					{
						name: "Cylindrical Carousel",
						component: <CarouselCylindricalVariant1 />,
						slugPreviewFile: "variant1",
					},
				],
			},
		],
	},
	{
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
	},
	pricingTablesCategory,
	{
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
				description:
					"Show numbers that animate when they appear on the screen.",
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
				description:
					"Show numbers that animate when they appear on the screen.",
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
	},
	{
		slug: "testimonials",
		name: "Testimonials",
		description: "Showcase your product testimonials with style",
		releaseDateCategory: new Date("2024-07-17"),
		icon: BookOpenTextIcon,
		previewCategory: {
			component: <MarqueeVariant1 />,
			previewScale: 0.75,
		},
		componentList: [
			{
				lastUpdatedDateComponent: new Date("2024-07-17"),
				sizePreview: "md",
				slug: "testimonials-component",
				name: "Testimonials",
				description: "A simple testimonials component with a slider on click",
				variantList: [
					{
						name: "Testimonials Slider",
						slugPreviewFile: "variant1",
						component: <TestimonialsVariant1 />,
					},
				],
			},
			{
				lastUpdatedDateComponent: new Date("2024-07-17"),
				sizePreview: "sm",
				slug: "marquee",
				name: "Marquee",
				description:
					"A simple marquee component with two variants, horizontal and vertical.",
				variantList: [
					{
						name: "Horizontal Marquee",
						component: <MarqueeVariant1 />,
						slugPreviewFile: "variant1",
					},
					{
						name: "Vertical Marquee",
						component: <MarqueeVariant2 />,
						slugPreviewFile: "variant2",
					},
				],
			},
			gradientQnaComponent,
		],
	},
];
