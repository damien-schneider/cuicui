import { SearchIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import GrowingSearchVariant1 from "#/src/ui/cuicui/application-ui/search-bars/growing-search/variant1";

export const searchBarsCategory: CategoryType = {
  slug: "search-bars",
  name: "Search Bars",
  description: "Search bar components",
  releaseDateCategory: new Date("2024-08-19"),
  icon: SearchIcon,
  previewCategory: {
    component: <GrowingSearchVariant1 />,
    previewScale: 1,
  },
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
      title: "Growing Search",
      description: "Search bar that grows when focused.",
    },
  ],
};
