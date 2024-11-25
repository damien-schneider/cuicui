"use client";
import { useState } from "react";
import { ModernSimpleInput } from "@/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import { BarCodeGenerator } from "@/cuicui/other/qr-code/bar-code-generator/bar-code-generator";

export const PreviewBarCodeGenerator = () => {
  const [value, setValue] = useState("https://www.modul.day/");
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <ModernSimpleInput
        className="w-full max-w-80 text-center"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {value && (
        <BarCodeGenerator
          className="w-full fill-neutral-700 dark:fill-white"
          options={{
            lineColor: "current",
            background: "transparent",
            width: 2,
            height: 100,
          }}
          value={value}
        />
      )}
    </div>
  );
};
