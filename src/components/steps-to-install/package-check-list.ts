import type { PackageToInstallType } from "#/src/components/steps-to-install/packages";

export const packageCheckListToInstall: PackageToInstallType[] = [
  {
    idSlug: "framer-motion",
    title: "Add framer-motion to your project",
    find: [`from "framer-motion"`],
    packageName: "framer-motion",
  },
  {
    idSlug: "shiki",
    title: "Add shiki to your project",
    find: [`from "shiki"`],
    packageName: "shiki",
  },
  {
    idSlug: "cn-util",
    title: "Add the cn util file to your project",
    find: [`import { cn } from "#/src/utils/cn"`],
    packageName: "clsx tailwind-merge ",
  },
  {
    idSlug: "lucide-react",
    title: "Add lucide-react to your project",
    find: [`from "lucide-react"`],
    packageName: "lucide-react",
  },
  {
    idSlug: "sonner",
    title: "Add sonner to your project",
    find: [`from "sonner"`],
    packageName: "sonner",
  },
  {
    idSlug: "tailwind-merge",
    title: "Add tailwind-merge to your project",
    find: [`from "tailwind-merge"`],
    packageName: "tailwind-merge",
  },
  {
    idSlug: "embla-carousel-react",
    title: "Add embla-carousel-react to your project",
    find: [`from "embla-carousel-react"`],
    packageName: "embla-carousel-react",
  },
  {
    idSlug: "clsx",
    title: "Add clsx to your project",
    find: [`from "clsx"`],

    packageName: "clsx",
  },
  {
    idSlug: "class-variance-authority",
    title: "Add class-variance-authority to your project",
    find: [`from "class-variance-authority"`],
    packageName: "class-variance-authority",
  },
  // --- Radix Primitives ---
  {
    idSlug: "radix-ui/react-tabs",
    title: "Add @radix-ui/react-tabs to your project",
    find: [`from "@radix-ui/react-tabs"`],
    packageName: "@radix-ui/react-tabs",
  },
  {
    idSlug: "radix-ui/react-popover",
    title: "Add @radix-ui/react-popover to your project",
    find: [`from "@radix-ui/react-popover"`],
    packageName: "@radix-ui/react-popover",
  },
  {
    idSlug: "radix-ui/react-dialog",
    title: "Add @radix-ui/react-dialog to your project",
    find: [`from "@radix-ui/react-dialog"`],
    packageName: "@radix-ui/react-dialog",
  },
  {
    idSlug: "uiw/react-signature",
    title: "Add @uiw/react-signature to your project",
    find: [`from "@uiw/react-signature"`],
    packageName: "@uiw/react-signature",
  },
];
