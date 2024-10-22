import type { ComponentType } from "@/lib/types/component";
import ManyOffersVariant1 from "@/cuicui/marketing-ui/pricing-tables/many-offers/preview.artlist-inspired";

export const artlistInspiredPricingTableComponent: ComponentType = {
	lastUpdatedDateComponent: new Date("2024-08-01"),
	sizePreview: "lg",
	slug: "many-offers",
	name: "Pricing with many offers",
	description: "A pricing table with a lot of offers",
	inspiration: "Artlist",
	inspirationLink: "https://artlist.io/pricing",
	isIframed: true,
	variantList: [
		{
			name: "Many Offers Table",
			component: <ManyOffersVariant1 />,
			slugPreviewFile: "preview.artlist-inspired",
		},
	],
};
