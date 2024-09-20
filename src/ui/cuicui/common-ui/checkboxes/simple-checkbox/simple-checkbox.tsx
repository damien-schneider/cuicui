import { cn } from "#/src/utils/cn";

const SimpleCheckbox = ({
  label,
  ...props
}: {
  label: string;
} & React.HTMLProps<HTMLInputElement>) => {
  const lowerCaseLabel = label.toLowerCase();
  return (
    <label
      htmlFor={lowerCaseLabel}
      className="flex w-fit cursor-pointer items-center px-3 py-2 rounded-lg hover:bg-blue-500/10 focus:bg-blue-500/30 border border-transparent active:border-blue-500/30 active:bg-blue-500/30 transition-all"
    >
      <span className="inline-flex items-center">
        <span className="flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            className={cn("peer opacity-0 size-5", props.className)}
            id={lowerCaseLabel}
            {...props}
          />
          <span className="absolute inset-0 rounded-[5px] before:scale-0 before:absolute before:transition-all before:inset-0 before:bg-blue-500 peer-checked:peer-hover:before:scale-90 peer-hover:before:scale-50 peer-checked:before:scale-105 border border-blue-500 before:rounded-[4px]" />
        </span>
        <span className="cursor-pointer ml-2 text-neutral-600 dark:text-neutral-500 text-sm">
          {label}
        </span>
      </span>
    </label>
  );
};

export default SimpleCheckbox;
