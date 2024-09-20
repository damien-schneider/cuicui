import React from "react";

const RadioButton = ({ label }: { label: string }) => {
  return (
    <label
      htmlFor={label.toLowerCase()}
      className="flex w-fit cursor-pointer items-center px-3 py-2 rounded-lg hover:bg-blue-500/10 focus:bg-blue-500/30 border border-transparent active:border-blue-500/30 active:bg-blue-500/30 transition-all"
    >
      <div className="inline-flex items-center">
        <label
          className="flex items-center cursor-pointer relative"
          htmlFor={label.toLowerCase()}
        >
          <input
            type="radio"
            name="radioGroup"
            className="peer opacity-0 size-5"
            id={label.toLowerCase()}
          />
          <div className="absolute inset-0 rounded-full before:scale-0 before:absolute before:transition-all before:inset-0 before:bg-blue-500 peer-checked:peer-hover:before:scale-90 peer-hover:before:scale-50 peer-checked:before:scale-105 border border-blue-500 before:rounded-full" />
        </label>
        <label
          className="cursor-pointer ml-2 text-neutral-600 dark:text-neutral-500 text-sm dark:invert"
          htmlFor={label.toLowerCase()}
        >
          {label}
        </label>
      </div>
    </label>
  );
};

const RadioButtonGroup = ({ options }: { options: string[] }) => {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <RadioButton key={option} label={option} />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
