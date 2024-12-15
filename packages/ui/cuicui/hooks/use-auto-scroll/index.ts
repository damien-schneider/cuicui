"use client";
import { useEffect, useRef } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const useAutoScroll = (enabled: boolean, deps: any[]) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (enabled && listRef.current) {
      return autoScrollListRef(listRef.current);
    }
  }, [enabled, ...deps]);

  return listRef;
};

export default useAutoScroll;

export function autoScrollListRef(list: HTMLUListElement) {
  let shouldAutoScroll = true;
  let touchStartY = 0;
  let lastScrollTop = 0;

  const checkScrollPosition = () => {
    const { scrollHeight, clientHeight, scrollTop } = list;
    const maxScrollHeight = scrollHeight - clientHeight;
    const scrollThreshold = maxScrollHeight / 2;

    if (scrollTop < lastScrollTop) {
      shouldAutoScroll = false;
    } else if (maxScrollHeight - scrollTop <= scrollThreshold) {
      shouldAutoScroll = true;
    }

    lastScrollTop = scrollTop;
  };

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY < 0) {
      shouldAutoScroll = false;
    } else {
      checkScrollPosition();
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (deltaY < 0) {
      shouldAutoScroll = false;
    } else {
      checkScrollPosition();
    }

    touchStartY = touchEndY;
  };

  list.addEventListener("wheel", handleWheel);
  list.addEventListener("touchstart", handleTouchStart);
  list.addEventListener("touchmove", handleTouchMove);

  const observer = new MutationObserver(() => {
    if (shouldAutoScroll) {
      list.scrollTo({ top: list.scrollHeight });
    }
  });

  observer.observe(list, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  return () => {
    observer.disconnect();
    list.removeEventListener("wheel", handleWheel);
    list.removeEventListener("touchstart", handleTouchStart);
    list.removeEventListener("touchmove", handleTouchMove);
  };
}
