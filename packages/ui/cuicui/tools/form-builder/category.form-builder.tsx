import { LayoutListIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const FormBuilderCategory: CategoryMetaType = {
  name: "Form Builder",
  latestUpdateDate: new Date("2024-09-28"),
  icon: LayoutListIcon,
  description:
    "Create forms easily with this form builder. Based on shadCn components, with zod validation.",
  // component: <PageFormBuilder />,
};
