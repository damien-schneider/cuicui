import { ListEndIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseStep } from "@/cuicui/hooks/use-step/preview-use-step";

export const useStepCategory: SingleComponentCategoryType = {
	name: "Use Step",
	slug: "use-step",
	description: "Create a step component",
	releaseDateCategory: new Date("2024-09-26"),
	icon: ListEndIcon,
	component: {
		rerenderButton: true,
		lastUpdatedDateComponent: new Date("2024-09-26"),
		sizePreview: "md",
		isIframed: false,
		variantList: [
			{
				name: "variant 1",
				component: <PreviewUseStep />,
				slugComponentFile: "use-step",
				slugPreviewFile: "preview-use-step",
			},
		],
	},
};
