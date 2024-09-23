import Link from "next/link";
import React from "react";

export default function InspirationComponentFooter({
  inspiration,
  inspirationLink,
}: Readonly<{
  inspiration?: string;
  inspirationLink?: string;
}>) {
  if (!inspiration) {
    return null;
  }

  return (
    <p className="text-neutral-500 text-xs mt-4">
      Inspired by{" "}
      {inspirationLink ? (
        <Link
          href={inspirationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:text-amber-600"
        >
          {inspiration}
        </Link>
      ) : (
        <span>{inspiration}</span>
      )}
    </p>
  );
}
