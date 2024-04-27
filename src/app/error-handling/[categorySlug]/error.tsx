"use client";

import React from "react";
import { Boundary } from "#/src/ui/boundary";
import Button from "#/src/ui/button";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <Boundary labels={["./[categorySlug]/error.tsx"]} color="pink">
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Error</h2>
        <p className="text-sm">{error?.message}</p>
        <div>
          <Button onClick={() => reset()}>Try Again</Button>
        </div>
      </div>
    </Boundary>
  );
}
