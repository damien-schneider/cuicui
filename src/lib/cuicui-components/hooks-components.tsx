import {
  BatteryCharging,
  CalculatorIcon,
  ClipboardCopyIcon,
  NetworkIcon,
  PictureInPictureIcon,
  TimerIcon,
  ViewIcon,
} from "lucide-react";

import PreviewImageUseInView from "#/src/assets/components-preview/use-in-view.png";
import type { CategoryType } from "#/src/lib/types/component";
import { PreviewUseBattery } from "#/src/ui/cuicui/hooks/use-battery/hook/preview-use-battery";
import PreviewCopyToClipboard from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/preview-copy-to-clipboard";
import PreviewUseCounter from "#/src/ui/cuicui/hooks/use-counter/hook/preview-use-counter";
import PreviewUseDebounce from "#/src/ui/cuicui/hooks/use-debounce/hook/preview-use-debounce";
import { PreviewUseInView } from "#/src/ui/cuicui/hooks/use-in-view/hook/preview-in-view";
import PreviewUseNetworkStatus from "#/src/ui/cuicui/hooks/use-network-status/hook/preview-use-network-status";
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
        lastUpdatedDateComponent: new Date("2024-08-28"),
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
  {
    slug: "use-debounce",
    name: "Use debounce",
    description: "A hook that allows you to debounce the value of an input",
    releaseDateCategory: new Date("2024-09-16"),
    icon: TimerIcon,
    previewCategory: {
      component: <PreviewUseDebounce />,
      previewScale: 1,
    },
    componentList: [
      {
        lastUpdatedDateComponent: new Date("2024-09-16"),
        sizePreview: "lg",
        slug: "hook",
        isIframed: false,
        title: "Use in View",
        description: "A hook that allows you to debounce the value of an input",
        variantList: [
          {
            name: "variant 1",
            component: <PreviewUseDebounce />,
            slugComponentFile: "use-debounce",
            slugPreviewFile: "preview-use-debounce",
          },
        ],
      },
    ],
  },
  {
    slug: "use-counter",
    name: "Use counter",
    description: "A hook that allows you to count easily",
    releaseDateCategory: new Date("2024-09-16"),
    icon: CalculatorIcon,
    previewCategory: {
      component: <PreviewUseCounter />,
      previewScale: 1,
    },
    componentList: [
      {
        lastUpdatedDateComponent: new Date("2024-09-16"),
        sizePreview: "lg",
        slug: "hook",
        isIframed: false,
        title: "Use counter",
        description: "A hook that allows you to count easily",
        variantList: [
          {
            name: "variant 1",
            component: <PreviewUseCounter />,
            slugComponentFile: "use-counter",
            slugPreviewFile: "preview-use-counter",
          },
        ],
      },
    ],
  },
  {
    slug: "use-network-status",
    name: "Use Network Status",
    description: "A hook to get the network status",
    releaseDateCategory: new Date("2024-09-16"),
    icon: NetworkIcon,
    previewCategory: {
      component: <PreviewUseNetworkStatus />,
      previewScale: 1,
    },
    componentList: [
      {
        rerenderButton: true,
        lastUpdatedDateComponent: new Date("2024-09-16"),
        sizePreview: "lg",
        slug: "hook",
        isIframed: false,
        title: "Use Network Status",
        description: "A hook to get the network status",
        variantList: [
          {
            name: "variant 1",
            component: <PreviewUseNetworkStatus />,
            slugComponentFile: "use-network-status",
            slugPreviewFile: "preview-use-network-status",
          },
        ],
      },
    ],
  },
  {
    slug: "use-battery",
    name: "Use Battery",
    description: "A hook to get battery informations",
    releaseDateCategory: new Date("2024-09-16"),
    icon: BatteryCharging,
    previewCategory: {
      component: <PreviewUseBattery />,
      previewScale: 1,
    },
    componentList: [
      {
        rerenderButton: true,
        lastUpdatedDateComponent: new Date("2024-09-16"),
        sizePreview: "lg",
        slug: "hook",
        isIframed: false,
        title: "Use Battery",
        description: "A hook to get battery informations",
        variantList: [
          {
            name: "variant 1",
            component: <PreviewUseBattery />,
            slugComponentFile: "use-battery",
            slugPreviewFile: "preview-use-battery",
          },
        ],
      },
    ],
  },
];
