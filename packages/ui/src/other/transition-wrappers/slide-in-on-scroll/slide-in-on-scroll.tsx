import type { ReactNode } from "react";
import { cn } from "@/src/utils/cn/cn";

export function SlideInOnScrollWrapper({
	children,
	className,
}: Readonly<{
	className?: string;
	children: ReactNode;
}>) {
	return (
		<>
			<style>
				{`
          @keyframes slide-fade-in {
            from {
              opacity: 0;
              box-shadow: none;
              transform: scale(.8) translateY(15vh);
            }
          }

          .card {
            @media (prefers-reduced-motion: no-preference) {
              @supports (animation-timeline: view()) {
                animation: slide-fade-in both;
                animation-timeline: view();
                animation-range: contain 0% contain 50%;
              }
            }
          }
        `}
			</style>

			<div className={cn("card", className)}>{children}</div>
		</>
	);
}
