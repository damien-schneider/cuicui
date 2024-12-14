import type { CategoryMetaType } from "@/lib/types/component";
import { MessageCircleQuestionIcon } from "lucide-react";

export const faqCategory: CategoryMetaType = {
  name: "FAQ",
  description: "A collection of FAQ components for your projects.",
  icon: MessageCircleQuestionIcon,
  releaseDateCategory: new Date("2024-01-11"),
};

export default faqCategory;
