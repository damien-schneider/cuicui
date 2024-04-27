"use client";

import { useState } from "react";
import Code from "./code";
import { VariantComponent } from "../lib/types/component";

export default function FullComponent({
  componentList,
  title,
  description,
}: Readonly<{
  componentList: VariantComponent[];
  title: string;
  description: string;
}>) {
  const [tab, setTab] = useState("visual");
  const [selectedVariant, setSelectedVariant] =
    useState<`variant${number}`>("variant1");
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-400">{description}</p>
      <menu className="flex justify-between mb-2">
        <div className="inline-flex gap-2 rounded-lg bg-gray-900 px-1 py-1">
          <button
            className="rounded-md bg-gray-800 px-2 py-1 text-gray-300 hover:bg-gray-700"
            type="button"
            onClick={() => setTab("visual")}
          >
            Visual
          </button>
          <button
            className="rounded-md bg-gray-800 px-2 py-1 text-gray-300 hover:bg-gray-700"
            type="button"
            onClick={() => setTab("code")}
          >
            code
          </button>
        </div>
        <select
          className="rounded-md bg-gray-900 px-2 py-1 text-gray-300 hover:bg-gray-800"
          name="variants"
          id="variants"
          onChange={(e) => {
            setSelectedVariant(e.target.value as `variant${number}`);
          }}
        >
          {componentList.map((variant) => (
            <option
              value={variant.slug}
              selected={variant.slug === selectedVariant}
              key={`${variant.slug}-${variant.name}`}
            >
              {variant.name}
            </option>
          ))}
        </select>
      </menu>
      {tab === "visual" ? (
        <div className="flex min-h-96 w-full items-center justify-center rounded-md bg-gray-900">
          {componentList
            .find((variant) => variant.slug === selectedVariant)
            ?.component()}
        </div>
      ) : (
        <Code>
          {
            componentList.find((variant) => variant.slug === selectedVariant)
              ?.code
          }
        </Code>
      )}
    </div>
  );
}
