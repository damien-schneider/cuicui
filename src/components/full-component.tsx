"use client";

import * as Select from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  LaptopIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import type { Variant, VariantComponent } from "../lib/types/component";
import Badge from "../ui/badge";
import Button from "../ui/button";
import CodeHighlighter from "../ui/code-highlighter";
import { ScrollArea, ScrollBar } from "../ui/shadcn-scrollarea";
import { cn } from "../utils/cn";
import CustomIframeComponentDark from "./custom-iframe-component-dark";
import CustomIframeComponentLight from "./custom-iframe-component-light";

export type TabType = "visual" | "code";
export type ViewSizeContainerType = "desktop" | "tablet" | "mobile";
export type IframeSizeType = "xs" | "sm" | "md" | "lg";

const isVariant = (value: string): value is Variant => {
  return /^\d+$/.test(value);
};

export default function FullComponent({
  componentList,
  title,
  description,
  inspiration,
  inspirationLink,
  size = "md",
}: Readonly<{
  componentList: VariantComponent[];
  title: string;
  description: string;
  inspiration?: string;
  inspirationLink?: string;
  size?: IframeSizeType;
}>) {
  const [tab, setTab] = useState<TabType>("visual");
  const [viewSizeContainer, setViewSizeContainer] =
    useState<ViewSizeContainerType>("desktop");
  const [selectedVariant, setSelectedVariant] = useState(1);
  const { resolvedTheme } = useTheme();
  const handleTabChange = useCallback((newTab: TabType) => {
    setTab(newTab);
  }, []);

  const handleViewSizeChange = useCallback((newSize: ViewSizeContainerType) => {
    setViewSizeContainer(newSize);
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
      <h2 className="header-2">{title}</h2>
      <p className="text-neutral-400 text-sm mb-4">{description}</p>
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
        <div className="flex gap-1 h-fit rounded-lg border border-neutral-500/20 p-0.5">
          <Button
            variant="hover-only"
            size="sm-square"
            onClick={() => handleViewSizeChange("desktop")}
          >
            <LaptopIcon className="size-5" />
          </Button>
          <Button
            variant="hover-only"
            size="sm-square"
            onClick={() => handleViewSizeChange("tablet")}
          >
            <TabletIcon className="size-5" />
          </Button>
          <Button
            variant="hover-only"
            size="sm-square"
            onClick={() => handleViewSizeChange("mobile")}
          >
            <SmartphoneIcon className="size-5" />
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
            "flex items-center justify-center rounded-lg border border-neutral-500/20 p-0.5",
            getContainerClassBasedOnSize(size),
          )}
        >
          {resolvedTheme === "dark" ? (
            <CustomIframeComponentDark
              className={cn(
                getIframeParentClasses(viewSizeContainer),
                getContainerChildClassBasedOnSize(size),
              )}
              size={size}
            >
              {renderedComponent ?? <p>An error has occured</p>}
            </CustomIframeComponentDark>
          ) : (
            <CustomIframeComponentLight
              className={cn(
                getIframeParentClasses(viewSizeContainer),
                getContainerChildClassBasedOnSize(size),
              )}
              size={size}
            >
              {renderedComponent ?? <p>An error has occured</p>}
            </CustomIframeComponentLight>
          )}
        </div>
      ) : (
        <div className="p-0.5 rounded-lg border border-neutral-500/20">
          <ScrollArea
            // With a dynamic height, the code take its full size wich is a weird behaviour
            classNameViewport={cn(
              "w-full rounded-md bg-neutral-100 dark:bg-neutral-900  border border-neutral-500/20",
              getContainerCodeClassBasedOnSize(size),
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
    </div>
  );
}

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

function getContainerCodeClassBasedOnSize(size: IframeSizeType) {
  switch (size) {
    case "xs":
      return "max-h-[200px] min-h-[200px]";
    case "sm":
      return "max-h-[400px] min-h-[400px]";
    case "md":
      return "max-h-[700px] min-h-[700px]";
    case "lg":
      return "max-h-[900px] min-h-[900px]";
  }
}

function getContainerClassBasedOnSize(size: IframeSizeType) {
  switch (size) {
    case "xs":
      return "min-h-[200px] h-[200px]";
    case "sm":
      return "min-h-[400px] h-[400px]";
    case "md":
      return "min-h-[700px] h-[700px]";
    case "lg":
      return "min-h-[900px] h-[900px]";
  }
}

function getContainerChildClassBasedOnSize(size: IframeSizeType) {
  switch (size) {
    case "xs":
      return "min-h-[194px] h-[194px]";
    case "sm":
      return "min-h-[394px] h-[394px]";
    case "md":
      return "min-h-[694px] h-[694px]";
    case "lg":
      return "min-h-[894px] h-[894px]";
  }
}

function getIframeParentClasses(viewSizeContainer: ViewSizeContainerType) {
  return cn(
    "w-full flex items-center justify-center transition-all duration-300",
    viewSizeContainer === "desktop" && " max-w-screen-2xl",
    viewSizeContainer === "tablet" && "max-w-screen-sm",
    viewSizeContainer === "mobile" && "max-w-sm",
    "dark:bg-neutral-900 bg-neutral-50 rounded-md border border-neutral-500/20",
  );
}
export function getIframeContainerClassBasedOnSize(size: IframeSizeType) {
  switch (size) {
    case "xs":
      return "*:min-h-[170px] h-[170px]";
    case "sm":
      return "*:min-h-[370px] h-[370px]";
    case "md":
      return "*:min-h-[670px] h-[670px]";
    case "lg":
      return "*:min-h-[870px] h-[870px]";
  }
}
