import footerComponent from "@/cuicui/marketing-ui/footer/sticky-footer/component";
import { PreviewStickyFooter } from "@/cuicui/marketing-ui/footer/sticky-footer/preview.sticky-footer";
import type { CategoryType } from "@/lib/types/component";
import { PanelBottomIcon } from "lucide-react";

export const footerCategory: CategoryType = {
	slug: "footer",
	name: "Footer",
	description:
		"Customize the footer section of your website with various styles and components.",
	releaseDateCategory: new Date("2024-11-22"),
	icon: PanelBottomIcon, // Updated icon to represent footer
	previewCategory: {
		component: PreviewStickyFooter,
		previewScale: 0.8,
	},
	componentList: [
		footerComponent,
		// Add more footer components as needed
	],
};

export default footerCategory;
