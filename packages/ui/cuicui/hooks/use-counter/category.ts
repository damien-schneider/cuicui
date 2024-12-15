import { CalculatorIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useCounterCategory: CategoryMetaType = {
  name: "Use counter",
  description: "A hook that allows you to count easily",
  releaseDateCategory: new Date("2024-09-16"),
  icon: CalculatorIcon,
};

export default useCounterCategory;
