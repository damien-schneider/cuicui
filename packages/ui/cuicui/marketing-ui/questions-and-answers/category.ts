import type { CategoryMetaType } from "@/lib/types/component";
import { MessageCircleQuestionIcon } from "lucide-react";

export const faqCategory: CategoryMetaType = {
  name: "Q&A",
  description: "A collection of Q&A components for your projects.",
  icon: MessageCircleQuestionIcon,
  latestUpdateDate: new Date("2024-01-11"),
};

export default faqCategory;
