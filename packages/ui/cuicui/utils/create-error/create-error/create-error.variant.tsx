"use client";
import { createError, type NormalizedError } from "@/cuicui/utils/create-error";
import { useEffect, useState } from "react";

export const PreviewCreateError = () => {
  const [error, setError] = useState<NormalizedError | null>(null);
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div className="cuicui-default-style">
      <button
        type="button"
        onClick={() => {
          setError(createError("This is an error"));
        }}
      >
        Display a simple error
      </button>
      <button
        type="button"
        onClick={() => {
          setError(
            createError("BAD_REQUEST", {
              message: "This is a custom error",
              fatal: true,
            }),
          );
        }}
      >
        Display an error with a custom message
      </button>
      <p>Error message: {error?.message}</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
};

export default PreviewCreateError;
