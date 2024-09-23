import Link from "next/link";
import React, { type ReactNode } from "react";
import { toast } from "sonner";
import { CodeContainer } from "#/src/ui/code-command-container";
import { Button } from "#/src/ui/shadcn/button";
import { StaticStep } from "#/src/ui/stepper";
import { cn } from "#/src/utils/cn";

export type PackageToInstallType = {
  idSlug: string;
  title: string;
  find: string[];
  packageName: string;
};

export type StepToInstallType = {
  idSlug: string;
  title: string;
  find: string[];
  installProcess: JSX.Element;
};

const possibleStepsList: StepToInstallType[] = [
  {
    idSlug: "cn",
    title: "Add the cn util file to your project",
    find: [`import { cn } from "#/src/utils/cn"`],
    installProcess: (
      <div>
        <p className="caption-sm mb-2">./src/utils/cn.ts</p>
        <CodeContainer isCommand={false}>{`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</CodeContainer>
        {/* <p className="caption-sm mb-2">
          See the how to install in the Getting Started page
        </p>
        <Button asChild>
          <Link href="/getting-started#cn-function">
            Go to the Getting Started page
          </Link>
        </Button> */}
      </div>
    ),
  },
];

const possiblePackagesToInstall: PackageToInstallType[] = [
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
];

export default function StepToInstall({ code }: Readonly<{ code: string }>) {
  function getPackageNameListToInstall(code: string) {
    const packageListToInstall: string[] = [];

    for (const installStep of possiblePackagesToInstall) {
      if (installStep.find.some((find) => code.includes(find))) {
        if (installStep.packageName) {
          packageListToInstall.push(installStep.packageName);
        }
      }
    }

    if (packageListToInstall.length === 0) {
      return null;
    }
    return packageListToInstall;
  }

  function getPossibleStepsList(code: string) {
    const stepList: StepToInstallType[] = [];

    for (const step of possibleStepsList) {
      if (step.find.some((find) => code.includes(find))) {
        stepList.push(step);
      }
    }
    if (stepList.length === 0) {
      return null;
    }
    return stepList;
  }

  const packageListStringToInstall =
    getPackageNameListToInstall(code)?.join(" ");

  const stepList = getPossibleStepsList(code);

  if (packageListStringToInstall || stepList) {
    return (
      <div className="flex flex-col gap-2 p-4">
        <h4 className="header-4">Steps needed for this component</h4>
        {stepList?.map((step, index) => (
          <StaticStep key={step.idSlug} step={1} title={step.title}>
            {step.installProcess}
          </StaticStep>
        ))}
        {packageListStringToInstall && (
          <StaticStep
            step={(stepList?.length ?? 0) + 1}
            title="Install the required packages"
          >
            <CodeContainer isCommand>
              {packageListStringToInstall}
            </CodeContainer>
          </StaticStep>
        )}
        <StaticStep
          step={(stepList?.length ?? 0) + 2}
          title="Copy paste the component"
        >
          <Button
            onClick={() => {
              navigator.clipboard.writeText(code);
              toast.success("Copied the code");
            }}
          >
            Copy the component code
          </Button>
        </StaticStep>
        <StaticStep
          step={(stepList?.length ?? 0) + 3}
          title={
            "Update the import paths (if needed), to match your project setup."
          }
        />
      </div>
    );
  }
  return (
    <div className="p-4">
      <p className="caption-sm mb-2">
        Nothing is needed to install, just copy paste the code :
      </p>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(code);
          toast.success("Copied the code");
        }}
      >
        Copy the component code
      </Button>
    </div>
  );
}
