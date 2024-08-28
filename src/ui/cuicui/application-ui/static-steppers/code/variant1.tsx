"use client";
import { motion, useScroll } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "#/src/utils/cn";

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
      <div className="flex-col flex items-center">
        <p className="flex items-center justify-center size-8 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 text-sm font-medium select-none flex-none text-neutral-700 dark:text-neutral-50 border-neutral-400/20 border dark:border-neutral-400/10">
          {step}
        </p>
        <div className="w-px h-full relative rounded-full bg-neutral-200 dark:bg-neutral-700 my-2" />
      </div>
      <div className="mb-4 w-full">
        <h6 className="text-lg ml-1 font-medium tracking-tight mb-4 text-neutral-700 dark:text-neutral-50">
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
};

const CodeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-fit bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 transition-colors duration-300 rounded-lg px-5 py-3 border border-neutral-400/20 dark:border-neutral-400/10">
      <code
        className={cn(
          "text-neutral-500 dark:text-neutral-300 text-sm  whitespace-pre-wrap",
        )}
      >
        {children}
      </code>
    </div>
  );
};
