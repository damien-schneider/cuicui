import { VideoIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseVideo } from "@/cuicui/hooks/use-video/preview.use-video";

export const useVideoCategory: SingleComponentCategoryType = {
  slug: "use-video",
  name: "Use Video",
  description:
    "A hook that provides a video player functionality to your application",
  releaseDateCategory: new Date("2024-10-06"),
  icon: VideoIcon,
  previewCategory: {
    component: <PreviewUseVideo />,
    previewScale: 0.8,
  },
  component: {
    sizePreview: "md",
    variantList: [
      {
        name: "default variant",
        component: <PreviewUseVideo />,
        slugComponentFile: "use-video",
        slugPreviewFile: "preview.use-video",
      },
    ],
  },
};
