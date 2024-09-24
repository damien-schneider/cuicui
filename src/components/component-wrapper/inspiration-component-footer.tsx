import Link from "next/link";

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
    <p className="mt-4 text-neutral-500 text-xs">
      Inspired by{" "}
      {inspirationLink ? (
        <Link
          className="text-amber-500 hover:text-amber-600"
          href={inspirationLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          {inspiration}
        </Link>
      ) : (
        <span>{inspiration}</span>
      )}
    </p>
  );
}
