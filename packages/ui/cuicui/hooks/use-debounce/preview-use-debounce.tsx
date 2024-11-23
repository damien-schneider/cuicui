"use client";
import { useState } from "react";
import { ModernSimpleInput } from "@/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import { useDebounce } from "@/cuicui/hooks/use-debounce/use-debounce";

export default function PreviewUseDebounce() {
  const [value, setValue] = useState("");
  const delay = 500;
  const debouncedValue = useDebounce(value, delay);
  return (
    <div className="relative space-y-6">
      <ModernSimpleInput
        className="w-72"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        type="text"
        value={value}
      />

      {debouncedValue && (
        <p className=" absolute top-full">
          <span className="font-medium text-neutral-500 tracking-tighter">
            Debounced value:
          </span>
          <br />
          {debouncedValue}
          <br />
        </p>
      )}
      {value !== debouncedValue && (
        <p className="-bottom-6 absolute text-neutral-400 text-xs">
          (Value will update in {delay}ms)
        </p>
      )}
    </div>
  );
}
