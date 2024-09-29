import type { PageCategoryType } from "#/src/lib/types/component";
import { PageFormBuilder } from "#/src/ui/cuicui/tools/form-builder/page.form-builder";
import { LayoutListIcon } from "lucide-react";

export const FormBuilderCategory: PageCategoryType = {
  name: "Form Builder",
  slug: "form-builder",
  icon: LayoutListIcon,
  description:
    "Create forms easily with this form builder. Based on shadCn components, with zod validation.",
  component: <PageFormBuilder />,
};
