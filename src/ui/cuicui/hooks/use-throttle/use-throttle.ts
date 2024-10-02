"use client";
import { useEffect, useRef, useState } from "react";

/**
 * A custom React hook that throttles a value, ensuring that updates occur
 * no more frequently than the specified limit.
 *
 * @param value - The value to be throttled.
 * @param limit - The time limit in milliseconds for throttling.
 * @returns The throttled value.
 *
 * @example
 * const throttledValue = useThrottle(inputValue, 1000);
 */
export function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        const now = Date.now();
        if (now - lastRan.current >= limit) {
          setThrottledValue(value);
          lastRan.current = now;
        }
      },
      limit - (Date.now() - lastRan.current),
    );

    // Cleanup the timeout if value or limit changes before the timeout completes
    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
}
