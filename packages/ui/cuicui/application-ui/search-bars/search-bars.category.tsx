import { SearchIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import GrowingSearchVariant1 from "@/cuicui/application-ui/search-bars/growing-search/variant1";

export const searchBarsCategory: CategoryType = {
  slug: "search-bars",
  name: "Search Bars",
  description: "Search bar components",
  releaseDateCategory: new Date("2024-08-19"),
  icon: SearchIcon,
  componentList: [
    {
      sizePreview: "xs",
      slug: "growing-search",
      variantList: [
        {
          name: "With press effect",
          component: <GrowingSearchVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Growing Search",
      description: "Search bar that grows when focused.",
    },
  ],
};
