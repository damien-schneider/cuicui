"use client";

import { useMouse } from "#/src/ui/cuicui/hooks/use-mouse/hook/use-mouse";

export default function PreviewUseMouse() {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className=" relative bg-neutral-400/10 border border-neutral-400/10 w-96 h-fit rounded-lg p-4"
      ref={parentRef}
    >
      <p className=" text-neutral-500">
        x: {mouse.x}
        <br />
        y: {mouse.y}
        <br />
        elementX : {mouse.elementX?.toFixed()}
        <br />
        elementY : {mouse.elementY?.toFixed()}
        <br />
        elementPositionX : {mouse.elementPositionX?.toFixed()}
        <br />
        elementPositionY : {mouse.elementPositionY?.toFixed()}
        <br />
      </p>
    </div>
  );
}
