import { LayoutListIcon } from "lucide-react";
import type { PageCategoryType } from "@/lib/types/component";
import { PageFormBuilder } from "@/src/tools/form-builder/page.form-builder";

export const FormBuilderCategory: PageCategoryType = {
	name: "Form Builder",
	slug: "form-builder",
	icon: LayoutListIcon,
	description:
		"Create forms easily with this form builder. Based on shadCn components, with zod validation.",
	component: <PageFormBuilder />,
};
