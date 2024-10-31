"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../utils/cn";

import { Button } from "./shadcn/button";
import { ScrollArea, ScrollAreaViewport, ScrollBar } from "./shadcn/scrollarea";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./shadcn/dropdown-menu";
import {
	PackageManagerList,
	type PackageManagerType,
	getCodeByPackageManager,
	usePackageManager,
} from "./store/use-package-manager";

import { useEffect, useState } from "react";

export default function SnippetCommandCard({
	code,
}: Readonly<{ code: string }>) {
	const { packageManager, setPackageManager } = usePackageManager();
	const [isCopied, setIsCopied] = useState(false);
	function handleCopyToClipboard(
		packageManager: PackageManagerType,
		code: string,
	) {
		navigator.clipboard.writeText(
			`${getCodeByPackageManager(packageManager)} ${code}`,
		);
		setIsCopied(true);
		toast.success(`Copied the code for ${packageManager}`);
	}

	useEffect(() => {
		if (isCopied) {
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		}
	}, [isCopied]);

	return (
		<div className="card relative block w-full">
			<ScrollArea>
				<ScrollAreaViewport className="w-full">
					<ScrollBar orientation="horizontal" />
					<code className="text-nowrap pr-10 text-sm">
						<span className="text-neutral-400 dark:text-neutral-500">
							{getCodeByPackageManager(packageManager)}{" "}
						</span>
						<span className="text-neutral-600 dark:text-neutral-300">
							{code}
						</span>
					</code>
				</ScrollAreaViewport>
			</ScrollArea>
			<DropdownMenu>
				<DropdownMenuTrigger asChild={true}>
					<Button
						aria-label="Copy the code"
						className="absolute top-2 right-2 bg-neutral-200 p-1 dark:bg-neutral-800"
						size="icon"
						variant="icon"
					>
						{isCopied ? (
							<CheckIcon className="size-5" />
						) : (
							<ClipboardIcon className="size-5" />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{PackageManagerList.map((item) => (
						<DropdownMenuItem
							key={item}
							onSelect={() => {
								setPackageManager(item);
								handleCopyToClipboard(item, code);
							}}
						>
							{item}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
