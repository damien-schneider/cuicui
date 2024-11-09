import { TableOfContentsIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { StepWithStickyColorVariant1 } from "@/cuicui/application-ui/static-steppers/code/variant1";
import TableOfContentPreview from "@/cuicui/application-ui/table-of-contents/modul-inspired/following-header-preview";

export const tableOfContentCategory: CategoryType = {
	slug: "table-of-contents",
	name: "Table of Contents",
	description: "Table of contents components",
	releaseDateCategory: new Date("2024-08-28"),
	icon: TableOfContentsIcon,
	previewCategory: {
		component: <StepWithStickyColorVariant1 />,
		previewScale: 0.75,
	},
	componentList: [
		{
			slug: "modul-inspired",
			name: "Modul inspired table of contents",
			description:
				"An advanced animated table of contents component highlighting every sections on the screen.",
			sizePreview: "md",

			variantList: [
				{
					name: "Default",
					component: <TableOfContentPreview />,
					slugPreviewFile: "following-header-preview",
					slugComponentFile: "following-headers",
				},
			],
			isResizable: false,

			inspiration: "Modul",
			inspirationLink: "https://www.modul.day",
		},
	],
};
