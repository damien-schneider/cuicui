import { MonitorSmartphoneIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";

import { Airpods } from "@/cuicui/other/mock-ups/airpods/airpods";
import { AirpodsPro } from "@/cuicui/other/mock-ups/airpods/airpods-pro";
import { GooglePixelVariant1 } from "@/cuicui/other/mock-ups/smartphone/variant1";
import { Iphone14ProVariant2 } from "@/cuicui/other/mock-ups/smartphone/variant2";
import { PreviewMackbook } from "@/cuicui/other/mock-ups/laptops/preview.mackbook";

export const mockUpsCategory: CategoryType = {
	slug: "mock-ups",
	name: "Mock-ups",
	description:
		"Create mock-ups without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
	releaseDateCategory: new Date("2024-08-14"),
	icon: MonitorSmartphoneIcon,
	previewCategory: {
		component: <Iphone14ProVariant2 />,
		previewScale: 0.2,
	},
	componentList: [
		{
			sizePreview: "xl",
			slug: "smartphone",
			name: "Smartphone mock-up",
			description:
				"Create a smartphone mock-up with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
			variantList: [
				{
					name: "Iphone 14",
					component: <Iphone14ProVariant2 />,
					slugPreviewFile: "variant2",
				},
				{
					name: "Google Pixel",
					component: <GooglePixelVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
			inspiration: "Devices CSS",
			inspirationLink: "https://devicescss.xyz/phones.html#google-pixel-6-pro",
		},
		{
			sizePreview: "lg",
			slug: "laptops",
			name: "Laptop mock-up",
			description:
				"Create a laptop mock-up with CSS and HTML for better performance",
			variantList: [
				{
					name: "Macbook Pro",
					component: <PreviewMackbook />,
					slugPreviewFile: "preview.mackbook",
					slugComponentFile: "component.mackbook",
				},
			],
			inspiration: "Devices CSS",
			inspirationLink: "https://devicescss.xyz/laptops.html#macbook-pro",
		},
		{
			sizePreview: "sm",
			slug: "airpods",

			name: "Airpods mock-up",
			description:
				"Create a airpods mock-up with CSS and HTML for better performance",
			variantList: [
				{
					name: "Airpods Pro",
					component: (
						// <div className="grid place-content-center h-full">
						<AirpodsPro />
						//</div>
					),
					slugPreviewFile: "airpods-pro",
				},
				{
					name: "Airpods",
					component: <Airpods />,
					slugPreviewFile: "airpods",
				},
			],
			inspiration: "Spacious74 on Uiverse",
			inspirationLink: "https://uiverse.io/Spacious74/wicked-rat-71",
		},
	],
};
