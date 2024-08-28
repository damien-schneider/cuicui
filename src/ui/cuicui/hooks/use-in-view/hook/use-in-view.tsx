"use client";
import { type RefObject, useEffect, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

function useInView(
  ref: RefObject<HTMLElement>,
  options: UseInViewOptions = {},
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0,
        rootMargin: options.rootMargin ?? "0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isInView;
}

export default useInView;
