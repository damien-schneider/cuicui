import * as Tabs from "@radix-ui/react-tabs";
import ComponentTabRenderer from "#/src/components/component-wrapper/component-tab-renderer";

import { cn } from "@/cuicui/utils/cn";
import type { ComponentType } from "@cuicui/ui/lib/types/component";

export type TabType = "preview" | "code-component" | "code-preview";

export default function VariantTabs({
  component,
}: {
  component: ComponentType;
}) {
  if (!component.variants || component.variants.length === 0) {
    return (
      <p className="p-12 mt-6 bg-red-400/20 border border-red-400 text-red-400 rounded-lg">
        No variants found, this is probably an error, please report it as an
        issue on github
      </p>
    );
  }
  return (
    <div>
      <Tabs.Root
        defaultValue={component.variants[0].name}
        id="variants-tabs"
        itemID="variants-tabs"
      >
        {component.variants.map((variant, _index) => {
          return (
            <Tabs.Content key={variant.name} value={variant.name}>
              <ComponentTabRenderer component={component} variant={variant} />
            </Tabs.Content>
          );
        })}
        <p className="text-neutral-500 text-sm tracking-tight mt-2">
          Variants list
        </p>
        <Tabs.List
          className={cn(
            "flex items-center p-0.5 *:data-[state=active]:rounded-lg *:data-[state=active]:border-neutral-500/20 *:data-[state=active]:bg-neutral-400/15 *:data-[state=active]:text-neutral-900",
          )}
        >
          {component.variants.map((variant, _index) => {
            return (
              <Tabs.Trigger
                className={cn(
                  "group relative flex items-center justify-center px-2 py-1 font-medium text-sm tracking-tighter transition-colors",
                  "before:absolute before:inset-0 before:scale-50 before:transform-gpu before:rounded-lg before:border before:border-neutral-500/10 before:bg-neutral-400/15 before:opacity-0 before:transition before:duration-300 hover:before:scale-95 hover:before:opacity-50 before:group-active:bg-neutral-500/5 data-[state=active]:before:scale-100 data-[state=active]:before:opacity-100",
                )}
                key={variant.name}
                value={variant.name}
              >
                <span
                  className={cn(
                    "w-fit scale-100 transform-gpu p-1 font-medium text-neutral-500 capitalize transition-transform group-hover:scale-110 group-data-[state=active]:text-neutral-900 dark:group-data-[state=active]:text-neutral-100",
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
      </Tabs.Root>
    </div>
  );
}
