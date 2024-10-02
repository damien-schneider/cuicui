"use client";

import {
  AnimatePresence,
  MotionConfig,
  type Transition,
  type Variant,
  type Variants,
  motion,
} from "framer-motion";
import {
  Children,
  type ReactElement,
  type ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { cn } from "#/src/utils/cn";

type DisclosureContextType = {
  open: boolean;
  toggle: () => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

const DisclosureContext = createContext<DisclosureContextType | undefined>(
  undefined,
);

type DisclosureProviderProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

function DisclosureProvider({
  children,
  open: openProp,
  onOpenChange,
  variants,
}: Readonly<DisclosureProviderProps>) {
  const [internalOpenValue, setInternalOpenValue] = useState<boolean>(openProp);

  useEffect(() => {
    setInternalOpenValue(openProp);
  }, [openProp]);

  const toggle = useCallback(() => {
    const newOpen = !internalOpenValue;
    setInternalOpenValue(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  }, [internalOpenValue, onOpenChange]);

  const contextValue = useMemo(
    () => ({
      open: internalOpenValue,
      toggle,
      variants,
    }),
    [internalOpenValue, toggle, variants],
  );

  return (
    <DisclosureContext.Provider value={contextValue}>
      {children}
    </DisclosureContext.Provider>
  );
}

function useDisclosure() {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error("useDisclosure must be used within a DisclosureProvider");
  }
  return context;
}

type DisclosureProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  variants?: { expanded: Variant; collapsed: Variant };
  transition?: Transition;
};

export function Disclosure({
  open: openProp = false,
  onOpenChange,
  children,
  className,
  transition,
  variants,
}: Readonly<DisclosureProps>) {
  return (
    <MotionConfig transition={transition}>
      <div className={className}>
        <DisclosureProvider
          onOpenChange={onOpenChange}
          open={openProp}
          variants={variants}
        >
          {Children.toArray(children)[0]}
          {Children.toArray(children)[1]}
        </DisclosureProvider>
      </div>
    </MotionConfig>
  );
}

export function DisclosureTrigger({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  const { toggle, open } = useDisclosure();

  return (
    <>
      {Children.map(children, (child) => {
        return isValidElement(child)
          ? cloneElement(child, {
              onClick: toggle,
              role: "button",
              "aria-expanded": open,
              tabIndex: 0,
              onKeyDown: (e: { key: string; preventDefault: () => void }) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle();
                }
              },
              className: cn(className, (child as ReactElement).props.className),
              ...(child as ReactElement).props,
            })
          : child;
      })}
    </>
  );
}

export function DisclosureContent({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  const { open, variants } = useDisclosure();
  const uniqueId = useId();

  const BASE_VARIANTS: Variants = {
    expanded: {
      height: "auto",
      opacity: 1,
    },
    collapsed: {
      height: 0,
      opacity: 0,
    },
  };

  const combinedVariants = {
    expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
    collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            animate="expanded"
            exit="collapsed"
            id={uniqueId}
            initial="collapsed"
            variants={combinedVariants}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default {
  Disclosure,
  DisclosureProvider,
  DisclosureTrigger,
  DisclosureContent,
};
