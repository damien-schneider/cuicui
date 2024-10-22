"use client";

import { AnimatePresence, type Transition, motion } from "framer-motion";
import {
	Children,
	type ReactElement,
	cloneElement,
	useEffect,
	useId,
	useState,
} from "react";
import { cn } from "#/src/utils/cn";

export type AnimatedBackgroundProps = {
	children:
		| ReactElement<{ "data-id": string }>[]
		| ReactElement<{ "data-id": string }>;
	defaultValue?: string;
	onValueChange?: (newActiveId: string | null) => void;
	className?: string;
	transition?: Transition;
	enableHover?: boolean;
};

export default function AnimatedBackground({
	children,
	defaultValue,
	onValueChange,
	className,
	transition,
	enableHover = false,
}: AnimatedBackgroundProps) {
	const [activeId, setActiveId] = useState<string | null>(null);
	const uniqueId = useId();

	const handleSetActiveId = (id: string | null) => {
		setActiveId(id);

		if (onValueChange) {
			onValueChange(id);
		}
	};

	useEffect(() => {
		if (defaultValue !== undefined) {
			setActiveId(defaultValue);
		}
	}, [defaultValue]);

	// biome-ignore lint/suspicious/noExplicitAny: <Very hard to resolve>
	return Children.map(children, (child: any, index) => {
		const id = child.props["data-id"];

		const interactionProps = enableHover
			? {
					onMouseEnter: () => handleSetActiveId(id),
					onMouseLeave: () => handleSetActiveId(null),
				}
			: {
					onClick: () => handleSetActiveId(id),
				};

		return cloneElement(
			child,
			{
				key: `animated-background-${index}-${id}`,
				className: cn("relative inline-flex", child.props.className),
				"aria-selected": activeId === id,
				"data-checked": activeId === id ? "true" : "false",
				...interactionProps,
			},
			<>
				<AnimatePresence initial={false}>
					{activeId === id && (
						<motion.div
							animate={{
								opacity: 1,
							}}
							className={cn("absolute inset-0", className)}
							exit={{
								opacity: 0,
							}}
							initial={{ opacity: defaultValue ? 1 : 0 }}
							layoutId={`background-${uniqueId}`}
							transition={transition}
						/>
					)}
				</AnimatePresence>
				<span className="z-10">{child.props.children}</span>
			</>,
		);
	});
}
