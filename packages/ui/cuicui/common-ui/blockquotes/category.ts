import { QuoteIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const blockquotesCategory: CategoryMetaType = {
  name: "Blockquotes",
  description: "Blockquotes with different styles",
  latestUpdateDate: new Date("2024-08-01"),
  icon: QuoteIcon,
};

export default blockquotesCategory;
