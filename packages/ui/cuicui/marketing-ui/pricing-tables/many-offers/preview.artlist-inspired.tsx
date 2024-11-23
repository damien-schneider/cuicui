"use client";
import { motion } from "framer-motion";
import { CheckIcon, EuroIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/cuicui/utils/cn/cn";
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
    <div className="flex flex-col items-center gap-4">
      <SelectOfferTab
        handleSwitchTab={handleSwitchTab}
        selectedBilledType={selectedBilledType}
      />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
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
        "hover:-translate-y-1 h-full transform-gpu overflow-hidden rounded-2xl border bg-neutral-800/95 transition-all duration-300 ease-in-out hover:bg-neutral-800/100 dark:bg-neutral-800/50",
        "text-white dark:text-neutral-400",
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
        <div className="font-semiboldtext-neutral-200 text-lg">{title}</div>
        <div className="mt-2 text-neutral-400 text-sm">{description}</div>
        <div className="mt-4">
          <div className="font-semibold text-4xl text-neutral-200">
            {price[selectedBilledType]}
            <EuroIcon className="inline size-5" />
          </div>
          <div className="text-neutral-400 text-sm">
            {selectedBilledType === "monthly"
              ? "billed monthly"
              : `${getAnnualPrice()}€ billed annually`}
          </div>
        </div>

        <button
          className={cn(
            "my-12 inline-flex w-full transform-gpu items-center justify-center rounded-full border border-neutral-400/20 px-12 py-2.5 font-semibold text-neutral-50 tracking-tight transition-all hover:scale-105",
            isBestValue
              ? " bg-gradient-to-br from-[#f6d4a1] to-[#ed8445]"
              : "bg-neutral-700 ",
          )}
          type="button"
        >
          Select
        </button>
        <p className={cn("mb-4 font-semibold text-sm tracking-tight ")}>
          This plan include :
        </p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
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
                <li className="flex items-center gap-2" key={feature}>
                  <div className="size-1.5 rounded-full bg-neutral-500" />
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
      {OfferList.map((button, _index) => (
        <button
          className={cn(
            " relative inline-flex w-fit transform-gpu whitespace-nowrap px-6 py-2.5 font-semibold text-lg capitalize tracking-tight transition-colors",
            selectedBilledType === button
              ? "text-neutral-700 dark:text-neutral-50"
              : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-300 ",
          )}
          key={button}
          onClick={() => handleSwitchTab(button)}
          type="button"
        >
          {button}
          {selectedBilledType === button && (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-full bg-neutral-200 dark:bg-neutral-800 "
              exit={{ opacity: 0, scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.95 }}
              layout={true}
              layoutId="pricing-focused-element"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className=" size-full rounded-full" />
            </motion.div>
          )}
        </button>
      ))}
    </nav>
  );
}
