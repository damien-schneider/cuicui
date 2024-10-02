import type { ComponentType } from "#/src/lib/types/component";
import PreviewReactSignature from "#/src/ui/cuicui/application-ui/signature/react-signature/preview-react-signature";

export const reactSignatureComponent: ComponentType = {
  name: "React Signature",
  slug: "react-signature",
  description: "A signature component for React.",
  sizePreview: "sm",
  variantList: [
    {
      name: "Default",
      component: <PreviewReactSignature />,
      slugPreviewFile: "preview-react-signature",
      slugComponentFile: "react-signature",
    },
  ],
  lastUpdatedDateComponent: new Date("2024-09-24"),
};
