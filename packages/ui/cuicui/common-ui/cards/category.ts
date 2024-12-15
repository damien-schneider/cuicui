import { CreditCardIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const cardsCategory: CategoryMetaType = {
  name: "Cards",
  description: "Cards with various layouts and effects",
  releaseDateCategory: new Date("2024-08-10"),
  icon: CreditCardIcon,
};

export default cardsCategory;
