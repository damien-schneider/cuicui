import { cn } from "@/cuicui/utils/cn/cn";
import type { ComponentProps, ReactNode } from "react";

// No forwardRef for now as it will disappear in React 19

export const H1 = ({
	children,
	...props
}: { children: ReactNode } & ComponentProps<"h1">) => (
	<h1 className={cn("text-5xl font-semibold", props.className)} {...props}>
		{children}
	</h1>
);
