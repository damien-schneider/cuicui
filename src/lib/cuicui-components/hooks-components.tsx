import {
  ClipboardCopyIcon,
  PictureInPictureIcon,
  ViewIcon,
} from "lucide-react";

import PreviewImageUseInView from "#/src/assets/components-preview/use-in-view.png";
import type { CategoryType } from "#/src/lib/types/component";
import PreviewCopyToClipboard from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/preview-copy-to-clipboard";
import { PreviewUseInView } from "#/src/ui/cuicui/hooks/use-in-view/hook/preview-in-view";
export const hooksCategoriesList: CategoryType[] = [
  {
    slug: "picture-in-picture",
    name: "Picture in Picture",
    description: "Create a picture in picture mode for your videos",
    icon: PictureInPictureIcon,
    comingSoonCategory: true,
    componentList: null,
  },
  {
    slug: "use-copy-to-clipboard",
    name: "Copy to Clipboard",
    description: "A hook that allows you to copy text to the clipboard",
    releaseDateCategory: new Date("2024-08-20"),
    icon: ClipboardCopyIcon,
    previewCategory: {
      component: <PreviewCopyToClipboard />,
      previewScale: 0.8,
    },
    componentList: [
      {
        sizePreview: "lg",
        slug: "hook",
        isIframed: false,
        title: "Copy to Clipboard",
        description: "A hook that allows you to copy text to the clipboard",
        variantList: [
          {
            name: "variant 1",
            component: <PreviewCopyToClipboard />,
            slugComponentFile: "use-copy-to-clipboard",
            slugPreviewFile: "preview-copy-to-clipboard",
          },
        ],
      },
    ],
  },
  {
    slug: "use-in-view",
    name: "Use in View",
    description:
      "A hook that allows you to know if an element is in the viewport",
    releaseDateCategory: new Date("2024-08-28"),
    icon: ViewIcon,
    previewCategory: {
      component: <PreviewUseInView />,
      previewImage: PreviewImageUseInView,
      previewScale: 0.8,
    },
    componentList: [
      {
        sizePreview: "lg",
        slug: "hook",
        isIframed: true,
        title: "Use in View",
        description:
          "A hook that allows you to know if an element is in the viewport",
        variantList: [
          {
            name: "variant 1",
            component: <PreviewUseInView />,
            slugComponentFile: "use-in-view",
            slugPreviewFile: "preview-in-view",
          },
        ],
      },
    ],
  },
];
