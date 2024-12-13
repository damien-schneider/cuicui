import { LoaderIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";

import { DualRingSpinnerLoader } from "@/cuicui/common-ui/loaders/spinner-loader/dual-ring-spinner-loader";
import { SpinnerLoader } from "@/cuicui/common-ui/loaders/spinner-loader/spinner-loader";
import NineDotGridRandom from "@/cuicui/common-ui/loaders/three-dot-simple-loader/nine-dot-grid-random";
import ThreeDotLoaderGrowing from "@/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-loader-growing";
import { ThreeDotSimpleLoader } from "@/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-simple-loader";
import { CircularBarsSpinnerLoaderPreview } from "@/cuicui/common-ui/loaders/spinner-loader/circular-bars-spinner-loader.preview";

export const loadersCategory: CategoryType = {
  slug: "loaders",
  name: "Loaders",
  description: "Loaders with various styles and effects",
  releaseDateCategory: new Date("2024-08-31"),
  icon: LoaderIcon,
  componentList: [
    {
      sizePreview: "sm",
      slug: "three-dot-simple-loader",
      variantList: [
        {
          name: "3 Bouncing",
          component: ThreeDotSimpleLoader,
          slugPreviewFile: "three-dot-simple-loader",
        },
        {
          name: "3 Growing",
          component: ThreeDotLoaderGrowing,
          slugPreviewFile: "three-dot-loader-growing",
        },
        {
          name: "9 Random grid",
          component: NineDotGridRandom,
          slugPreviewFile: "three-dot-loader-growing",
        },
      ],
      name: "Three Dot Simple Loader",
      description: "A simple loader with three dots that bounce up and down.",
    },
    {
      sizePreview: "sm",
      slug: "spinner-loader",
      variantList: [
        {
          name: "Spinner",
          component: SpinnerLoader,
          slugPreviewFile: "spinner-loader",
        },
        {
          name: "Circular Bars",
          component: CircularBarsSpinnerLoaderPreview,
          slugPreviewFile: "circular-bars-spinner-loader.preview",
          slugComponentFile: "circular-bars-spinner-loader",
        },
        {
          name: "Dual Ring",
          component: DualRingSpinnerLoader,
          slugPreviewFile: "dual-ring-spinner-loader",
        },
      ],
      name: "Spinner Loader",
      description: "A simple circular loader",
    },
  ],
};

export default loadersCategory;
