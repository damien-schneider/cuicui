"use client";
import { useState } from "react";
import { ModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";

export function PreviewModernSimpleInput() {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <ModernSimpleInput
        className="w-72"
        type="text"
        value={value}
        placeholder="Type something..."
        onChange={(e) => setValue(e.target.value)}
      />

      <p className="text-neutral-400 text-xs absolute -bottom-6">
        Value : {value}
      </p>
    </div>
  );
}
