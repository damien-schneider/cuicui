import { FullSectionFaq } from "@/cuicui/marketing-ui/faq/full-section/full-section";
import type { ComponentType } from "@/lib/types/component";

export const FullSectionFaqComponent: ComponentType = {
	name: "Full Section FAQ",
	description: "A full section FAQ component for your projects.",
	lastUpdatedDateComponent: new Date("2024-01-11"),
	isResizable: true,
	slug: "full-section",
	sizePreview: "md",
	isIframed: true,
	variantList: [
		{
			name: "Full Section FAQ",
			component: <FullSectionFaq />,
			slugPreviewFile: "full-section",
		},
	],
};
