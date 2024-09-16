"use client";
import React, { useState } from "react";
import { ModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import { useDebounce } from "#/src/ui/cuicui/hooks/use-debounce/hook/use-debounce";

export default function PreviewUseDebounce() {
  const [value, setValue] = useState("");
  const delay = 500;
  const debouncedValue = useDebounce(value, delay);
  return (
    <div className="space-y-6 relative">
      <ModernSimpleInput
        className="w-72"
        type="text"
        value={value}
        placeholder="Type something..."
        onChange={(e) => setValue(e.target.value)}
      />

      {debouncedValue && (
        <p className=" absolute top-full">
          <span className="font-medium tracking-tighter text-neutral-500">
            Debounced value:
          </span>
          <br />
          {debouncedValue}
          <br />
        </p>
      )}
      {value !== debouncedValue && (
        <p className="text-neutral-400 text-xs absolute -bottom-6">
          (Value will update in {delay}ms)
        </p>
      )}
    </div>
  );
}
