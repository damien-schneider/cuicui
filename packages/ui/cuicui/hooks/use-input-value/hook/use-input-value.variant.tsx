"use client";
import { useInputValue } from "@/cuicui/hooks/use-input-value";

export function PreviewUseInputValue() {
  const name = useInputValue("Cuicui");

  return (
    <div>
      <input
        className="rounded-lg bg-neutral-400/20 border border-neutral-400/20"
        {...name}
      />
      <p>Hello, {name.value}!</p>
    </div>
  );
}

export default PreviewUseInputValue;
