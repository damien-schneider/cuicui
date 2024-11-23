"use client";
import { useState } from "react";
import useKonamiCode from "@/cuicui/hooks/use-konami-code/use-konami-code";

export const PreviewUseKonamiCode = () => {
  const [isKonamiCodeActivated, setIsKonamiCodeActivated] = useState(false);

  // const konamiSequenceByCode = [
  //   "ArrowUp",
  //   "ArrowDown",
  //   "ArrowLeft",
  //   "ArrowRight",
  //   "KeyB",
  //   "KeyA",
  // ];

  const konamiSequenceByKey = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  const handleKonamiCode = () => {
    setIsKonamiCodeActivated(true);
  };

  useKonamiCode(konamiSequenceByKey, handleKonamiCode, {
    matchMode: "key",
  });

  return (
    <div>
      <h1>Welcome to the Konami Code Demo</h1>
      <p>Try entering the Konami Code using your keyboard!</p>
      <p>
        The Konami Code is: <code>↑ ↓ ← → b a</code>
      </p>
      {isKonamiCodeActivated && <p>Konami Code activated!</p>}
    </div>
  );
};
