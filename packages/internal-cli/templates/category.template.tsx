import type { CategoryType } from "@/lib/types/component";
import { __CATEGORY_NAME__Icon } from "lucide-react";

// Import your components here
// e.g., import MyComponent from "./my-component/my-component";

export const __CATEGORY_NAME__Category: CategoryType = {
  slug: "__CATEGORY_NAME__",
  name: "__CATEGORY_NAME__",
  description: "__CATEGORY_NAME__ components",
  releaseDateCategory: new Date(),
  icon: __CATEGORY_NAME__Icon,
  componentList: [
    // Add components here
  ],
};
