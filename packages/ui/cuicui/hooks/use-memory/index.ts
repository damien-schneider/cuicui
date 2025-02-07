"use client"
import { useState, useEffect, useCallback } from "react";

/**
 * Performance.memory
 */
export interface MemoryInfo {
  readonly jsHeapSizeLimit: number;
  readonly totalJSHeapSize: number;
  readonly usedJSHeapSize: number;
  [Symbol.toStringTag]: "MemoryInfo";
}

export interface UseMemoryOptions {
  interval?: number;
  immediate?: boolean;
  immediateCallback?: boolean;
}

type PerformanceMemory = Performance & {
  memory: MemoryInfo;
};

/**
 * Custom hook for Memory Info.
 */
export function useMemory(options: UseMemoryOptions = {}) {
  const [memory, setMemory] = useState<MemoryInfo>();
  const [isSupported, setIsSupported] = useState<boolean>(false);

  // Check if performance.memory is supported
  useEffect(() => {
    setIsSupported(
      typeof performance !== "undefined" && "memory" in performance,
    );
  }, []);

  // Memory update function
  const updateMemory = useCallback(() => {
    if (isSupported) {
      setMemory((performance as PerformanceMemory).memory);
    }
  }, [isSupported]);

  // Set up interval
  useEffect(() => {
    if (!isSupported) return;

    const { interval = 1000, immediate = false } = options;

    // Initial call if immediate is true
    if (immediate) {
      updateMemory();
    }

    const intervalId = setInterval(updateMemory, interval);

    // Cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, [isSupported, options, updateMemory]);

  return { isSupported, memory };
}

export default useMemory;
