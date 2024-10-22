import { CookieIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { simpleCookieBannerComponent } from "@/cuicui/application-ui/cookie-banner/simple-cookie-banner/component.simple-cookie-banner";
import PreviewSimpleCookieBanner from "@/cuicui/application-ui/cookie-banner/simple-cookie-banner/preview-simple-cookie-banner";

export const cookieBannerCategory: CategoryType = {
	name: "Cookie Banner",
	slug: "cookie-banner",
	description: "Display a cookie banner to inform users about cookies",
	releaseDateCategory: new Date("2024-09-26"),
	icon: CookieIcon,
	comingSoonCategory: false,
	previewCategory: {
		component: <PreviewSimpleCookieBanner />,
		previewScale: 0.75,
	},
	componentList: [simpleCookieBannerComponent],
};
