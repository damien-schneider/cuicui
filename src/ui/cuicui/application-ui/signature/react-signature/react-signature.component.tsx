import type { ComponentType } from "#/src/lib/types/component";
import PreviewReactSignature from "#/src/ui/cuicui/application-ui/signature/react-signature/preview-react-signature";

export const reactSignatureComponent: ComponentType = {
  title: "React Signature",
  slug: "react-signature",
  description: "A signature component for React.",
  sizePreview: "sm",
  lastUpdatedDateComponent: new Date("2024-09-24"),
  variantList: [
    {
      name: "Default",
      component: <PreviewReactSignature />,
      slugPreviewFile: "preview-react-signature",
      slugComponentFile: "react-signature",
    },
  ],
};
