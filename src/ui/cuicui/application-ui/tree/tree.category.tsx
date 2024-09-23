import { FolderTreeIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { PreviewRecursiveTree } from "#/src/ui/cuicui/application-ui/tree/recursive-tree/preview-recursive-tree";

export const treeCategory: CategoryType = {
  slug: "tree",
  name: "Tree",
  description: "Tree components",
  releaseDateCategory: new Date("2024-09-18"),
  icon: FolderTreeIcon,
  previewCategory: {
    component: <PreviewRecursiveTree />,
    previewScale: 1,
  },
  componentList: [
    {
      isIframed: false,
      sizePreview: "lg",
      slug: "recursive-tree",
      variantList: [
        {
          name: "Default",
          component: <PreviewRecursiveTree />,
          slugPreviewFile: "preview-recursive-tree",
          slugComponentFile: "recursive-tree",
        },
      ],
      title: "Recursive Tree",
      description:
        "A tree component with recursive children. Without any limit with animated collapse and without needing to know the depth or to specify parent component.",
    },
  ],
};
