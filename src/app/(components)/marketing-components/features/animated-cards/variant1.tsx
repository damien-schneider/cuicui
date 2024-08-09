import { MessageCircleIcon } from "lucide-react";
import React, { type ReactNode } from "react";
import { cn } from "#/src/utils/cn";

type CardType = {
  title: string;
  content: ReactNode;
};

const data: CardType[] = [
  {
    title: "Cards",
    content: (
      <div className=" border-neutral-500/20 border px-3 py-2 rounded-lg space-y-1 *:rounded-full *:bg-neutral-100 dark:*:bg-neutral-700 *:transition-colors *:group-hover:bg-neutral-200 dark:*:group-hover:bg-neutral-600  *:transform-gpu">
        <div className="size-3 text-center" />
        <div className="w-12 h-1" />
        <div className="w-5 h-1" />
        <div className="w-8 h-1" />
      </div>
    ),
  },
  {
    title: "Text",
    content: (
      <p className="text-5xl text-neutral-200 dark:text-neutral-700 group-hover:text-neutral-300 dark:group-hover:text-neutral-600 transition-colors tracking-tighter transform-gpu">
        H1
      </p>
    ),
  },
  {
    title: "Icons",
    content: (
      <MessageCircleIcon className="size-12 fill-neutral-100 dark:fill-neutral-700 stroke-neutral-100 dark:stroke-neutral-700 transition-colors group-hover:stroke-neutral-200 dark:group-hover:stroke-neutral-600 group-hover:fill-neutral-200 dark:group-hover:fill-neutral-600 transform-gpu" />
    ),
  },
  {
    title: "Buttons",
    content: (
      <p className="rounded-full text-neutral-200 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-700 inline-flex items-center justify-center px-4 py-1.5 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-600 group-hover:text-neutral-300 dark:group-hover:text-neutral-400 transition-colors transform-gpu">
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
          key={card.title}
          title={card.title}
          description={`0${index}`}
          content={card.content}
          className={cn(
            "hover:rotate-0 hover:scale-110 transform-gpu",
            index % 2 === 0 ? "rotate-12" : "-rotate-12",
            `-translate-x-[${index * 30}px]`,
          )}
        />
      ))}
    </div>
  );
}

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
        "p-3 rounded-xl transition-all bg-white dark:bg-neutral-800 border group border-neutral-500/30 shadow-2xl hover:shadow-xl shadow-neutral-500/30 flex flex-col  w-28 h-42 rotate-12 transform-gpu",
        className,
      )}
    >
      <div className="flex size-20 justify-center items-center">{content}</div>
      <p className="text-xs text-neutral-200 dark:text-neutral-500">
        {description}
      </p>
      <p className="text-xs text-neutral-700 dark:text-neutral-400 font-medium">
        {title}
      </p>
    </div>
  );
}
