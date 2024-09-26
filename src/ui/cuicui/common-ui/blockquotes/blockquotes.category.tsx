import type { CategoryType } from "#/src/lib/types/component";
import ModernSimpleQuoteVariant1 from "#/src/ui/cuicui/common-ui/blockquotes/modern-simple-quote/variant1";
import { QuoteIcon } from "lucide-react";

export const blockquotesCategory: CategoryType = {
  slug: "blockquotes",
  name: "Blockquotes",
  description: "Blockquotes with different styles",
  releaseDateCategory: new Date("2024-08-01"),
  icon: QuoteIcon,
  previewCategory: {
    component: <ModernSimpleQuoteVariant1 />,
    previewScale: 0.75,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "modern-simple-quote",
      variantList: [
        {
          name: "On hover effect",
          component: <ModernSimpleQuoteVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      title: "Simple modern quote",
      description: "A simple modern quote with a border on the left side.",
    },
  ],
};
