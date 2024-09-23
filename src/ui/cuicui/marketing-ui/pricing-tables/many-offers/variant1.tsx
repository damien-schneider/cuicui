"use client";
import { motion } from "framer-motion";
import { CheckIcon, EuroIcon } from "lucide-react";
import React, { useState } from "react";
import { cn } from "#/src/utils/cn";
type BilledType = "monthly" | "annually";

const pricingData: OfferCardProps[] = [
  {
    title: "Starter",
    description: "For small teams",
    price: {
      monthly: 19,
      annually: 9,
    },
    features: ["10 users included", "2 GB of storage", "Email support"],
    infos: ["30 users included", "15 GB of storage", "Phone and email support"],
  },
  {
    title: "Pro",
    description: "For medium-sized businesses",
    price: {
      monthly: 39,
      annually: 29,
    },
    features: [
      "20 users included",
      "10 GB of storage",
      "Priority email support",
    ],
    infos: ["30 users included", "15 GB of storage", "Phone and email support"],
    isBestValue: true,
  },
  {
    title: "Enterprise",
    description: "For large businesses",
    price: {
      monthly: 59,
      annually: 49,
    },
    features: [
      "30 users included",
      "15 GB of storage",
      "Phone and email support",
    ],
    infos: ["30 users included", "15 GB of storage", "Phone and email support"],
  },
  {
    title: "Custom",
    description: "For large businesses",
    price: {
      monthly: 59,
      annually: 49,
    },
    features: [
      "30 users included",
      "15 GB of storage",
      "Phone and email support",
    ],
    infos: ["30 users included", "15 GB of storage", "Phone and email support"],
  },
];

export default function ManyOffersVariant1() {
  const [selectedBilledType, setSelectedBilledType] =
    useState<BilledType>("monthly");
  function handleSwitchTab(tab: BilledType) {
    setSelectedBilledType(tab);
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <SelectOfferTab
        handleSwitchTab={handleSwitchTab}
        selectedBilledType={selectedBilledType}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {pricingData.map((offer) => (
          <OfferCard
            key={offer.title}
            {...offer}
            selectedBilledType={selectedBilledType}
          />
        ))}
      </div>
    </div>
  );
}

type OfferCardProps = {
  title: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: string[];
  infos?: string[];
  isBestValue?: boolean;
};

const OfferCard = ({
  title,
  description,
  price,
  features,
  infos,
  isBestValue,
  selectedBilledType,
}: OfferCardProps & {
  selectedBilledType: BilledType;
}) => {
  function getAnnualPrice() {
    return price.annually * 12;
  }
  return (
    <div
      className={cn(
        "rounded-2xl border  hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden dark:bg-neutral-800/50 bg-neutral-800/95 hover:bg-neutral-800/100 h-full transform-gpu",
        "dark:text-neutral-400 text-white",
        isBestValue ? "border-[#ed8445]" : "border-neutral-500/50 ",
      )}
    >
      <div
        className={cn("p-6")}
        style={
          isBestValue
            ? {
                background:
                  "radial-gradient(58.99% 10.42% at 50% 100.46%, rgba(251, 188, 5, .07) 0, transparent 100%), radial-gradient(135.76% 66.69% at 92.19% -3.15%, rgba(251, 5, 153, .1) 0, transparent 100%), radial-gradient(127.39% 38.15% at 22.81% -2.29%, rgba(239, 145, 84, .4) 0, transparent 100%)",
              }
            : {}
        }
      >
        <div className="text-lg font-semiboldtext-neutral-200">{title}</div>
        <div className="mt-2 text-sm text-neutral-400">{description}</div>
        <div className="mt-4">
          <div className="text-4xl font-semibold text-neutral-200">
            {price[selectedBilledType]}
            <EuroIcon className="inline size-5" />
          </div>
          <div className="text-sm text-neutral-400">
            {selectedBilledType === "monthly"
              ? "billed monthly"
              : `${getAnnualPrice()}€ billed annually`}
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "py-2.5 px-12 rounded-full my-12 text-neutral-50  items-center justify-center inline-flex w-full hover:scale-105 transition-all font-semibold tracking-tight border border-neutral-400/20 transform-gpu",
            isBestValue
              ? " bg-gradient-to-br from-[#f6d4a1] to-[#ed8445]"
              : "bg-neutral-700  ",
          )}
        >
          Select
        </button>
        <p className={cn("text-sm font-semibold tracking-tight mb-4 ")}>
          This plan include :
        </p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckIcon className="size-3.5 rounded-full stroke-neutral-300" />
              <div className=" text-sm">{feature}</div>
            </li>
          ))}
        </ul>
        {infos && (
          <>
            <div className="my-6 h-px bg-neutral-600" />
            <ul className="space-y-2">
              {infos.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="size-1.5 bg-neutral-500 rounded-full" />
                  <div className=" text-sm">{feature}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export function SelectOfferTab({
  handleSwitchTab,
  selectedBilledType,
}: Readonly<{
  handleSwitchTab: (tab: BilledType) => void;
  selectedBilledType: BilledType;
}>) {
  const OfferList = ["monthly", "annually"] as const;
  return (
    <nav className="flex flex-col sm:flex-row">
      {OfferList.map((button, index) => (
        <button
          type="button"
          key={button}
          onClick={() => handleSwitchTab(button)}
          className={cn(
            " text-lg tracking-tight font-semibold py-2.5 px-6  relative whitespace-nowrap inline-flex w-fit   transition-colors capitalize transform-gpu",
            selectedBilledType === button
              ? "dark:text-neutral-50 text-neutral-700"
              : "text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-300 hover:text-neutral-600 ",
          )}
        >
          {button}
          {selectedBilledType === button && (
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0  -z-10 rounded-full  bg-neutral-200  dark:bg-neutral-800 "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              layout
              layoutId="pricing-focused-element"
            >
              <div className=" size-full rounded-full" />
            </motion.div>
          )}
        </button>
      ))}
    </nav>
  );
}
