import type { CategoryType } from "@/lib/types/component";
import { DollarSignIcon } from "lucide-react";

import { gradientPricingTableComponent } from "@/cuicui/marketing-ui/pricing-tables/gradient/component.gradient-pricing-table";
import { artlistInspiredPricingTableComponent } from "@/cuicui/marketing-ui/pricing-tables/many-offers/component.artlist-inspired";

export const pricingTablesCategory: CategoryType = {
  slug: "pricing-tables",
  name: "Pricing Tables",
  description: "Showcase your product pricing with style",
  releaseDateCategory: new Date("2024-08-01"),
  icon: DollarSignIcon,
  componentList: [
    gradientPricingTableComponent,
    artlistInspiredPricingTableComponent,
  ],
};

export default pricingTablesCategory;
