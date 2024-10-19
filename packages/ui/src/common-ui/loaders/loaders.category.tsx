import { LoaderIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { CircularBarsSpinnerLoader } from "@/src/common-ui/loaders/spinner-loader/circular-bars-spinner-loader";
import { DualRingSpinnerLoader } from "@/src/common-ui/loaders/spinner-loader/dual-ring-spinner-loader";
import { SpinnerLoader } from "@/src/common-ui/loaders/spinner-loader/spinner-loader";
import NineDotGridRandom from "@/src/common-ui/loaders/three-dot-simple-loader/nine-dot-grid-random";
import ThreeDotLoaderGrowing from "@/src/common-ui/loaders/three-dot-simple-loader/three-dot-loader-growing";
import { ThreeDotSimpleLoader } from "@/src/common-ui/loaders/three-dot-simple-loader/three-dot-simple-loader";

export const loadersCategory: CategoryType = {
	slug: "loaders",
	name: "Loaders",
	description: "Loaders with various styles and effects",
	releaseDateCategory: new Date("2024-08-31"),
	icon: LoaderIcon,
	previewCategory: {
		component: <ThreeDotSimpleLoader />,
		previewScale: 1.5,
	},
	componentList: [
		{
			sizePreview: "sm",
			slug: "three-dot-simple-loader",
			variantList: [
				{
					name: "3 Bouncing",
					component: <ThreeDotSimpleLoader />,
					slugPreviewFile: "three-dot-simple-loader",
				},
				{
					name: "3 Growing",
					component: <ThreeDotLoaderGrowing />,
					slugPreviewFile: "three-dot-loader-growing",
				},
				{
					name: "9 Random grid",
					component: <NineDotGridRandom />,
					slugPreviewFile: "three-dot-loader-growing",
				},
			],
			name: "Three Dot Simple Loader",
			description: "A simple loader with three dots that bounce up and down.",
			isIframed: false,
			lastUpdatedDateComponent: new Date("2024-08-31"),
		},
		{
			sizePreview: "sm",
			slug: "spinner-loader",
			variantList: [
				{
					name: "Spinner",
					component: <SpinnerLoader />,
					slugPreviewFile: "spinner-loader",
				},
				{
					name: "Circular Bars",
					component: <CircularBarsSpinnerLoader />,
					slugPreviewFile: "circular-bars-spinner-loader",
				},
				{
					name: "Dual Ring",
					component: <DualRingSpinnerLoader />,
					slugPreviewFile: "dual-ring-spinner-loader",
				},
			],
			name: "Spinner Loader",
			description: "A simple circular loader",
			isIframed: false,
			lastUpdatedDateComponent: new Date("2024-08-31"),
		},
	],
};
