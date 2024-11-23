import NumberFlow from "@number-flow/react";
import "./github-stars.css";
import Link from "next/link";
import { cn } from "@/cuicui/utils/cn/cn";
import type { ComponentProps } from "react";
export const GithubStarsButton = ({
  starNumber,
  href,
  children,
  className,
  ...props
}: Readonly<{
  starNumber: number;
  children?: string;
  href: string;
  className?: string;
}> &
  ComponentProps<"a">) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px",
        className,
      )}
      {...props}
    >
      <span
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        <span
          className="inset-0 absolute pointer-events-none select-none"
          style={{
            animation: "10s ease-in-out infinite alternate border-translate",
          }}
        >
          <span
            className="block -translate-x-1/2 -translate-y-1/3  size-24 blur-xl"
            style={{
              background: "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
            }}
          />
        </span>
      </span>
      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={{
          animation: "10s ease-in-out infinite alternate border-glow-translate",
        }}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={{
            animation: "10s ease-in-out infinite alternate border-glow-scale",
            background: "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
          }}
        />
      </span>

      <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full">
        <span className="relative  group-hover:scale-105 transition-transform group-hover:rotate-[360deg]">
          <CuicuiStarIcon
            className="opacity-80 dark:opacity-100"
            style={{
              animation:
                "14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate star-rotate",
            }}
          />
          <span
            className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
            style={{
              animation: "14s ease-in-out infinite alternate star-shine",
              background:
                "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
            }}
          />
        </span>
        <NumberFlow
          value={starNumber}
          isolate={true}
          trend={false}
          spinTiming={{ duration: 1500, easing: "ease-in-out" }}
          className="z-20 dark:text-neutral-500 text-neutral-400 text-xs font-semibold tracking-tighter"
        />
        {children && (
          <span className="bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu">
            {children}
          </span>
        )}
      </span>
    </Link>
  );
};

const CuicuiStarIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Icon</title>
      <path
        d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
        fill="url(#paint0_linear_171_8212)"
        stroke="url(#paint1_linear_171_8212)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_171_8212"
          x1="-0.5"
          y1="9"
          x2="15.5"
          y2="-1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A69F9" />
          <stop offset="0.575" stopColor="#F26378" />
          <stop offset="1" stopColor="#F5833F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_171_8212"
          x1="-0.5"
          y1="9"
          x2="15.5"
          y2="-1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A69F9" />
          <stop offset="0.575" stopColor="#F26378" />
          <stop offset="1" stopColor="#F5833F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
