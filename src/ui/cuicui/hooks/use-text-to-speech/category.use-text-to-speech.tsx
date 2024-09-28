import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { SpeechIcon } from "lucide-react";

export const useTextToSpeechCategory: SingleComponentCategoryType = {
  slug: "use-text-to-speech",
  name: "Use Text to Speech",
  description: "A hook that allows you to convert text to speech",
  releaseDateCategory: new Date("2024-09-28"),
  icon: SpeechIcon,
  // previewCategory: {
  //   component: <PreviewUseTextToSpeech />,
  //   previewImage: PreviewImageUseTextToSpeech,
  //   previewScale: 0.8,
  // },
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
