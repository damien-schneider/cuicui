"use client";
import { useReducer } from "react";

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export default function useRerender(): () => void {
  const [, update] = useReducer(updateReducer, 0);

  return update;
}
