"use client";

import { useMouse } from "#/src/ui/cuicui/hooks/use-mouse/hook/use-mouse";

export default function FollowCursorHideCursor() {
  const [mouse, parentRef] = useMouse();

  const translate3d = `translate3d(${mouse.elementX}px, ${mouse.elementY}px, 0)`;

  return (
    <div className="w-full h-full relative cursor-none" ref={parentRef}>
      <div
        className="size-6 bg-neutral-500/15 border border-neutral-500/20 rounded-full absolute pointer-events-none -top-3 -left-3"
        style={{
          transform: translate3d,
        }}
      />
    </div>
  );
}
