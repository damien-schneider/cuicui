import type { CategoryType } from "#/src/lib/types/component";
import ManyOffersVariant1 from "#/src/ui/cuicui/marketing-ui/pricing-tables/many-offers/preview.artlist-inspired";
import { DollarSignIcon } from "lucide-react";
import PricingPreviewImage from "#/src/assets/components-preview/pricing.png";
import { gradientPricingTableComponent } from "#/src/ui/cuicui/marketing-ui/pricing-tables/gradient/component.gradient-pricing-table";
import { artlistInspiredPricingTableComponent } from "#/src/ui/cuicui/marketing-ui/pricing-tables/many-offers/component.artlist-inspired";

export const pricingTablesCategory: CategoryType = {
  slug: "pricing-tables",
  name: "Pricing Tables",
  description: "Showcase your product pricing with style",
  releaseDateCategory: new Date("2024-08-01"),
  icon: DollarSignIcon,
  previewCategory: {
    component: <ManyOffersVariant1 />,
    previewImage: PricingPreviewImage,
    previewScale: 0.2,
  },
  componentList: [
    gradientPricingTableComponent,
    artlistInspiredPricingTableComponent,
  ],
};
