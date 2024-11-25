import { AudioLinesIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";

export const useSpeechToTextCategory: SingleComponentCategoryType = {
  slug: "use-speech-to-text",
  name: "Use Speech to Text",
  description: "A hook that allows you to convert speech to text",
  releaseDateCategory: new Date("2024-09-28"),
  icon: AudioLinesIcon,
  comingSoonCategory: true,
  component: null,
  // component: {
  //   lastUpdatedDateComponent: new Date("2024-08-28"),
  //   sizePreview: "lg",

  //   isIframed: true,

  //   variantList: [
  //     {
  //       name: "variant 1",
  //       component: <PreviewUseTextToSpeech />,
  //       slugComponentFile: "use-text-to-speech",
  //       slugPreviewFile: "preview-text-to-speech",
  //     },
  //   ],
  // },
};
