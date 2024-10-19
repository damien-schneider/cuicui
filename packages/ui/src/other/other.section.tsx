import { RectangleEllipsisIcon } from "lucide-react";
import type { SectionType } from "@/lib/types/component";
import { cursorCategory } from "@/src/other/cursors/cursor.category";
import { mockUpsCategory } from "@/src/other/mock-ups/mock-ups.category";
import { patternsCategory } from "@/src/other/patterns/patterns.category";
import { qrCodeCategory } from "@/src/other/qr-code/qr-code.category";
import { transitionWrappersCategory } from "@/src/other/transition-wrappers/transition-wrappers.category";
import { creativeEffectCategory } from "@/src/other/creative-effects/category.creative-effet";
export const otherSection: SectionType = {
	name: "Other",
	slug: "other",
	type: "multiple-component",
	description:
		"A collection of creative advanced UI components for your projects.",
	icon: RectangleEllipsisIcon,
	categoriesList: [
		cursorCategory,
		mockUpsCategory,
		patternsCategory,
		transitionWrappersCategory,
		qrCodeCategory,
		creativeEffectCategory,
	],
};
