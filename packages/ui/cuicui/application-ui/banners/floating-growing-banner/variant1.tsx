"use client";
import { SendHorizontalIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/cuicui/utils/cn/cn";

export default function FloatingGrowingBannerVariant1() {
	const [inputValue, setInputValue] = useState("");
	const handleSubmitEmail = () => {
		toast.success(`Subscribed with email: ${inputValue}`);
		setInputValue("");
	};
	return (
		<div className="fixed inset-x-0 top-0 flex justify-center p-4">
			<div
				className={cn(
					" transition-all duration-700",
					"h-8 w-full rounded-2xl bg-indigo-600 text-white shadow-lg hover:h-12",
					"max-w-[280px] overflow-hidden text-nowrap hover:max-w-[380px]",
					"group relative flex items-center justify-center border border-white/20 hover:border-white/30",
					"shadow-[2px_4px_16px_0px_rgba(248,248,248,0.2)_inset]",
				)}
			>
				<p
					className={cn(
						"-translate-y-1/2 -translate-x-1/2 group-hover:-translate-y-12 absolute top-1/2 left-1/2 text-center font-medium text-sm opacity-100 blur-0 transition-all duration-700 group-hover:opacity-0 group-hover:blur-md",
						"font-medium tracking-tight",
					)}
				>
					Subscribe to the newsletter
				</p>
				<label
					className={cn(
						"-translate-y-1/2 absolute top-1/2 left-4",
						"transition-all duration-1000",
						"opacity-0 blur-md group-hover:opacity-100 group-hover:blur-0",
						"font-medium text-sm tracking-tighter",
					)}
					htmlFor="email"
				>
					Enter your email
				</label>
				<input
					className={cn(
						"w-56 rounded-lg px-2 py-1",
						"opacity-0 blur-md transition-all duration-1000 group-hover:opacity-100 group-hover:blur-0",
						" z-20 bg-indigo-200/30 outline-none ring-0",
						// Position
						"-translate-y-1/2 absolute top-1/2 right-2",
						// Text
						"text-sm text-white tracking-tighter placeholder:text-white/60",
						inputValue && " mr-6",
					)}
					id="email"
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Escape") {
							setInputValue("");
						}
						if (e.key === "Enter") {
							handleSubmitEmail();
						}
					}}
					placeholder="email@example.com"
					type="email"
					value={inputValue}
				/>
				<button
					className={cn(
						"-translate-y-1/2 absolute top-1/2 right-1.5",
						"transition-all delay-500 duration-1000",
						inputValue ? "opacity-100 blur-0" : "opacity-0 blur-md",
					)}
					onClick={handleSubmitEmail}
					type="button"
				>
					<SendHorizontalIcon
						className={cn(
							"z-10 size-5 text-white transition-all duration-300 hover:scale-110",
						)}
					/>
				</button>
			</div>
		</div>
	);
}
