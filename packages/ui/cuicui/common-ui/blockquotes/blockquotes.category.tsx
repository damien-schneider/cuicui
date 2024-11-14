import { QuoteIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import ModernSimpleQuoteVariant1 from "@/cuicui/common-ui/blockquotes/modern-simple-quote/variant1";

export const blockquotesCategory: CategoryType = {
	slug: "blockquotes",
	name: "Blockquotes",
	description: "Blockquotes with different styles",
	releaseDateCategory: new Date("2024-08-01"),
	icon: QuoteIcon,
	previewCategory: {
		component: <ModernSimpleQuoteVariant1 />,
		previewScale: 0.75,
	},
	componentList: [
		{
			slug: "modern-simple-quote",
			name: "Simple modern quote",
			description: "A simple modern quote with a border on the left side.",
			sizePreview: "sm",
			variantList: [
				{
					name: "On hover effect",
					component: <ModernSimpleQuoteVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
		},
	],
};
