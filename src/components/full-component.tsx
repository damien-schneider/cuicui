"use client";

import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import { RepeatIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import { ComponentBadgeList } from "../lib/badges.const";
import type {
  ComponentBadgeSlug,
  FrameworkBadge,
  LibraryBadge,
  VariantComponent,
} from "../lib/types/component";
import Badge from "../ui/badge";
import CodeHighlighter from "../ui/code-highlighter";
import { Button } from "../ui/shadcn/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/shadcn/resizable";
import { ScrollArea, ScrollBar } from "../ui/shadcn/scrollarea";

import { cn } from "../utils/cn";
import BadgeList from "./badge-list";
import StepToInstall from "./component-wrapper/step-to-install";
import CustomIframeComponentDark from "./custom-iframe-component-dark";
import CustomIframeComponentLight from "./custom-iframe-component-light";

export type TabType = "visual" | "code";
export type ComponentHeightType = "xs" | "sm" | "md" | "lg" | "xl";

// TODO : Use context to refactor everything into multiple components

export default function FullComponent({
  componentList,
  title,
  description,
  inspiration,
  inspirationLink,
  size = "md",
  frameworksBadges,
  librariesBadges,
  componentBadges,
  isIframed = true,
  isResizable = true,
  rerenderButton = false,
  isChildUsingHeightFull = false,
}: Readonly<{
  componentList: VariantComponent[];
  title: string;
  description: string;
  inspiration?: string;
  inspirationLink?: string;
  size?: ComponentHeightType;
  frameworksBadges?: FrameworkBadge[];
  librariesBadges?: LibraryBadge[];
  componentBadges?: ComponentBadgeSlug[];
  isIframed?: boolean;
  isResizable?: boolean;
  rerenderButton?: boolean;
  isChildUsingHeightFull?: boolean;
}>) {
  const [tab, setTab] = useState<TabType>("visual");

  const [selectedVariant, setSelectedVariant] = useState(1);
  const { resolvedTheme } = useTheme();
  const [render, setRender] = useState(0);

  const handleTabChange = useCallback((newTab: TabType) => {
    setTab(newTab);
  }, []);

  const renderedComponent = useMemo(
    () => getComponentToDisplay(componentList, selectedVariant),
    [componentList, selectedVariant],
  );

  const codeToDisplay = useMemo(
    () => getCodeToDisplay(componentList, selectedVariant),
    [componentList, selectedVariant],
  );

  return (
    <div className="space-y-6">
      {componentBadges && componentBadges.length !== 0 && (
        <div className="flex items-center gap-2">
          {ComponentBadgeList.filter((badge) =>
            componentBadges.includes(badge.slug),
          ).map((badge) => (
            <Badge variant="lime" size="sm" key={badge.slug}>
              {badge.name}
            </Badge>
          ))}
        </div>
      )}
      <div>
        <h2 className="header-2">{title}</h2>
        <p className="caption-sm">{description}</p>
      </div>
      {librariesBadges && librariesBadges.length !== 0 && (
        <BadgeList title="Required librairies :" badgeList={librariesBadges} />
      )}
      {frameworksBadges && frameworksBadges.length !== 0 && (
        <BadgeList title="Used frameworks :" badgeList={frameworksBadges} />
      )}

      <div>
        {componentList.length > 1 && (
          <div>
            <p className="caption-xs">Variants:</p>
            <div className="py-1 mt-1">
              <ScrollArea className=" w-full rounded-md">
                <ScrollAreaScrollbar orientation="horizontal" />
                <div className="flex gap-2">
                  {componentList.map((variant, index) => (
                    <Button
                      key={`${index}-${variant.variantName}`}
                      variant={
                        selectedVariant === index + 1 ? "neutral" : "hover-only"
                      }
                      className="flex-nowrap"
                      onClick={() => setSelectedVariant(index + 1)}
                    >
                      {variant.variantName}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        )}
        <div
          className={cn(
            "rounded-lg border border-neutral-500/20 p-0.5",
            tab === "visual" &&
              "flex items-center flex-col justify-center overflow-hidden",
          )}
        >
          <div className="flex gap-2 rounded-lg w-full mb-0.5">
            <Button
              variant={tab === "visual" ? "neutral" : "hover-only"}
              className="w-full"
              onClick={() => handleTabChange("visual")}
            >
              Visual
            </Button>
            <Button
              variant={tab === "code" ? "neutral" : "hover-only"}
              className="w-full"
              onClick={() => handleTabChange("code")}
            >
              Code
            </Button>
          </div>
          {tab === "visual" ? (
            isResizable ? (
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
                  {rerenderButton && <RerenderButton setRender={setRender} />}

                  <ComponentWrapper
                    isIframed={isIframed}
                    size={size}
                    renderButton={rerenderButton}
                    isChildUsingHeightFull={isChildUsingHeightFull}
                    key={render}
                  >
                    {renderedComponent ?? <p>An error has occured</p>}
                  </ComponentWrapper>
                </ResizablePanel>
                <ResizableHandle withHandle className="-translate-x-2" />
                <ResizablePanel defaultSize={0}>
                  <div className="flex h-full items-center justify-center" />
                </ResizablePanel>
              </ResizablePanelGroup>
            ) : (
              <ComponentWrapper
                isIframed={isIframed}
                size={size}
                renderButton={rerenderButton}
                isChildUsingHeightFull={isChildUsingHeightFull}
                key={render}
              >
                {renderedComponent ?? <p>An error has occured</p>}
              </ComponentWrapper>
            )
          ) : (
            <>
              <ScrollArea
                // With a dynamic height, the code take its full size wich is a weird behaviour
                classNameViewport={cn(
                  "w-full rounded-md bg-neutral-100 dark:bg-neutral-900  border border-neutral-500/20",
                  getContainerHeightClass({ size }),
                )}
              >
                <ScrollBar orientation="horizontal" />
                <CodeHighlighter
                  classNameContainer={"p-2"}
                  code={codeToDisplay ?? "An error has occured"}
                />
              </ScrollArea>
              {codeToDisplay && <StepToInstall code={codeToDisplay} />}
            </>
          )}
        </div>
      </div>

      {inspiration && (
        <p className="text-neutral-500 text-xs mt-4">
          Inspired by{" "}
          {inspirationLink ? (
            <Link
              href={inspirationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-600"
            >
              {inspiration}
            </Link>
          ) : (
            <span>{inspiration}</span>
          )}
        </p>
      )}
    </div>
  );
}

const RerenderButton = ({
  setRender,
}: { setRender: React.Dispatch<React.SetStateAction<number>> }) => (
  <button
    type="button"
    className="absolute top-2 right-2 px-2 py-1 group hover:bg-neutral-400/15 rounded-md items-center flex gap-1 transition-colors transform-gpu"
    onClick={() => setRender((prev) => prev + 1)}
  >
    <div className="w-fit group-hover:max-w-20 max-w-0 overflow-hidden transition-all duration-500 transform-gpu">
      <p className=" whitespace-nowrap opacity-0 group-hover:opacity-100 duration-500 transition-opacity text-sm text-neutral-400 transform-gpu">
        Rerender
      </p>
    </div>
    <RepeatIcon className="size-4 text-neutral-400" />
  </button>
);

const ComponentWrapper = ({
  isIframed = true,
  size,
  renderButton,
  children,
  isChildUsingHeightFull,
}: {
  renderButton: boolean;
  isIframed?: boolean;
  size: ComponentHeightType;
  children: React.ReactNode;
  isChildUsingHeightFull?: boolean;
}) => {
  const { resolvedTheme } = useTheme();

  if (!isIframed) {
    return (
      <div
        className={cn(
          "w-full h-full flex  items-center justify-center ",
          isChildUsingHeightFull && "flex-col *:flex-1",
          getContainerHeightClass({ size }),
        )}
      >
        {children}
      </div>
    );
  }
  if (resolvedTheme === "dark") {
    return (
      <CustomIframeComponentDark
        className={cn(
          "w-full flex items-center justify-center",
          getContainerHeightClass({ size }),
        )}
        size={size}
      >
        {children}
      </CustomIframeComponentDark>
    );
  }
  return (
    <CustomIframeComponentLight
      className={cn(
        "w-full flex items-center justify-center",
        getContainerHeightClass({ size }),
      )}
      size={size}
    >
      {children}
    </CustomIframeComponentLight>
  );
};

const getComponentToDisplay = (
  componentList: VariantComponent[],
  selectedVariant: number,
) => {
  const component = componentList[selectedVariant - 1]?.component;

  if (component) {
    return component;
  }
  toast.error("Component was not found");
  return null;
};

const getCodeToDisplay = (
  componentList: VariantComponent[],
  selectedVariant: number,
) => {
  const code = componentList[selectedVariant - 1]?.code;

  if (code) {
    console.log(code);
    return code;
  }

  toast.error("Code was not found");
  return null;
};

export function getContainerHeightClass({
  size,
  isIframe = false,
}: {
  size: ComponentHeightType;
  isIframe?: boolean;
}) {
  switch (size) {
    case "xs":
      if (isIframe) {
        return " min-h-[180px] max-h-[180px]";
      }
      return "min-h-[200px] max-h-[200px]";
    case "sm":
      if (isIframe) {
        return " min-h-[380px] max-h-[380px]";
      }
      return "min-h-[400px] max-h-[400px]";
    case "md":
      if (isIframe) {
        return " min-h-[680px] max-h-[680px]";
      }
      return " min-h-[700px] max-h-[700px]";
    case "lg":
      return "min-h-[894px] max-h-[894px]";
    case "xl":
      return "min-h-[1094px] max-h-[1094px]";
  }
}
