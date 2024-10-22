import type { ComponentType } from "@/lib/types/component";
import PreviewSimpleCookieBanner from "@/cuicui/application-ui/cookie-banner/simple-cookie-banner/preview-simple-cookie-banner";

export const simpleCookieBannerComponent: ComponentType = {
	slug: "simple-cookie-banner",
	name: "Simple Cookie Banner",
	description:
		"A simple cookie banner that can be used in any project with simple artistic style.",
	isIframed: true,
	variantList: [
		{
			component: <PreviewSimpleCookieBanner />,
			name: "Default",
			slugPreviewFile: "preview-simple-cookie-banner",
			slugComponentFile: "simple-cookie-banner",
		},
	],
	sizePreview: "sm",
	lastUpdatedDateComponent: new Date("2024-09-19"),
};
