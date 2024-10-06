import { SpeechIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";
import { PreviewUseTextToSpeech } from "#/src/ui/cuicui/hooks/use-text-to-speech/preview.use-text-to-speech";
import { PreviewUseTextToSpeechAdvancedDemo } from "#/src/ui/cuicui/hooks/use-text-to-speech/preview.advanced-demo";
import PreviewUseTextToSpeechImage from "#/src/assets/components-preview/use-text-to-speech.png";
export const useTextToSpeechCategory: SingleComponentCategoryType = {
  slug: "use-text-to-speech",
  name: "Use Text to Speech",
  description: "A hook that allows you to convert text to speech",
  releaseDateCategory: new Date("2024-09-28"),
  icon: SpeechIcon,
  previewCategory: {
    component: <PreviewUseTextToSpeech />,
    previewImage: PreviewUseTextToSpeechImage,
    previewScale: 0.8,
  },
  component: {
    lastUpdatedDateComponent: new Date("2024-10-06"),
    sizePreview: "lg",
    isIframed: false,
    variantList: [
      {
        name: "With highlight",
        component: <PreviewUseTextToSpeech />,
        slugPreviewFile: "preview.use-text-to-speech",
      },
      {
        name: "Advanced Demo",
        component: <PreviewUseTextToSpeechAdvancedDemo />,
        slugPreviewFile: "preview.advanced-demo",
      },
    ],
  },
};
