"use client";

import React from "react";
import GradientContainer from "../ui/gradient-container";

type NextErrorProps = {
  error: Error;
  reset: () => void;
};
export default function NextError({ error, reset }: Readonly<NextErrorProps>) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <GradientContainer>
      <div className="space-y-4 p-2">
        <h2 className="font-bold text-lg">An error occurred!</h2>
        <p className="text-sm">{error?.message}</p>
        <div>
          <button onClick={() => reset()} type="button">
            Try Again
          </button>
        </div>
      </div>
    </GradientContainer>
  );
}
