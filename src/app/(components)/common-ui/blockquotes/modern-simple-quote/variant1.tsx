import { QuoteIcon } from "lucide-react";
import React from "react";

export default function ModernSimpleQuoteVariant1() {
  return (
    <BlockQuote
      quote="I have not failed. I've just found 10,000 ways that won't work."
      author="Thomas A. Edison"
    />
  );
}

const BlockQuote = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  return (
    <blockquote className="bg-amber-500/15 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-l-4 border-amber-500/70 py-2 px-4 rounded-xl">
      <p className="inline italic">
        <QuoteIcon
          aria-hidden="true"
          className="size-3 mr-1 fill-amber-700 stroke-none -translate-y-1 inline"
        />
        {quote}
        <QuoteIcon
          aria-hidden="true"
          className="size-3 ml-1 fill-amber-700 stroke-none translate-y-1 inline"
        />
      </p>
      <p className="text-sm text-end tracking-tighter italic font-semibold mt-1.5">
        {author}
      </p>
    </blockquote>
  );
};
