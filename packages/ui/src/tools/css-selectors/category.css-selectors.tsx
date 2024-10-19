import { TextSelectionIcon } from "lucide-react";
import type { PageCategoryType } from "@/lib/types/component";
import { CssSelectorsTool } from "@/src/tools/css-selectors/page.css-selectors";

export const cssSelectorsCategory: PageCategoryType = {
	name: "CSS Selectors",
	slug: "css-selectors",
	icon: TextSelectionIcon,
	description:
		"A visual guide to CSS selectors. Learn how to target HTML elements with CSS.",
	component: <CssSelectorsTool />,
};
