import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

export default function SimpleCookieBanner({
	children,
	className,
	...props
}: {
	children?: ReactNode;
	className?: string;
} & HTMLAttributes<HTMLDialogElement>) {
	return (
		<dialog
			aria-describedby="cookie-banner-description"
			aria-labelledby="cookie-banner-title"
			className={cn(
				"shadow-3xl dark:bg-polar-950 dark:border-polar-700 dark:text-polar-500 fixed bottom-8 left-8 right-8 z-50 flex flex-col gap-y-4 rounded-2xl border border-neutral-100 bg-white dark:bg-neutral-950 dark:text-neutral-500 dark:border-neutral-800 p-4 text-sm text-neutral-500 md:left-auto md:max-w-96",
				className,
			)}
			{...props}
		>
			<p id="cookie-banner-description">{children}</p>
			<div className="flex flex-row items-center gap-x-4">
				<button className="text-blue-500 dark:text-neutral-50" type="button">
					Accept
				</button>
				<button className="" type="button">
					Decline
				</button>
			</div>
		</dialog>
	);
}
