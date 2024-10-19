import { NetworkIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewUseNetworkStatus from "@/src/hooks/use-network-status/preview-use-network-status";

export const useNetworkCategory: SingleComponentCategoryType = {
	slug: "use-network-status",
	name: "Use Network Status",
	description: "A hook to get the network status",
	releaseDateCategory: new Date("2024-09-16"),
	icon: NetworkIcon,
	previewCategory: {
		component: <PreviewUseNetworkStatus />,
		previewScale: 1,
	},
	component: {
		rerenderButton: true,
		lastUpdatedDateComponent: new Date("2024-09-16"),
		sizePreview: "lg",
		isIframed: false,
		variantList: [
			{
				name: "variant 1",
				component: <PreviewUseNetworkStatus />,
				slugComponentFile: "use-network-status",
				slugPreviewFile: "preview-use-network-status",
			},
		],
	},
};
