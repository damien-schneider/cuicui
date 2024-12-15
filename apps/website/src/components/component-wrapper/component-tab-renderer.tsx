import * as Tabs from "@radix-ui/react-tabs";

import "./full-component.css";

import { ComponentWrapper } from "#/src/components/component-wrapper/component-wrapper";
import type {
  NewComponentType,
  NewVariantType,
} from "@cuicui/ui/lib/types/component";
import CodeHighlighter from "#/src/ui/code-highlighter";
import {} from "#/src/ui/shadcn/resizable";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "#/src/ui/shadcn/scrollarea";
import { cn } from "#/src/utils/cn";
import { getContainerHeightClass } from "#/src/components/component-wrapper/get-container-height-class";
import { createElement } from "react";
import {
  getCuicuiDependenciesInfo,
  readFileContent,
} from "#/src/utils/get-code-from-path";
import StepToInstall from "#/src/components/steps-to-install/step-to-install";

export default async function ComponentTabRenderer({
  component,
  variant,
}: {
  component: NewComponentType;
  variant: NewVariantType;
}) {
  const variantCode = await readFileContent(variant.pathname);
  if (!variantCode) {
    return (
      <p className="p-12 mt-6 bg-red-400/20 border border-red-400 text-red-400 rounded-lg">
        No variants found, this is probably an error, please report it as an
        issue on github
      </p>
    );
  }

  const componentDependencies = await getCuicuiDependenciesInfo(variantCode);

  const cuicuiDependenciesTabs = componentDependencies.map((dep) => ({
    name: dep.fileName,
    value: dep.fileNameWithoutExtension,
    code: dep.content,
  }));

  const tabs = [
    {
      name: "Preview",
      value: "preview",
      code: null,
    },
    {
      name: "Preview Code",
      value: "code-preview",
      code: variantCode,
    },
    ...cuicuiDependenciesTabs,
  ];
  return (
    <Tabs.Root defaultValue="preview" id="variants-tabs" itemID="variants-tabs">
      {/* <pre>{JSON.stringify(tabs, null, 2)}</pre>
      <pre>{JSON.stringify(componentDependencies, null, 2)}</pre> */}
      <Tabs.List
        className={cn(
          "flex w-full items-center p-0.5 *:w-full *:py-2 *:data-[state=active]:rounded-lg *:data-[state=active]:border-neutral-500/20 *:data-[state=active]:bg-neutral-400/15 *:data-[state=active]:text-neutral-900",
        )}
      >
        {tabs.map((tab) => {
          // if (
          //   (tab.value === "code-preview" && variantCode) ||
          //   (tab.value === "code-component" && componentCode) ||
          //   tab.value === "preview"
          // ) {
          return (
            <Tabs.Trigger
              className={cn(
                "group relative flex items-center justify-center pt-3 pr-2 pb-2 pl-2 font-medium text-sm tracking-tighter transition-colors",
                // after pseudo element
                "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:rounded-full",
                // after pseudo element gradient
                "after:bg-gradient-to-r after:from-sky-400 after:via-violet-500 after:to-orange-400 ",
                // after pseudo element animation
                "after:scale-x-0 after:transform-gpu after:transition-transform after:duration-300 data-[state=active]:after:scale-x-100",
                "hover:after:scale-x-50",
              )}
              key={tab.value}
              value={tab.value}
            >
              <span className="w-fit scale-100 transform-gpu bg-gradient-to-br from-neutral-800 to-neutral-400 bg-clip-text p-1 font-medium text-transparent transition-transform group-hover:scale-110 group-data-[state=active]:from-sky-400 group-data-[state=active]:via-violet-500 group-data-[state=active]:to-orange-400 dark:from-neutral-300 dark:to-neutral-600 ">
                {tab.name}
              </span>
            </Tabs.Trigger>
          );
          // }
        })}
      </Tabs.List>

      {tabs.map((tab) => {
        if (tab.value === "preview") {
          return (
            <Tabs.Content value="preview" asChild={true} key={tab.value}>
              <PreviewTab
                key={tab.value}
                component={component}
                variant={variant}
              />
            </Tabs.Content>
          );
        }
        if (tab.code) {
          return (
            <Tabs.Content key={tab.value} value={tab.value}>
              <CodeTab code={tab.code} component={component} />
            </Tabs.Content>
          );
        }
      })}
    </Tabs.Root>
  );
}

const CodeTab = ({
  code,
  component,
}: { code: string; component: NewComponentType }) => {
  return (
    <>
      <ScrollArea
        // With a dynamic height, the code take its full size wich is a weird behaviour
        className={cn(
          "w-full rounded-md border border-neutral-500/20 bg-neutral-100 dark:bg-neutral-900",

          getContainerHeightClass({
            size: component.meta.sizePreview ?? "md",
          }),
        )}
      >
        <ScrollAreaViewport className="p-3">
          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
          <CodeHighlighter code={code} />
        </ScrollAreaViewport>
      </ScrollArea>
      <StepToInstall code={code} />
    </>
  );
};

const PreviewTab = ({
  component,
  variant,
}: {
  component: NewComponentType;
  variant: NewVariantType;
}) => {
  if (component.meta.isResizable) {
    return (
      <div>
        {/* // <ResizablePanelGroup
          //   className={cn(
          //     // "flex h-full w-full items-center justify-center",
          //     // getContainerChildClassBasedOnSize(size),
          //   )}
          //   direction="horizontal"
          // > */}
        {/* <ResizablePanel
            defaultSize={100}
            > */}
        {/* {rerenderButton && <rerenderButton setRender={setRender} />} */}
        {/* <p>
								{`/preview/${componentParams.sectionSlug}/${componentParams.categorySlug}/${componentParams.componentSlug}/${componentParams.variantSlug}`}
							</p>
							<iframe
								className="w-full h-full"
								title="component-preview"
								src={`/preview/${componentParams.sectionSlug}/${componentParams.categorySlug}/${componentParams.componentSlug}/${componentParams.variantSlug}`}
							/> */}
        <ComponentWrapper
          isIframed={component.meta.isIframed ?? false}
          renderButton={component.meta.rerenderButton}
          size={component.meta.sizePreview ?? "md"}
          // key={render}
        >
          {createElement(variant.variantComponent)}
        </ComponentWrapper>
        {/* </ResizablePanel> */}
        {/* <ResizableHandle
              className="-translate-x-2 z-50"
              withHandle={true}
            /> */}
        {/* // <ResizablePanel defaultSize={1}>
            //   <div className="flex h-full items-center justify-center" />
            // </ResizablePanel>
          // </ResizablePanelGroup> */}
      </div>
    );
  }
  return (
    <ComponentWrapper
      isIframed={component.meta.isIframed ?? false}
      renderButton={component.meta.rerenderButton}
      size={component.meta.sizePreview ?? "md"}
      // key={render}
    >
      {createElement(variant.variantComponent)}
    </ComponentWrapper>
  );
};
