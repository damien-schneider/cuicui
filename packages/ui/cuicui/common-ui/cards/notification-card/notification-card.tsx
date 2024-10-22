import type { ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

export default function NotificationCard({
	date = new Date(),
	title,
	children,
	className,
}: Readonly<{
	date?: Date;
	title: string;
	children: ReactNode;
	className?: string;
}>) {
	return (
		<div
			className={cn(
				"flex h-20 w-full max-w-72 cursor-pointer items-center justify-start rounded-2xl border border-transparent bg-neutral-100 backdrop-blur-[10px] transition duration-150 ease-in-out hover:scale-105 hover:border-neutral-500/20 dark:bg-neutral-800",
				className,
			)}
		>
			<div className="ml-[14px] h-[50px] w-[50px] rounded-[10px] bg-gradient-to-br from-neutral-500/20 to-neutral-500/10" />
			<div className="ml-[10px] w-[calc(100%-90px)] text-neutral-700 dark:text-neutral-300">
				<div className="flex items-center justify-between">
					<p className="font-bold text-[16px]">{title}</p>
					<span className="text-[10px] text-neutral-400 dark:text-neutral-500">
						{date.toLocaleTimeString()}
					</span>
				</div>
				<p className="line-clamp-2 font-light text-xs">{children}</p>
			</div>
		</div>
	);
}
