"use client";
import { useState } from "react";
import { ModernSimpleInput } from "@/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";

export function PreviewModernSimpleInput() {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <ModernSimpleInput
        className="w-72"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        type="text"
        value={value}
      />

      <p className="-bottom-6 absolute text-neutral-400 text-xs">
        Value : {value}
      </p>
    </div>
  );
}
