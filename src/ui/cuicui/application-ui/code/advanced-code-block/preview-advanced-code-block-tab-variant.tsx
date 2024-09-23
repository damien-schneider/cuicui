import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import { AdvancedCodeBlock } from "#/src/ui/cuicui/application-ui/code/advanced-code-block/advanced-code-block";

const codeToDisplay = [
  {
    slug: "Explanations",
    fileName: "./explanations.ts",
    code: `export const = explanations = {
main : "This component needs more than the default code block to be displayed"
detailed : "For now, if you want the exact same behaviour, please check the github"
}`,
    lang: "typescript",
  },
  {
    slug: "Example",
    fileName: "./example.ts",
    code: `let b = 2 + 1
console.log(b)

function test() {
  return b
}`,
    lang: "typescript",
  },
] as const;

export default function PreviewAdvancedCodeBlockTabVariant() {
  return (
    <div className="p-2 max-w-2xl w-full">
      <Tabs.Root
        defaultValue={codeToDisplay[0].slug}
        className="relative bg-neutral-200/70 dark:bg-[rgb(33,33,38)] rounded-2xl"
      >
        <Tabs.List
          className="flex relative border-b dark:border-b-white/5 border-b-white mb-1 before:h-px before:absolute before:bottom-0 before:w-full before:border-b dark:before:border-black/70 before:border-black/10"
          style={{ scrollbarWidth: "none" }}
          role="tablist"
          aria-orientation="horizontal"
        >
          {codeToDisplay.map((code) => (
            <Tabs.Trigger
              key={code.slug}
              value={code.slug}
              className="group relative font-medium text-sm dark:text-zinc-400 text-zinc-500 transition-colors pt-3 pr-2 pb-2 pl-2 data-[state=active]:text-sky-500 dark:data-[state=active]:text-[rgb(93,227,255)] "
            >
              {code.slug}
              <div
                className="absolute  left-2 right-2 -bottom-px rounded-full h-0.5 dark:h-px  dark:bg-[rgb(93,227,255)] bg-sky-400 opacity-0 transition group-data-[state=active]:opacity-100 group-data-[state=active]:scale-100 scale-x-0"
                style={{
                  boxShadow: "0px 0px 10px 1px rgba(93,227,255,0.5)",
                }}
              />
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {codeToDisplay.map((code) => (
          <Tabs.Content key={code.slug} value={code.slug}>
            <AdvancedCodeBlock
              className=" bg-transparent rounded-t-none"
              fileName={code.fileName}
              code={code.code}
              lang={code.lang}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
