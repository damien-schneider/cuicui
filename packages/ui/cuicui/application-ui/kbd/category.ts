import { CommandIcon } from "lucide-react";
import type { CategoryMetaType } from "@/lib/types/component";

export const kbdCategory: CategoryMetaType = {
  name: "Keyboard",
  description: "Keyboard components with various styles",
  releaseDateCategory: new Date("2024-08-13"),
  icon: CommandIcon,
};

export default kbdCategory;
