"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/cuicui/utils/cn";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string; // optional icon text or component
}

export const FaqSection = ({
  data,
}: {
  data: FAQItem[];
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-white dark:bg-neutral-800 p-4 shadow-sm md:max-w-2xl">
      {/* Subheader / Timestamp */}
      <div className="mb-2 text-xs text-neutral-400">
        Every day, <span className="font-medium">9:01 AM</span>
      </div>

      <Accordion.Root
        type="single"
        collapsible={true}
        value={openItem ?? ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id.toString()}
            className="mb-2"
          >
            {/* Accordion Header */}
            <Accordion.Header>
              <Accordion.Trigger className="group flex justify-between items-center w-full">
                <div
                  className={cn(
                    "inline-flex group-hover:translate-x-1 rounded-2xl rounded-bl-md transition items-center justify-between px-3 py-1.5 text-left duration-200 outline-none",
                    openItem === item.id.toString()
                      ? "bg-blue-600 text-white"
                      : " text-neutral-700 dark:text-neutral-200",
                  )}
                >
                  {/* Icon & Question Text */}
                  <div className="relative flex items-center space-x-2 ">
                    {item.icon && <span className="text-xl">{item.icon}</span>}
                    <span className="tracking-tight">{item.question}</span>
                  </div>
                </div>

                <span
                  className={cn(
                    "transition-transform",
                    openItem === item.id.toString()
                      ? "rotate-0 text-white"
                      : "rotate-90 text-neutral-400 dark:text-neutral-200",
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <MinusIcon className="size-4" />
                  ) : (
                    <PlusIcon className="size-4" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            {/* Accordion Content with AnimatedPresence for smooth mount/unmount */}
            <Accordion.Content forceMount={true}>
              <AnimatePresence initial={false}>
                {openItem === item.id.toString() && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, x: -20 }}
                    animate={{ height: "auto", opacity: 1, x: 0 }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      x: -20,
                      filter: "blur(8px)",
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="relative ml-7 mt-2 md:ml-14">
                      <div className="relative inline-block rounded-2xl rounded-br mb-5 bg-blue-600 px-4 py-2 text-sm text-white shadow-lg">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FaqSection;
