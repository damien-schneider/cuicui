"use client";

import { ChevronRightIcon } from "lucide-react";
import React, { useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

type TreeProps = {
	contentTree: ReactNode;
	children?: ReactNode;
	defaultCollapsed?: boolean;
	depth?: number;
} & HTMLAttributes<HTMLDivElement>;

export const Tree = ({
	contentTree,
	children,
	defaultCollapsed = false,
	depth = 0,
	...rest
}: TreeProps) => {
	const [collapsed, setCollapsed] = useState(defaultCollapsed);

	const hasChildren = React.Children.count(children) > 0;

	const toggleCollapse = () => {
		if (hasChildren) {
			setCollapsed(!collapsed);
		}
	};

	return (
		<div {...rest} className={cn("", rest.className)}>
			<div
				className={cn(
					"group relative flex min-h-8 w-full items-center justify-between rounded-md border border-neutral-400/0 bg-neutral-400/0 hover:border-neutral-400/10 hover:bg-neutral-400/10",
					"before:-top-px before:-bottom-px before:absolute before:w-px",
					!hasChildren && "before:bg-neutral-400/50 before:-translate-x-3",
				)}
				style={{
					paddingLeft: `${depth * 0.75}rem`,
				}}
			>
				<span
					className={cn(
						"text-sm dark:text-neutral-300 text-neutral-600 group-hover:translate-x-0.5 transition-transform transform-gpu",
						hasChildren ? "font-semibold tracking-tight" : "font-normal",
					)}
				>
					{contentTree}
				</span>
				{hasChildren && (
					<button
						aria-expanded={!collapsed}
						className={cn(
							"inline-flex items-center justify-center relative  focus:outline-none size-6 m-1",
							" before:inset-0 before:bg-neutral-400/10 before:rounded-md before:absolute before:transition before:border before:border-neutral-400/10 before:opacity-0 before:scale-75",
							" hover:before:opacity-100 hover:before:scale-100",
							hasChildren ? "cursor-pointer" : "cursor-default",
						)}
						onClick={toggleCollapse}
						type="button"
					>
						<ChevronRightIcon
							className={cn(
								"transform-gpu duration-300 size-4 text-blue-500",
								collapsed ? "" : "rotate-90",
							)}
						/>
					</button>
				)}
			</div>
			{hasChildren && !collapsed && (
				<div className="overflow-hidden ">
					{React.Children.map(children, (child) => {
						return React.isValidElement<TreeProps>(child)
							? React.cloneElement<TreeProps>(child, { depth: depth + 1 })
							: child;
					})}
				</div>
			)}
		</div>
	);
};
