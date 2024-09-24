import { SignatureIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import PreviewReactSignature from "#/src/ui/cuicui/application-ui/signature/react-signature/preview-react-signature";
import { reactSignatureComponent } from "#/src/ui/cuicui/application-ui/signature/react-signature/react-signature.component";

export const signatureCategory: CategoryType = {
  slug: "signature",
  name: "Signature",
  description: "Signature components",
  releaseDateCategory: new Date("2024-09-24"),
  icon: SignatureIcon,
  previewCategory: {
    component: <PreviewReactSignature />,
    previewScale: 1,
  },
  componentList: [reactSignatureComponent],
};
