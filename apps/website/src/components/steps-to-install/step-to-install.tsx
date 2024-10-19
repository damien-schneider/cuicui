import CopyToClipboardButton from "@/src/components/component-wrapper/copy-to-clipboard-button";
import type { StepToInstallType } from "@/src/components/steps-to-install/packages";
import { packageCheckListToInstall } from "@/src/lib/generated-package-check-list-to-install";
import { CodeContainer } from "@/src/ui/code-command-container";
import { StaticStep } from "@/src/ui/stepper";

const possibleStepsList: StepToInstallType[] = [
  {
    idSlug: "cn",
    title: "Add the cn util file to your project",
    find: [`import { cn } from "@/src/utils/cn"`],
    installProcess: (
      <div>
        <p className="caption-sm mb-2">./src/utils/cn.ts</p>
        <CodeContainer isCommand={false}>{`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</CodeContainer>
      </div>
    ),
  },
];

export default function StepToInstall({ code }: Readonly<{ code: string }>) {
  function getPackageNameListToInstall(code: string) {
    const packageListToInstall: string[] = [];

    for (const installStep of packageCheckListToInstall) {
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
        {stepList?.map((step, _index) => (
          <StaticStep key={step.idSlug} step={1} title={step.title}>
            {step.installProcess}
          </StaticStep>
        ))}
        {packageListStringToInstall && (
          <StaticStep
            step={(stepList?.length ?? 0) + 1}
            title="Install the required packages"
          >
            <CodeContainer isCommand={true}>
              {packageListStringToInstall}
            </CodeContainer>
          </StaticStep>
        )}
        <StaticStep
          step={(stepList?.length ?? 0) + 2}
          title="Copy paste the component"
        >
          <CopyToClipboardButton code={code} />
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
      <CopyToClipboardButton code={code} />
    </div>
  );
}
