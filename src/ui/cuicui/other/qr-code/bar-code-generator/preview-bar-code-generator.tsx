"use client";
import { useState } from "react";
import { ModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import { BarCodeGenerator } from "#/src/ui/cuicui/other/qr-code/bar-code-generator/bar-code-generator";

export default function PreviewBarCodeGenerator() {
  const [value, setValue] = useState("https://www.modul.day/");
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <ModernSimpleInput
        value={value}
        className="text-center max-w-80 w-full"
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <BarCodeGenerator
          options={{
            lineColor: "current",
            background: "transparent",
            width: 2,
            height: 100,
          }}
          className="dark:fill-white w-full fill-neutral-700"
          value={value}
        />
      )}
    </div>
  );
}
