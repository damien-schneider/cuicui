import type { ComponentType } from "@/lib/types/component";
import PreviewGradient from "@/cuicui/marketing-ui/pricing-tables/gradient/preview.pricing-table-gradient";

export const gradientPricingTableComponent: ComponentType = {
	name: "Gradient Pricing Table",
	lastUpdatedDateComponent: new Date("2024-10-06"),
	description: "Simple 3 offers pricing page with gradient background.",
	sizePreview: "xl",
	slug: "gradient",
	isIframed: true,
	variantList: [
		{
			name: "Simple 3 offers pricing page",
			component: <PreviewGradient />,
			slugPreviewFile: "preview.pricing-table-gradient",
		},
	],
};
