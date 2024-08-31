import React from "react";

export default function NotificationCard({
  date,
  title,
  description,
}: Readonly<{ date: Date; title: string; description: string }>) {
  return (
    <div className="w-full max-w-72 h-20 dark:bg-neutral-800 bg-neutral-100 rounded-2xl flex items-center justify-start backdrop-blur-[10px] transition ease-in-out duration-150 hover:scale-105 cursor-pointer border hover:border-neutral-500/20 border-transparent">
      <div className="w-[50px] h-[50px] ml-[14px] rounded-[10px] bg-gradient-to-br from-neutral-500/20 to-neutral-500/10" />
      <div className="w-[calc(100%-90px)] ml-[10px] dark:text-neutral-300 text-neutral-700">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-bold">{title}</p>
          <span className="text-[10px]  dark:text-neutral-500 text-neutral-400">
            {date.toLocaleTimeString()}
          </span>
        </div>
        <p className="text-xs font-light line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
