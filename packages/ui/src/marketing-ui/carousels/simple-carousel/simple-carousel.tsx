"use client";

import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
	type HTMLAttributes,
	type KeyboardEvent,
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { cn } from "@/src/utils/cn/cn";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
	const context = useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

const Carousel = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{
			orientation = "horizontal",
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref,
	) => {
		const [carouselRef, emblaApi] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === "horizontal" ? "x" : "y",
			},
			plugins,
		);
		const [canScrollPrev, setCanScrollPrev] = useState(false);
		const [canScrollNext, setCanScrollNext] = useState(false);

		const onSelect = useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}

			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrev = useCallback(() => {
			emblaApi?.scrollPrev();
		}, [emblaApi]);

		const scrollNext = useCallback(() => {
			emblaApi?.scrollNext();
		}, [emblaApi]);

		const handleKeyDown = useCallback(
			(event: KeyboardEvent<HTMLDivElement>) => {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext],
		);

		useEffect(() => {
			if (!(emblaApi && setApi)) {
				return;
			}

			setApi(emblaApi);
		}, [emblaApi, setApi]);

		useEffect(() => {
			if (!emblaApi) {
				return;
			}

			onSelect(emblaApi);
			emblaApi.on("reInit", onSelect);
			emblaApi.on("select", onSelect);

			return () => {
				emblaApi?.off("select", onSelect);
			};
		}, [emblaApi, onSelect]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: emblaApi,
					opts,
					orientation:
						orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}
			>
				<div
					aria-roledescription="carousel"
					className={cn("relative", className)}
					onKeyDownCapture={handleKeyDown}
					ref={ref}
					{...props}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	},
);
Carousel.displayName = "Carousel";

const CarouselContent = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();

	return (
		<div className="overflow-hidden rounded-xl" ref={carouselRef}>
			<div
				className={cn(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className,
				)}
				ref={ref}
				{...props}
			/>
		</div>
	);
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarousel();

		return (
			<div
				aria-roledescription="slide"
				className={cn(
					"min-w-0 shrink-0 grow-0 basis-full",
					orientation === "horizontal" ? "pl-4" : "pt-4",
					className,
				)}
				ref={ref}
				role="group"
				{...props}
			/>
		);
	},
);
CarouselItem.displayName = "CarouselItem";

const CarouselDots = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { api } = useCarousel();
		const [current, setCurrent] = useState(0);
		const [count, setCount] = useState(0);
		useEffect(() => {
			if (!api) {
				return;
			}

			setCount(api.scrollSnapList().length);
			setCurrent(api.selectedScrollSnap() + 1);

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap() + 1);
			});
		}, [api]);
		if (count === null) {
			return null;
		}
		return (
			<div
				className={cn(
					"-translate-x-1/2 absolute bottom-2 left-1/2 flex gap-2 rounded-full border border-white/20 bg-white/50 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-black/10 dark:bg-black/40",
					className,
				)}
				ref={ref}
				{...props}
			>
				{count &&
					Array.from({ length: count }).map((_, index) => (
						<button
							className={cn(
								"size-4 rounded-full border transition-all",
								index === current - 1
									? "border-black/30 bg-black/40 dark:border-white/30 dark:bg-white/40"
									: "scale-75 border-black/10 bg-black/20 dark:border-white/10 dark:bg-white/20",
							)}
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={`dot-cuicui-carousel-${index}`}
							onClick={() => api?.scrollTo(index)}
							type="button"
						>
							<span className="sr-only">Go to slide {index + 1}</span>
						</button>
					))}
			</div>
		);
	},
);

const CarouselPrevious = forwardRef<
	HTMLButtonElement,
	HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<button
			className={cn(
				"absolute grid size-8 place-content-center rounded-full border border-white/20 bg-white/50 backdrop-blur-sm transition-all active:scale-75 dark:border-black/10 dark:bg-black/40",
				"transform-gpu hover:scale-105 disabled:cursor-not-allowed disabled:bg-white/10 disabled:dark:bg-black/10",
				orientation === "horizontal"
					? "-translate-y-1/2 top-1/2 left-6"
					: "-translate-x-1/2 top-6 left-1/2 rotate-90",
				className,
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			ref={ref}
			type="button"
			{...props}
		>
			<ArrowLeftIcon className="size-4 text-neutral-700 dark:text-neutral-200" />
			<span className="sr-only">Previous slide</span>
		</button>
	);
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef<
	HTMLButtonElement,
	HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<button
			className={cn(
				"absolute grid size-8 place-content-center rounded-full border border-white/20 bg-white/50 backdrop-blur-md transition-all active:scale-75 dark:border-black/10 dark:bg-black/40",
				"transform-gpu hover:scale-105 disabled:cursor-not-allowed disabled:bg-white/10 disabled:dark:bg-black/10",
				orientation === "horizontal"
					? "-translate-y-1/2 top-1/2 right-6"
					: "-translate-x-1/2 bottom-6 left-1/2 rotate-90",
				className,
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			ref={ref}
			type="button"
			{...props}
		>
			<ArrowRightIcon className="size-4 text-neutral-700 dark:text-neutral-200" />
			<span className="sr-only">Next slide</span>
		</button>
	);
});
CarouselNext.displayName = "CarouselNext";

export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	CarouselDots,
};
