import { QuoteIcon } from "lucide-react";

export default function ModernSimpleQuoteVariant1() {
  return (
    <BlockQuote
      author="Thomas A. Edison"
      quote="I have not failed. I've just found 10,000 ways that won't work."
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
    <blockquote className="rounded-xl border-amber-500/70 border-l-4 bg-amber-500/15 px-4 py-2 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
      <p className="inline italic">
        <QuoteIcon
          aria-hidden="true"
          className="-translate-y-1 mr-1 inline size-3 fill-amber-700 stroke-none"
        />
        {quote}
        <QuoteIcon
          aria-hidden="true"
          className="ml-1 inline size-3 translate-y-1 fill-amber-700 stroke-none"
        />
      </p>
      <p className="mt-1.5 text-end font-semibold text-sm italic tracking-tighter">
        {author}
      </p>
    </blockquote>
  );
};
