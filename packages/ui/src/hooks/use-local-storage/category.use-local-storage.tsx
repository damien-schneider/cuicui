import { DatabaseIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseLocalStorage } from "@/src/hooks/use-local-storage/preview-use-local-storage";

export const useLocalStorageCategory: SingleComponentCategoryType = {
	slug: "use-local-storage",
	name: "Use Local Storage",
	description:
		"A hook that allows you to manage and persist state using localStorage",
	releaseDateCategory: new Date("2024-09-28"),
	icon: DatabaseIcon,
	previewCategory: {
		component: <PreviewUseLocalStorage />,
		previewScale: 0.8,
	},
	component: {
		lastUpdatedDateComponent: new Date("2024-09-28"),
		sizePreview: "sm",
		isIframed: false,
		variantList: [
			{
				name: "Default Variant",
				component: <PreviewUseLocalStorage />,
				slugComponentFile: "use-local-storage",
				slugPreviewFile: "preview-use-local-storage",
			},
		],
	},
};
