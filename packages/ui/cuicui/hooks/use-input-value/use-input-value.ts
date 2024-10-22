"use client";
import { type ChangeEvent, useState } from "react";

export function useInputValue(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return {
    value,
    onChange,
  };
}
