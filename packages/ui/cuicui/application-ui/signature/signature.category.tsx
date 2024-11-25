import { SignatureIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { reactSignatureComponent } from "@/cuicui/application-ui/signature/react-signature/react-signature.component";

export const signatureCategory: CategoryType = {
  slug: "signature",
  name: "Signature",
  description: "Signature components",
  releaseDateCategory: new Date("2024-09-24"),
  icon: SignatureIcon,
  componentList: [reactSignatureComponent],
};
