"use client";
import type { ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn";

const dataSteps = [
  {
    title: "Step 1",
    code: "npx create-react-app my-app",
  },
  {
    title: "Step 2",
    code: "cd my-app",
  },
  {
    title: "Step 3",
    code: "npm start",
  },
  {
    title: "Step 4",
    code: "npm run build",
  },
];

export const StepWithStickyColorVariant1 = () => {
  return (
    <div className="w-full max-w-2xl p-4">
      {dataSteps.map((step, index) => (
        <StaticStep key={step.title} step={index + 1} title={step.title}>
          <CodeContainer>{step.code}</CodeContainer>
        </StaticStep>
      ))}
    </div>
  );
};

const StaticStep = ({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex gap-6 ">
      <div className="flex flex-col items-center">
        <p className="flex size-8 flex-none select-none items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-100 font-medium text-neutral-700 text-sm dark:border-neutral-400/10 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80">
          {step}
        </p>
        <div className="relative my-2 h-full w-px rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </div>
      <div className="mb-4 w-full">
        <h6 className="mb-4 ml-1 font-medium text-lg text-neutral-700 tracking-tight dark:text-neutral-50">
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
};

const CodeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-fit w-full rounded-lg border border-neutral-400/20 bg-neutral-100 px-5 py-3 transition-colors duration-300 dark:border-neutral-400/10 dark:bg-neutral-800 dark:hover:bg-neutral-800/80">
      <code
        className={cn(
          "whitespace-pre-wrap text-neutral-500 text-sm dark:text-neutral-300",
        )}
      >
        {children}
      </code>
    </div>
  );
};

export default StepWithStickyColorVariant1;
