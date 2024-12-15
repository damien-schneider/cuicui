import { AudioLinesIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useSpeechToTextCategory: CategoryMetaType = {
  name: "Use Speech to Text",
  description: "A hook that allows you to convert speech to text",
  releaseDateCategory: new Date("2024-09-28"),
  icon: AudioLinesIcon,
  isComingSoon: true,
};

export default useSpeechToTextCategory;
