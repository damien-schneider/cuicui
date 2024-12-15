import { VideoIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useVideoCategory: CategoryMetaType = {
  name: "Use Video",
  description:
    "A hook that provides a video player functionality to your application",
  releaseDateCategory: new Date("2024-10-06"),
  icon: VideoIcon,
};

export default useVideoCategory;
