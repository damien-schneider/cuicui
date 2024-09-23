import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import ComponentTabRenderer from "#/src/components/component-wrapper/component-tab-renderer";

import { cn } from "#/src/utils/cn";

import AnimatedTabMotionDiv from "#/src/components/component-wrapper/animated-tab-motion-div";
import type {
  ComponentHeightType,
  VariantComponent,
} from "../../lib/types/component";

export type TabType = "preview" | "code-component" | "code-preview";

export default function VariantTabs({
  componentList,
  size = "md",
  isIframed = true,
  isResizable = true,
  rerenderButton = false,
  isChildUsingHeightFull = false,
}: Readonly<{
  componentList: VariantComponent[];
  size?: ComponentHeightType;
  isIframed?: boolean;
  isResizable?: boolean;
  rerenderButton?: boolean;
  isChildUsingHeightFull?: boolean;
}>) {
  return (
    <div>
      <p className="tracking-tight text-sm text-neutral-500">
        List of variants :
      </p>
      <Tabs.Root
        itemID="variants-tabs"
        id="variants-tabs"
        defaultValue={componentList[0].name}
      >
        <Tabs.List
          className={cn(
            "p-0.5 flex items-center *:data-[state=active]:bg-neutral-400/15 *:data-[state=active]:text-neutral-900 *:data-[state=active]:rounded-lg *:data-[state=active]:border-neutral-500/20",
          )}
        >
          {componentList.map((variant, index) => {
            return (
              <Tabs.Trigger
                value={variant.name}
                key={variant.name}
                className={cn(
                  "group relative font-medium text-sm transition-colors flex items-center justify-center tracking-tighter py-1 px-2",
                  "before:absolute before:inset-0 before:rounded-lg before:group-active:bg-neutral-500/5 before:border before:bg-neutral-400/15  before:border-neutral-500/10  before:scale-50 before:opacity-0 data-[state=active]:before:scale-100 data-[state=active]:before:opacity-100 before:transition before:duration-300 before:transform-gpu hover:before:scale-95 hover:before:opacity-50",
                )}
              >
                <span
                  className={cn(
                    "dark:group-data-[state=active]:text-neutral-100 group-data-[state=active]:text-neutral-900 capitalize text-neutral-500 font-medium p-1 group-hover:scale-110 scale-100 transition-transform transform-gpu w-fit",
                  )}
                >
                  {variant.name}
                </span>
                {/* <div className="group-data-[state=active]:block hidden">
                <AnimatedTabMotionDiv
                  className=""
                  layoutId="variant-animated-tab"
                />
              </div> */}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        {componentList.map((variant, index) => (
          <Tabs.Content value={variant.name} key={variant.name}>
            <ComponentTabRenderer
              {...variant}
              size={size}
              isResizable={isResizable}
              rerenderButton={rerenderButton}
              isIframed={isIframed}
              isChildUsingHeightFull={isChildUsingHeightFull}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
