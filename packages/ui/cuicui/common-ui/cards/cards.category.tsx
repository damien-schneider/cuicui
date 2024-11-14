import { CreditCardIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import DynamicSquareBackgroundPreview from "@/cuicui/common-ui/cards/dynamic-square-background/dynamic-square-background-preview";
import HoverEffectCardPreview from "@/cuicui/common-ui/cards/hover-effect-card/hover-effect-card-preview";
import { ModernInnerShadowCardVariant1 } from "@/cuicui/common-ui/cards/modern-inner-shadow/variant1";
import NotificationCardPreview from "@/cuicui/common-ui/cards/notification-card/notification-card-preview";

export const cardsCategory: CategoryType = {
	slug: "cards",
	name: "Cards",
	description: "Cards with various layouts and effects",
	releaseDateCategory: new Date("2024-08-10"),
	icon: CreditCardIcon,
	previewCategory: {
		component: <DynamicSquareBackgroundPreview />,
		previewScale: 0.5,
	},
	componentList: [
		{
			slug: "modern-inner-shadow",
			name: "Modern inner shadow card",
			description:
				"A card that showcases a set of tools that you use to create your product.",
			sizePreview: "sm",
			variantList: [
				{
					name: "Variant 1",
					component: <ModernInnerShadowCardVariant1 />,
					slugPreviewFile: "variant1",
				},
			],

			componentBadges: ["better-in-dark-mode"],
		},
		{
			slug: "dynamic-square-background",
			name: "Dynamic Square Background",
			description:
				"A card to announce any new feature or product with a modern dynamic square background.",
			sizePreview: "sm",
			variantList: [
				{
					name: "Variant 1",
					component: <DynamicSquareBackgroundPreview />,
					slugPreviewFile: "dynamic-square-background-preview",
					slugComponentFile: "dynamic-square-background",
				},
			],
		},
		{
			slug: "notification-card",
			name: "Notification Card",
			description:
				"A notification card with a date and time to show the user when the notification was sent.",

			sizePreview: "sm",
			variantList: [
				{
					name: "Variant 1",
					component: <NotificationCardPreview />,
					slugPreviewFile: "notification-card-preview",
					slugComponentFile: "notification-card",
				},
			],
		},
		{
			sizePreview: "sm",
			slug: "hover-effect-card",

			variantList: [
				{
					name: "Variant 1",
					component: <HoverEffectCardPreview />,
					slugPreviewFile: "hover-effect-card-preview",
					slugComponentFile: "hover-effect-card",
				},
			],
			name: "Hover Effect Card",
			description:
				"A card with a hover effect that rotates on hover. Only CSS.",
			isIframed: true,

			componentBadges: ["no-js"],
		},
	],
};
