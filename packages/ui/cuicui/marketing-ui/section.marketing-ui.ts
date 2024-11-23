import type { MultiComponentSectionType } from "@/lib/types/component";

import { pricingTablesCategory } from "@/cuicui/marketing-ui/pricing-tables/category.pricing-tables";
import { carouselsCategory } from "@/cuicui/marketing-ui/carousels/category.carousels";
import { featuresCategory } from "@/cuicui/marketing-ui/features/category.features";
import { statisticsCategory } from "@/cuicui/marketing-ui/statistics/category.statistics";
import { testimonialsCategory } from "@/cuicui/marketing-ui/testimonials/category.testimonials";
import { BadgePercentIcon } from "lucide-react";
import { faqCategory } from "@/cuicui/marketing-ui/faq/category.faq";
import { footerCategory } from "@/cuicui/marketing-ui/footer/category";

export const marketingUiSection: MultiComponentSectionType = {
	type: "multiple-component",
	name: "Marketing UI",
	slug: "marketing-ui",
	description: "A collection of UI components for marketing websites.",
	icon: BadgePercentIcon,
	categoriesList: [
		carouselsCategory,
		faqCategory,
		featuresCategory,
		pricingTablesCategory,
		statisticsCategory,
		testimonialsCategory,
		footerCategory,
	],
};
