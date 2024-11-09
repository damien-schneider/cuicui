import { MapIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewUseClickOutside from "@/cuicui/hooks/use-click-outside/preview.use-click-outside";

export const useClickOutsideCategory: SingleComponentCategoryType = {
	slug: "use-click-outside",
	name: "Use Click Outside",
	description:
		"A React hook that allows you to detect clicks outside of a specified element.",
	releaseDateCategory: new Date("2024-10-15"),
	icon: MapIcon,
	previewCategory: {
		component: <PreviewUseClickOutside />,
		previewScale: 0.8,
	},
	component: {
		sizePreview: "xl",

		variantList: [
			{
				name: "Default",
				component: <PreviewUseClickOutside />,
				slugComponentFile: "use-click-outside",
				slugPreviewFile: "preview.use-click-outside",
			},
		],
	},
};
