import type { HTMLProps } from "react";
import { cn } from "@/cuicui/utils/cn";

const SimpleCheckbox = ({
  label,
  ...props
}: {
  label: string;
} & HTMLProps<HTMLInputElement>) => {
  const lowerCaseLabel = label.toLowerCase();
  return (
    <label
      className="flex w-fit cursor-pointer items-center rounded-lg border border-transparent px-3 py-2 transition-all hover:bg-blue-500/10 focus:bg-blue-500/30 active:border-blue-500/30 active:bg-blue-500/30"
      htmlFor={lowerCaseLabel}
    >
      <span className="inline-flex items-center">
        <span className="relative flex cursor-pointer items-center">
          <input
            className={cn("peer size-5 opacity-0", props.className)}
            id={lowerCaseLabel}
            type="checkbox"
            {...props}
          />
          <span className="absolute inset-0 rounded-[5px] border border-blue-500 before:absolute before:inset-0 before:scale-0 before:rounded-[4px] before:bg-blue-500 before:transition-all peer-checked:before:scale-105 peer-hover:before:scale-50 peer-hover:peer-checked:before:scale-90" />
        </span>
        <span className="ml-2 cursor-pointer text-neutral-600 text-sm dark:text-neutral-500">
          {label}
        </span>
      </span>
    </label>
  );
};

export default SimpleCheckbox;
