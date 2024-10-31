import { cn } from "@/cuicui/utils/cn/cn";

export function MacbookMockUp({
	className,
	children,
	src,
}: Readonly<{
	className?: string;
	children?: React.ReactNode;
	src?: string;
}>) {
	return (
		<div
			className={cn(
				"relative z-[1] mx-0 my-4 max-h-[434px] w-[740px]",
				className,
			)}
		>
			<div className="relative z-[1] mx-auto my-0 h-[418px] w-[618px] overflow-hidden rounded-[20px] border-2 border-[rgb(200,202,203)] px-[9px] pt-[9px] pb-[23px] [background:rgb(13,13,13)]">
				{children || (
					<img
						alt="Macbook Pro background"
						className="relative h-[375px] w-full rounded-t-[10px] border-2 border-[rgb(18,18,18)] border-solid bg-amber-200 bg-cover object-cover"
						loading="lazy"
						src={src}
					/>
				)}
				<div className="absolute right-0 bottom-0 left-0 h-6 bg-gradient-to-b from-[#272727] to-[#0d0d0d]" />
			</div>

			<div className="-ml-8 absolute top-[11px] left-2/4 z-[2] h-3 w-16 rounded-br rounded-bl bg-[rgb(13,13,13)]" />
			<div className="-mt-2.5 relative z-[9] h-6 w-[740px] rounded-[2px_2px_12px_12px] border-[1px_2px_0px] border-[rgb(160,163,167)] border-solid shadow-[rgb(108,112,116)_0px_-2px_8px_0px_inset] [background:radial-gradient(circle,rgb(226,227,228)_85%,rgb(200,202,203)_100%)] [border-image:initial]">
				<div className="absolute top-0 left-1/2 ml-[-60px] h-2.5 w-[120px] rounded-b-[10px] shadow-[inset_0_0_4px_2px_#babdbf]" />
			</div>
			<div className="-bottom-0.5 absolute left-12 h-0.5 w-10 rounded-b-full bg-neutral-600" />
			<div className="-bottom-0.5 absolute right-12 h-0.5 w-10 rounded-b-full bg-neutral-600" />
		</div>
	);
}
