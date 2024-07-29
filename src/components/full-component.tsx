"use client";

import * as Select from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  LaptopIcon,
  RepeatIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import type {
  ComponentBadge,
  FrameworkBadge,
  LibraryBadge,
  Variant,
  VariantComponent,
} from "../lib/types/component";
import Badge from "../ui/badge";
import Button from "../ui/button";
import CodeHighlighter from "../ui/code-highlighter";
import { ScrollArea, ScrollBar } from "../ui/shadcn-scrollarea";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/shadcn/resizable";
import { cn } from "../utils/cn";
import BadgeList from "./badge-list";
import CustomIframeComponentDark from "./custom-iframe-component-dark";
import CustomIframeComponentLight from "./custom-iframe-component-light";

export type TabType = "visual" | "code";
export type ComponentHeightType = "xs" | "sm" | "md" | "lg" | "xl";

const isVariant = (value: string): value is Variant => {
  return /^\d+$/.test(value);
};

// TODO : Use context to refactor everything

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
  rerenderButton = false,
}: Readonly<{
  componentList: VariantComponent[];
  title: string;
  description: string;
  inspiration?: string;
  inspirationLink?: string;
  size?: ComponentHeightType;
  frameworksBadges?: FrameworkBadge[];
  librariesBadges?: LibraryBadge[];
  componentBadges?: ComponentBadge[];
  isIframed?: boolean;
  rerenderButton?: boolean;
}>) {
  const [tab, setTab] = useState<TabType>("visual");

  const [selectedVariant, setSelectedVariant] = useState(1);
  const { resolvedTheme } = useTheme();
  const [render, setRender] = useState(0);

  const handleTabChange = useCallback((newTab: TabType) => {
    setTab(newTab);
  }, []);

  const handleVariantChange = useCallback((e: string) => {
    if (!isVariant(e)) {
      toast.error("Invalid variant selected");
      // Do not update the selected variant
    } else {
      setSelectedVariant(Number(e));
    }
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
    <div>
      {componentBadges && (
        <div className="flex items-center gap-2">
          {componentBadges?.map((badge) => (
            <Badge variant="lime" size="sm" key={badge}>
              {badge}
            </Badge>
          ))}
        </div>
      )}
      <h2 className="header-2">{title}</h2>
      <p className="text-neutral-400 text-sm mb-4">{description}</p>
      {librariesBadges && (
        <BadgeList title="Required librairies :" badgeList={librariesBadges} />
      )}
      {frameworksBadges && (
        <BadgeList title="Used frameworks :" badgeList={frameworksBadges} />
      )}
      <menu className="mb-2 flex justify-between items-end">
        <div className="inline-flex gap-2 rounded-lg border border-neutral-500/20 p-0.5">
          <Button
            variant="hover-only"
            size="sm"
            onClick={() => handleTabChange("visual")}
          >
            Visual
          </Button>
          <Button
            size="sm"
            variant="hover-only"
            onClick={() => handleTabChange("code")}
          >
            Code
          </Button>
        </div>

        {componentList.length > 1 ? (
          <Select.Root
            onValueChange={handleVariantChange}
            value={String(selectedVariant)}
          >
            <div className="h-fit rounded-[10px] border border-neutral-500/20 p-0.5">
              <Select.Trigger className="dark:hover:bg-neutral-900 hover:bg-neutral-200 rounded-lg px-2 h-8 min-w-28 focus-visible:outline-none inline-flex items-center justify-between transition-colors">
                <Select.Value placeholder={selectedVariant} />
                <ChevronDownIcon className="size-4" />
              </Select.Trigger>
            </div>
            <Select.Portal>
              <Select.Content className="rounded-lg dark:bg-neutral-900 bg-neutral-100 animate-in border border-neutral-500/20 p-0.5 ">
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Group className="space-y-1">
                    {componentList.map((variant, index) => (
                      <Select.Item
                        key={`${index}-${variant.variantName}`}
                        value={String(index + 1)}
                        className="focus-visible:bg-neutral-200 dark:focus-visible:bg-neutral-800  px-2 py-0.5 focus-visible:outline-none rounded-md transition-colors cursor-pointer"
                      >
                        <Select.ItemIndicator />
                        <Select.ItemText>{variant.variantName}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Group>
                  <Select.Separator />
                </Select.Viewport>
                <Select.ScrollDownButton>
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
                <Select.Arrow />
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        ) : (
          <Badge>No variant available</Badge>
        )}
      </menu>

      {tab === "visual" ? (
        <div
          className={cn(
            "flex items-center justify-center rounded-lg border border-neutral-500/20 p-0.5 overflow-hidden",
          )}
        >
          <ResizablePanelGroup
            direction="horizontal"
            className={cn(
              "w-full flex items-center justify-center h-full",
              // getContainerChildClassBasedOnSize(size),
            )}
          >
            <ResizablePanel
              defaultSize={100}
              className="dark:bg-neutral-900 bg-neutral-50 rounded-md border border-neutral-500/20 relative"
            >
              {rerenderButton && <RerenderButton setRender={setRender} />}

              <ComponentWrapper
                isIframed={isIframed}
                size={size}
                renderButton={rerenderButton}
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
          {/* <div
            className={cn(
              getIframeParentClasses(viewSizeContainer),
              getContainerChildClassBasedOnSize(size),
              "dark:bg-neutral-900 bg-neutral-50 rounded-md border border-neutral-500/20",
              "overflow-hidden relative",
            )}
          >
            {rerenderButton && <RerenderButton setRender={setRender} />}

            <ComponentWrapper
              isIframed={isIframed}
              viewSizeContainer={viewSizeContainer}
              size={size}
              renderButton={rerenderButton}
              key={render}
            >
              {renderedComponent ?? <p>An error has occured</p>}
            </ComponentWrapper>
          </div> */}
        </div>
      ) : (
        <div className="p-0.5 rounded-lg border border-neutral-500/20">
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
        </div>
      )}
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
    className="absolute top-2 right-2 px-2 py-1 group hover:bg-neutral-400/15 rounded-md items-center flex gap-1 transition-colors"
    onClick={() => setRender((prev) => prev + 1)}
  >
    <div className="w-fit group-hover:max-w-20 max-w-0 overflow-hidden transition-all duration-500 ">
      <p className=" whitespace-nowrap opacity-0 group-hover:opacity-100 duration-500 transition-opacity text-sm text-neutral-400">
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
}: {
  renderButton: boolean;
  isIframed?: boolean;
  size: ComponentHeightType;
  children: React.ReactNode;
}) => {
  const { resolvedTheme } = useTheme();

  if (!isIframed) {
    return <>{children}</>;
  }
  if (resolvedTheme === "dark") {
    return (
      <CustomIframeComponentDark
        className={cn(
          "w-full flex items-center justify-center transition-all duration-300",
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
        "w-full flex items-center justify-center transition-all duration-300",
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
        return "max-h-[180px] min-h-[180px] h-[180px]";
      }
      return "max-h-[200px] min-h-[200px] h-[200px]";
    case "sm":
      if (isIframe) {
        return "max-h-[380px] min-h-[380px] h-[380px]";
      }
      return "max-h-[400px] min-h-[400px] h-[400px]";
    case "md":
      if (isIframe) {
        return "max-h-[680px] min-h-[680px] h-[680px]";
      }
      return "max-h-[700px] min-h-[700px] h-[700px]";
    case "lg":
      if (isIframe) {
        return "max-h-[880px] min-h-[880px] h-[880px]";
      }
      return "max-h-[900px] min-h-[900px] h-[900px]";
    case "xl":
      if (isIframe) {
        return "max-h-[1080px] min-h-[1080px] h-[1080px]";
      }
      return "max-h-[1100px] min-h-[1100px] h-[1100px]";
  }
}
