import type { ComponentType } from "@/lib/types/component";
import PreviewReactSignature from "@/cuicui/application-ui/signature/react-signature/react-signature.variant";

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
};
