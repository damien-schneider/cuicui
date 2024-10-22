import { EarIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseEventListener } from "@/cuicui/hooks/use-event-listener/preview-use-event-listener";

export const useEventListenerCategory: SingleComponentCategoryType = {
	slug: "use-event-listener",
	name: "Use Event Listener",
	description:
		"A hook that allows you to manage event listeners on DOM elements",
	releaseDateCategory: new Date("2024-09-28"),
	icon: EarIcon,
	previewCategory: {
		component: <PreviewUseEventListener />,
		previewScale: 0.8,
	},
	component: {
		lastUpdatedDateComponent: new Date("2024-09-28"),
		sizePreview: "sm",
		isIframed: false,
		variantList: [
			{
				name: "Default Variant",
				component: <PreviewUseEventListener />,
				slugComponentFile: "use-event-listener",
				slugPreviewFile: "preview-use-event-listener",
			},
		],
	},
};
