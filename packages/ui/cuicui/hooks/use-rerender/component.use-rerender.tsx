import { ViewIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseRerender } from "@/cuicui/hooks/use-rerender/preview.use-rerender";

export const useRerenderCategory: SingleComponentCategoryType = {
	slug: "use-rerender",
	name: "Use Rerender",
	description:
		"A hook that throttles the execution of a function, limiting how often it can be invoked",
	releaseDateCategory: new Date("2024-09-28"),
	icon: ViewIcon,
	previewCategory: {
		component: <PreviewUseRerender />,
		previewScale: 0.8,
	},
	component: {
		sizePreview: "sm",

		variantList: [
			{
				name: "default variant",
				component: <PreviewUseRerender />,
				slugComponentFile: "use-rerender",
				slugPreviewFile: "preview.use-rerender",
			},
		],
	},
};
