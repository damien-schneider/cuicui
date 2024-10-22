import { ServerCogIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseIsomorphicLayoutEffect } from "@/cuicui/hooks/use-isomorphic-layout-effect/preview-use-isomorphic-layout-effect";

export const useIsomorphicLayoutEffectCategory: SingleComponentCategoryType = {
	slug: "use-isomorphic-layout-effect",
	name: "Use Isomorphic Layout Effect",
	description:
		"A hook that allows you to use the isomorphic version of useLayoutEffect, ensuring compatibility with server-side rendering.",
	releaseDateCategory: new Date("2024-09-28"),
	icon: ServerCogIcon,
	previewCategory: {
		component: <PreviewUseIsomorphicLayoutEffect />,
		previewScale: 0.8,
	},
	component: {
		lastUpdatedDateComponent: new Date("2024-09-28"),
		sizePreview: "sm",
		isIframed: false,
		variantList: [
			{
				name: "default",
				component: <PreviewUseIsomorphicLayoutEffect />,
				slugComponentFile: "use-isomorphic-layout-effect",
				slugPreviewFile: "preview-use-isomorphic-layout-effect",
			},
		],
	},
};
