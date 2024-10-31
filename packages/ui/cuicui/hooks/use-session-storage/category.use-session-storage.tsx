// Coming soon
import { ViewIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
// import { PreviewUseSessionStorage } from "@/cuicui/hooks/use-session-storage/preview-use-session-storage";

export const useSessionStorageCategory: SingleComponentCategoryType = {
	slug: "use-session-storage",
	name: "Use Session Storage",
	description: "A hook that allows you to manage session storage values",
	releaseDateCategory: new Date("2024-08-28"),
	icon: ViewIcon,
	// previewCategory: {
	//   component: <PreviewUseSessionStorage />,
	//   previewScale: 0.8,
	// },
	comingSoonCategory: true,
	component: null,
	// component: {
	//   lastUpdatedDateComponent: new Date("2024-08-28"),
	//   sizePreview: "sm",
	//
	//   variantList: [
	//     {
	//       name: "variant 1",
	//       component: <PreviewUseSessionStorage />,
	//       slugComponentFile: "use-session-storage",
	//       slugPreviewFile: "preview-use-session-storage",
	//     },
	//   ],
	// },
};
