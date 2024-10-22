"use client";
import { useLayoutEffect, useState, type ReactNode } from "react";
import { CustomIframe } from "#/src/components/custom-iframe-component";
import type { ComponentHeightType } from "#/src/lib/types/component";
import { cn } from "#/src/utils/cn";
import { getContainerHeightClass } from "#/src/components/component-wrapper/get-container-height-class";
import { RefreshCwIcon } from "lucide-react";

export const ComponentWrapper = ({
	isIframed = true,
	size,
	renderButton = false,
	children,
	isChildUsingHeightFull,
}: {
	renderButton?: boolean;
	isIframed: boolean;
	size: ComponentHeightType;
	children: ReactNode;
	isChildUsingHeightFull?: boolean;
}) => {
	const [reRender, setReRender] = useState(false);

	useLayoutEffect(() => {
		if (reRender) {
			setReRender(false);
		}
	}, [reRender]);

	if (!isIframed) {
		return (
			<div
				className={cn(
					"relative flex h-full w-full items-center justify-center overflow-hidden",
					isChildUsingHeightFull && "flex-col *:flex-1",
					getContainerHeightClass({ size }),
				)}
			>
				{renderButton && <RerenderButton onClick={() => setReRender(true)} />}

				{!reRender && children}
			</div>
		);
	}

	return (
		<CustomIframe
			className={cn("w-full", getContainerHeightClass({ size }))}
			size={size}
		>
			{renderButton && <RerenderButton onClick={() => setReRender(true)} />}

			{!reRender && children}
		</CustomIframe>
	);
};

const RerenderButton = ({
	onClick,
}: {
	onClick: () => void;
}) => {
	return (
		<button
			type="button"
			className={cn(
				"absolute top-2 right-2 p-1 text-xs font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-500/20 border border-neutral-400/0 hover:border-neutral-400/20 active:border-neutral-400/50 active:bg-neutral-500/40 rounded-md flex items-center gap-1 transition-colors hover:bg-neutral-500/30",
			)}
			onClick={onClick}
		>
			<RefreshCwIcon className="size-3" />
			Rerender
		</button>
	);
};
