import { FullSectionFaqComponent } from "@/cuicui/marketing-ui/faq/full-section/component.full-section";
import { gradientQnaComponent } from "@/cuicui/marketing-ui/faq/gradient-qna/component.gradient-qna";
import type { CategoryType } from "@/lib/types/component";
import { MessageCircleQuestionIcon } from "lucide-react";

export const faqCategory: CategoryType = {
	name: "FAQ",
	slug: "faq",
	description: "A collection of FAQ components for your projects.",
	icon: MessageCircleQuestionIcon,
	releaseDateCategory: new Date("2024-01-11"),
	componentList: [FullSectionFaqComponent, gradientQnaComponent],
};
