import { WatchIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseStopwatch } from "@/cuicui/hooks/use-stopwatch/preview.use-stopwatch";

export const useStopwatchCategory: SingleComponentCategoryType = {
	slug: "use-stopwatch",
	name: "Use Stopwatch",
	description:
		"A hook that provides a stopwatch functionality to your application",
	releaseDateCategory: new Date("2024-09-28"),
	icon: WatchIcon,
	previewCategory: {
		component: <PreviewUseStopwatch />,
		previewScale: 0.8,
	},
	component: {
		lastUpdatedDateComponent: new Date("2024-09-28"),
		sizePreview: "sm",

		variantList: [
			{
				name: "default variant",
				component: <PreviewUseStopwatch />,
				slugComponentFile: "use-stopwatch",
				slugPreviewFile: "preview.use-stopwatch",
			},
		],
	},
};
