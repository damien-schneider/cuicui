import { ViewIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseThrottle } from "@/cuicui/hooks/use-throttle/preview.use-throttle";

export const useThrottleCategory: SingleComponentCategoryType = {
	slug: "use-throttle",
	name: "Use Throttle",
	description:
		"A hook that throttles the execution of a function, limiting how often it can be invoked",
	releaseDateCategory: new Date("2024-09-28"),
	icon: ViewIcon,
	previewCategory: {
		component: <PreviewUseThrottle />,
		previewScale: 0.8,
	},
	component: {
		sizePreview: "sm",

		variantList: [
			{
				name: "default variant",
				component: <PreviewUseThrottle />,
				slugComponentFile: "use-throttle",
				slugPreviewFile: "preview.use-throttle",
			},
		],
	},
};
