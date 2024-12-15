import { SignatureIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const signatureCategory: CategoryMetaType = {
  name: "Signature",
  description: "Signature components",
  releaseDateCategory: new Date("2024-09-24"),
  icon: SignatureIcon,
};

export default signatureCategory;
