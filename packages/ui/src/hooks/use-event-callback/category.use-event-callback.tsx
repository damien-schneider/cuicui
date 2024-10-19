import { SquareFunctionIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseEventCallback } from "@/src/hooks/use-event-callback/preview-use-event-callback";

export const useEventCallbackCategory: SingleComponentCategoryType = {
	slug: "use-event-callback",
	name: "Use Event Callback",
	description: "A hook that returns a memoized event callback",
	releaseDateCategory: new Date("2024-09-28"),
	icon: SquareFunctionIcon,
	previewCategory: {
		component: <PreviewUseEventCallback />,
		previewScale: 0.8,
	},
	component: {
		lastUpdatedDateComponent: new Date("2024-09-28"),
		sizePreview: "sm",
		isIframed: false,
		variantList: [
			{
				name: "variant 1",
				component: <PreviewUseEventCallback />,
				slugComponentFile: "use-event-callback",
				slugPreviewFile: "preview-use-event-callback",
			},
		],
	},
};
