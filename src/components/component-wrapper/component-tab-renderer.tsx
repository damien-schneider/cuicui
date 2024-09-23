import * as Tabs from "@radix-ui/react-tabs";

import "./full-component.css";

import type React from "react";
import { Fragment } from "react";
import {
  ComponentWrapper,
  getContainerHeightClass,
} from "#/src/components/component-wrapper/component-wrapper";
import StepToInstall from "#/src/components/component-wrapper/step-to-install";
import type {
  ComponentHeightType,
  VariantComponent,
} from "#/src/lib/types/component";
import CodeHighlighter from "#/src/ui/code-highlighter";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "#/src/ui/shadcn/resizable";
import { ScrollArea, ScrollBar } from "#/src/ui/shadcn/scrollarea";
import { cn } from "#/src/utils/cn";
const tabs = [
  {
    name: "Preview",
    value: "preview",
  },
  {
    name: "Preview Code",
    value: "code-preview",
  },
  {
    name: "Component Code",
    value: "code-component",
  },
];
export default function ComponentTabRenderer({
  name,
  component,
  previewCode,
  componentCode,
  isResizable,
  rerenderButton,
  isIframed,
  size,
  isChildUsingHeightFull,
}: {
  isResizable?: boolean;
  rerenderButton?: boolean;
  isIframed?: boolean;
  size: ComponentHeightType;
  isChildUsingHeightFull?: boolean;
} & VariantComponent) {
  return (
    <Tabs.Root defaultValue="preview" itemID="variants-tabs" id="variants-tabs">
      <Tabs.List
        className={cn(
          "p-0.5 flex items-center w-full *:py-2 *:w-full  *:data-[state=active]:bg-neutral-400/15 *:data-[state=active]:text-neutral-900 *:data-[state=active]:rounded-lg *:data-[state=active]:border-neutral-500/20",
        )}
      >
        {tabs.map((tab) => {
          if (
            (tab.value === "code-preview" && previewCode) ||
            (tab.value === "code-component" && componentCode) ||
            tab.value === "preview"
          ) {
            return (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  "group relative font-medium text-sm transition-colors flex items-center justify-center  tracking-tighter pt-3 pr-2 pb-2 pl-2",
                  // after pseudo element
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:rounded-full",
                  // after pseudo element gradient
                  "after:bg-gradient-to-r after:from-sky-400 after:via-violet-500 after:to-orange-400 ",
                  // after pseudo element animation
                  "after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:transform-gpu after:duration-300",
                  "hover:after:scale-x-50",
                )}
              >
                <span className="group-data-[state=active]:from-sky-400 group-data-[state=active]:via-violet-500 group-data-[state=active]:to-orange-400 dark:from-neutral-300 dark:to-neutral-600 from-neutral-800 to-neutral-400 bg-clip-text text-transparent bg-gradient-to-br font-medium p-1 group-hover:scale-110 scale-100 transition-transform transform-gpu w-fit ">
                  {tab.name}
                </span>
              </Tabs.Trigger>
            );
          }
        })}
      </Tabs.List>
      <Tabs.Content value="preview">
        {isResizable ? (
          <ResizablePanelGroup
            direction="horizontal"
            className={cn(
              "w-full flex items-center justify-center h-full",
              // getContainerChildClassBasedOnSize(size),
            )}
          >
            <ResizablePanel
              defaultSize={100}
              className="dark:bg-[#101010] bg-neutral-50 rounded-md border border-neutral-500/20 relative"
            >
              {/* {rerenderButton && <RerenderButton setRender={setRender} />} */}

              <ComponentWrapper
                isIframed={isIframed}
                size={size}
                renderButton={rerenderButton ?? false}
                isChildUsingHeightFull={isChildUsingHeightFull}
                // key={render}
              >
                {component ?? <p>An error has occured</p>}
              </ComponentWrapper>
            </ResizablePanel>
            <ResizableHandle withHandle className="-translate-x-2 z-50" />
            <ResizablePanel defaultSize={0}>
              <div className="flex h-full items-center justify-center" />
            </ResizablePanel>
          </ResizablePanelGroup>
        ) : (
          <ComponentWrapper
            isIframed={isIframed}
            size={size}
            renderButton={rerenderButton ?? false}
            isChildUsingHeightFull={isChildUsingHeightFull}
            // key={render}
          >
            {component ?? <p>An error has occured</p>}
          </ComponentWrapper>
        )}
      </Tabs.Content>
      {["code-preview", "code-component"].map((tab) => {
        if (
          (tab === "code-preview" && previewCode) ||
          (tab === "code-component" && componentCode)
        ) {
          return (
            <Tabs.Content key={tab} value={tab}>
              <ScrollArea
                // With a dynamic height, the code take its full size wich is a weird behaviour
                className={cn(
                  "w-full rounded-md bg-neutral-100 dark:bg-neutral-900  border border-neutral-500/20",

                  getContainerHeightClass({ size }),
                )}
                classNameViewport="p-3"
              >
                <ScrollBar orientation="vertical" />
                <ScrollBar orientation="horizontal" />
                {tab === "code-preview" && (
                  <CodeHighlighter code={previewCode} />
                )}
                {tab === "code-component" && componentCode && (
                  <CodeHighlighter code={componentCode} />
                )}
              </ScrollArea>
              {tab === "code-preview" && (
                <StepToInstall code={previewCode ?? ""} />
              )}
              {tab === "code-component" && (
                <StepToInstall code={componentCode ?? ""} />
              )}
            </Tabs.Content>
          );
        }
      })}
    </Tabs.Root>
  );
}
