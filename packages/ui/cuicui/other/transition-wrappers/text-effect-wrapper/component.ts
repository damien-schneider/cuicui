import type { ComponentMetaType } from "@/lib/types/component";

export const textEffectWrapperComponent: ComponentMetaType = {
  name: "Text effect wrapper",
  description:
    "A transition wrapper that makes a text appear with a fade effect per character!",
  isIframed: true,
  sizePreview: "sm",
  inspiration: "Motion Primitives",
  inspirationLink: "https://motion.primitives.mattcowley.co.uk/",
  rerenderButton: true,
};

export default textEffectWrapperComponent;
