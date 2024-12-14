import { MessageCircleIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn";

type CardType = {
  title: string;
  content: ReactNode;
};

const data: CardType[] = [
  {
    title: "Cards",
    content: (
      <div className=" space-y-1 rounded-lg border border-neutral-500/20 px-3 py-2 *:transform-gpu *:rounded-full *:bg-neutral-100 *:transition-colors *:group-hover:bg-neutral-200 dark:*:bg-neutral-700 dark:*:group-hover:bg-neutral-600">
        <div className="size-3 text-center" />
        <div className="h-1 w-12" />
        <div className="h-1 w-5" />
        <div className="h-1 w-8" />
      </div>
    ),
  },
  {
    title: "Text",
    content: (
      <p className="transform-gpu text-5xl text-neutral-200 tracking-tighter transition-colors group-hover:text-neutral-300 dark:text-neutral-700 dark:group-hover:text-neutral-600">
        H1
      </p>
    ),
  },
  {
    title: "Icons",
    content: (
      <MessageCircleIcon className="size-12 transform-gpu fill-neutral-100 stroke-neutral-100 transition-colors group-hover:fill-neutral-200 group-hover:stroke-neutral-200 dark:fill-neutral-700 dark:stroke-neutral-700 dark:group-hover:fill-neutral-600 dark:group-hover:stroke-neutral-600" />
    ),
  },
  {
    title: "Buttons",
    content: (
      <p className="inline-flex transform-gpu items-center justify-center rounded-full bg-neutral-100 px-4 py-1.5 text-neutral-200 transition-colors group-hover:bg-neutral-200 group-hover:text-neutral-300 dark:bg-neutral-700 dark:text-neutral-500 dark:group-hover:bg-neutral-600 dark:group-hover:text-neutral-400">
        Hello
      </p>
    ),
  },
];

export function AnimatedCardVariant1() {
  return (
    <div className="flex">
      {data.map((card, index) => (
        <Card
          className={cn(
            "transform-gpu hover:rotate-0 hover:scale-110",
            index % 2 === 0 ? "rotate-12" : "-rotate-12",
            `-translate-x-[${index * 30}px]`,
          )}
          content={card.content}
          description={`0${index}`}
          key={card.title}
          title={card.title}
        />
      ))}
    </div>
  );
}

export default AnimatedCardVariant1;

function Card({
  title,
  description,
  content,
  className,
}: Readonly<{
  title: string;
  description: string;
  content: ReactNode;
  className: string;
}>) {
  return (
    <div
      className={cn(
        "group flex h-42 w-28 rotate-12 transform-gpu flex-col rounded-xl border border-neutral-500/30 bg-white p-3 shadow-2xl shadow-neutral-500/30 transition-all hover:shadow-xl dark:bg-neutral-800",
        className,
      )}
    >
      <div className="flex size-20 items-center justify-center">{content}</div>
      <p className="text-neutral-200 text-xs dark:text-neutral-500">
        {description}
      </p>
      <p className="font-medium text-neutral-700 text-xs dark:text-neutral-400">
        {title}
      </p>
    </div>
  );
}
