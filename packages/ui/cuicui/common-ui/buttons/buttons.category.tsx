import { SquareArrowRightIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import PreviewBeforeEffectButtonAdvancedButton from "@/cuicui/common-ui/buttons/before-effect-button/preview-advanced-button";
import PreviewBeforeEffectButtonDefault from "@/cuicui/common-ui/buttons/before-effect-button/preview-default";
import PreviewBeforeEffectButtonHoverOnly from "@/cuicui/common-ui/buttons/before-effect-button/preview-hover-only";
import GrowingButtonVariant1 from "@/cuicui/common-ui/buttons/growing-button/variant1";
import ModernAnimatedButtonVariant1 from "@/cuicui/common-ui/buttons/modern-animated-button/variant1";

import { PreviewShinyRotatingBorderButton } from "@/cuicui/common-ui/buttons/shiny-rotating-border-button/preview.shiny-rotating-border-button";
import { PreviewMagneticButton } from "@/cuicui/common-ui/buttons/magnetic-button/preview.magnetic-button";
import { PreviewMagneticBackgroundButton } from "@/cuicui/common-ui/buttons/magnetic-button/preview.magnetic-background-button";

export const buttonsCategory: CategoryType = {
	slug: "buttons",
	name: "Buttons",
	description: "Buttons with various animations and styles",
	releaseDateCategory: new Date("2024-08-09"),
	icon: SquareArrowRightIcon,
	previewCategory: {
		component: <PreviewShinyRotatingBorderButton />,
		previewScale: 1.5,
	},
	componentList: [
		{
			slug: "magnetic-button",
			name: "Magnetic Button",
			description: "Button with a magnetic effect.",
			sizePreview: "sm",
			variantList: [
				{
					name: "Magnetic Background",
					component: <PreviewMagneticBackgroundButton />,
					slugPreviewFile: "preview.magnetic-background-button",
					slugComponentFile: "component.magnetic-background-button",
				},
				{
					name: "Magnetic Button",
					component: <PreviewMagneticButton />,
					slugPreviewFile: "preview.magnetic-button",
					slugComponentFile: "component.magnetic-button",
				},
			],
			lastUpdatedDateComponent: new Date("2024-08-11"),
		},
		{
			slug: "growing-button",
			name: "Button",
			description:
				"Simple button with icon which grows on hover. Perfect for small, rarely used buttons replacing an old tooltip.",
			sizePreview: "xs",
			variantList: [
				{
					name: "Amber",
					component: <GrowingButtonVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
		{
			slug: "before-effect-button",
			name: "Dynamic button hover effect",
			description: "Button with a hover effect that has a 'before' effect.",
			sizePreview: "xs",
			isIframed: true,
			variantList: [
				{
					name: "Hover only",
					component: <PreviewBeforeEffectButtonHoverOnly />,
					slugPreviewFile: "preview-hover-only",
					slugComponentFile: "before-effect-button",
				},
				{
					name: "Simple",
					component: <PreviewBeforeEffectButtonDefault />,
					slugPreviewFile: "preview-default",
					slugComponentFile: "before-effect-button",
				},
				{
					name: "Advanced button",
					component: <PreviewBeforeEffectButtonAdvancedButton />,
					slugPreviewFile: "preview-advanced-button",
					slugComponentFile: "before-effect-button",
				},
			],

			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
		{
			slug: "shiny-rotating-border-button",
			name: "Shiny rotating border button",
			description: "Button with a shiny rotating border effect.",
			sizePreview: "xs",
			variantList: [
				{
					name: "Default",
					component: <PreviewShinyRotatingBorderButton />,
					slugPreviewFile: "preview.shiny-rotating-border-button",
					slugComponentFile: "component.shiny-rotating-border-button",
				},
			],
			isIframed: true,
			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
		{
			slug: "modern-animated-button",
			name: "Modern Animated Button",
			description: "Button with a modern animated style.",
			sizePreview: "xs",
			variantList: [
				{
					name: "Shiny rotating border button",
					component: <ModernAnimatedButtonVariant1 />,
					slugPreviewFile: "variant1",
				},
			],

			inspiration: "Raycast",
			inspirationLink: "https://www.raycast.com/",
			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
	],
};
