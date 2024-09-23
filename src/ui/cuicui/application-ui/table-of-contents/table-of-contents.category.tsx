import { TableOfContentsIcon } from "lucide-react";
import TableOfContentPreviewImage from "#/src/assets/components-preview/table-of-content.png";
import type { CategoryType } from "#/src/lib/types/component";
import { StepWithStickyColorVariant1 } from "#/src/ui/cuicui/application-ui/static-steppers/code/variant1";
import TableOfContentPreview from "#/src/ui/cuicui/application-ui/table-of-contents/modul-inspired/following-header-preview";

export const tableOfContentCategory: CategoryType = {
  slug: "table-of-contents",
  name: "Table of Contents",
  description: "Table of contents components",
  releaseDateCategory: new Date("2024-08-28"),
  icon: TableOfContentsIcon,
  previewCategory: {
    component: <StepWithStickyColorVariant1 />,
    previewImage: TableOfContentPreviewImage,
    previewScale: 0.75,
  },
  componentList: [
    {
      sizePreview: "md",
      slug: "modul-inspired",
      lastUpdatedDateComponent: new Date("2024-08-28"),
      variantList: [
        {
          name: "Default",
          component: <TableOfContentPreview />,
          slugPreviewFile: "following-header-preview",
          slugComponentFile: "following-headers",
        },
      ],
      isResizable: false,
      isIframed: false,
      title: "Modul inspired table of contents",
      description:
        "An advanced animated table of contents component highlighting every sections on the screen.",
      inspiration: "Modul",
      inspirationLink: "https://www.modul.day",
    },
  ],
};
