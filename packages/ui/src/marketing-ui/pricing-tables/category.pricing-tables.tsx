import type { CategoryType } from "@/lib/types/component";
import ManyOffersVariant1 from "@/src/marketing-ui/pricing-tables/many-offers/preview.artlist-inspired";
import { DollarSignIcon } from "lucide-react";

import { gradientPricingTableComponent } from "@/src/marketing-ui/pricing-tables/gradient/component.gradient-pricing-table";
import { artlistInspiredPricingTableComponent } from "@/src/marketing-ui/pricing-tables/many-offers/component.artlist-inspired";

export const pricingTablesCategory: CategoryType = {
	slug: "pricing-tables",
	name: "Pricing Tables",
	description: "Showcase your product pricing with style",
	releaseDateCategory: new Date("2024-08-01"),
	icon: DollarSignIcon,
	previewCategory: {
		component: <ManyOffersVariant1 />,

		previewScale: 0.2,
	},
	componentList: [
		gradientPricingTableComponent,
		artlistInspiredPricingTableComponent,
	],
};
