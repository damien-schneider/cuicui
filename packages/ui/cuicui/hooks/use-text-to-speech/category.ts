import { SpeechIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const useTextToSpeechCategory: CategoryMetaType = {
  name: "Use Text to Speech",
  description: "A hook that allows you to convert text to speech",
  releaseDateCategory: new Date("2024-09-28"),
  isComingSoon: true,
  icon: SpeechIcon,
};

export default useTextToSpeechCategory;
