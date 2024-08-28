import { ClipboardCopyIcon, PictureInPictureIcon } from "lucide-react";

import PreviewCopyToClipboard from "#/src/app/(components)/hooks/use-copy-to-clipboard/hook/preview-copy-to-clipboard";

import type { CategoryType } from "#/src/lib/types/component";

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
        sizePreview: "xs",
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
];
