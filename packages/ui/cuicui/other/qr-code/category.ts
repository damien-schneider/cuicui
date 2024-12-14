import { QrCodeIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const qrCodeCategory: CategoryMetaType = {
  name: "QR Code",
  description: "QR Code components to scan and generate QR codes",
  releaseDateCategory: new Date("2024-09-24"),
  icon: QrCodeIcon,
};
export default qrCodeCategory;
