"use client";

import { useCopyToClipboard } from "@/cuicui/hooks/use-copy-to-clipboard/use-copy-to-clipboard";

export default function PreviewCopyToClipboard() {
	const [copiedText, copy] = useCopyToClipboard();
	return (
		<div className="relative">
			<div className="flex flex-col gap-2">
				<button
					className="rounded-xl bg-neutral-500/20 px-4 py-2 font-medium text-neutral-700 tracking-tighter hover:bg-neutral-500/30 dark:text-white"
					onClick={() => copy("Hello world!")}
					type="button"
				>
					Copy "Hello world!"
				</button>
				<button
					className="rounded-xl bg-neutral-500/20 px-4 py-2 font-medium text-neutral-700 tracking-tighter hover:bg-neutral-500/30 dark:text-white"
					onClick={() => copy("")}
					type="button"
				>
					Reset by copying nothing
				</button>
			</div>
			{copiedText && (
				<p className="-top-6 -translate-x-1/2 absolute left-1/2 inline-flex whitespace-nowrap text-neutral-500 text-sm tracking-tighter">
					Copied: {copiedText}
				</p>
			)}
		</div>
	);
}
