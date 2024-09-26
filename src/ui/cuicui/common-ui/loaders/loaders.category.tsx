import type { CategoryType } from "#/src/lib/types/component";
import { CircularBarsSpinnerLoader } from "#/src/ui/cuicui/common-ui/loaders/spinner-loader/circular-bars-spinner-loader";
import { DualRingSpinnerLoader } from "#/src/ui/cuicui/common-ui/loaders/spinner-loader/dual-ring-spinner-loader";
import { SpinnerLoader } from "#/src/ui/cuicui/common-ui/loaders/spinner-loader/spinner-loader";
import NineDotGridRandom from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/nine-dot-grid-random";
import ThreeDotLoaderGrowing from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-loader-growing";
import { ThreeDotSimpleLoader } from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-simple-loader";
import { LoaderIcon } from "lucide-react";

export const loadersCategory: CategoryType = {
  slug: "loaders",
  name: "Loaders",
  description: "Loaders with various styles and effects",
  releaseDateCategory: new Date("2024-08-31"),
  icon: LoaderIcon,
  previewCategory: {
    component: <ThreeDotSimpleLoader />,
    previewScale: 1.5,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "three-dot-simple-loader",
      variantList: [
        {
          name: "3 Bouncing",
          component: <ThreeDotSimpleLoader />,
          slugPreviewFile: "three-dot-simple-loader",
        },
        {
          name: "3 Growing",
          component: <ThreeDotLoaderGrowing />,
          slugPreviewFile: "three-dot-loader-growing",
        },
        {
          name: "9 Random grid",
          component: <NineDotGridRandom />,
          slugPreviewFile: "three-dot-loader-growing",
        },
      ],
      title: "Three Dot Simple Loader",
      description: "A simple loader with three dots that bounce up and down.",
      isIframed: false,
    },
    {
      sizePreview: "sm",
      slug: "spinner-loader",
      variantList: [
        {
          name: "Spinner",
          component: <SpinnerLoader />,
          slugPreviewFile: "spinner-loader",
        },
        {
          name: "Circular Bars",
          component: <CircularBarsSpinnerLoader />,
          slugPreviewFile: "circular-bars-spinner-loader",
        },
        {
          name: "Dual Ring",
          component: <DualRingSpinnerLoader />,
          slugPreviewFile: "dual-ring-spinner-loader",
        },
      ],
      title: "Spinner Loader",
      description: "A simple circular loader",
      isIframed: false,
    },
  ],
};