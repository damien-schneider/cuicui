import { cn } from "@/cuicui/utils/cn";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonVariants = cva(
  "relative before:content-[''] before:transform-gpu px-2 py-1 text-neutral-600 transition-colors before:absolute before:top-0 before:left-0 before:w-full hover:text-neutral-600/90 active:text-neutral-600/80 active:before:border-neutral-400/20 before:-z-10 before:h-full before:rounded-md before:border before:border-neutral-500/5 before:bg-neutral-500/10 before:transition before:duration-200 before:ease-out before:active:bg-neutral-500/20 before:dark:border-neutral-600/10 dark:text-neutral-400 dark:active:text-neutral-400/80 dark:hover:text-neutral-400/90",
  {
    variants: {
      variant: {
        outline:
          "before:border-neutral-500/20 before:bg-transparent before:hover:bg-neutral-500/10 before:active:bg-neutral-500/20",
        hoverOnly:
          "before:scale-0 before:opacity-0 before:hover:scale-100 before:hover:opacity-100",
        default:
          "before:scale-100 before:opacity-100 hover:before:bg-neutral-500/30",
      },
      size: {
        lg: "h-14 p-5",
        md: "h-10 p-4",
      },
    },
    defaultVariants: {
      variant: "hoverOnly",
      size: "md",
    },
  },
);

export const Button = ({
  children,
  variant,
  size,
  href,
  className,
  ...props
}: { children: ReactNode; href?: string } & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant, size }),
          "inline-flex justify-center items-center text-center",
          className,
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        "inline-flex justify-center items-center text-center",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const h1Variants = cva("", {
  variants: {
    variant: {
      default: "dark:text-neutral-300 text-neutral-800",
      gradient:
        "bg-gradient-to-br from-neutral-950 to-neutral-950/50 text-transparent bg-clip-text py-2 dark:from-neutral-200 dark:to-neutral-200/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const H1 = ({
  children,
  variant,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"h1"> &
  VariantProps<typeof h1Variants>) => (
  <h1
    className={cn(
      "font-display text-balance text-5xl/[0.9] font-medium tracking-tight sm:text-5xl/[0.8] md:text-6xl/[0.8]",
      h1Variants({ variant }),
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

const h2Variants = cva("", {
  variants: {
    variant: {
      default: "text-neutral-800 dark:text-neutral-200",
      "small-uppercase":
        "font-mono text-xs/5 font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400",
      gradient:
        "bg-gradient-to-br from-neutral-950 to-neutral-950/50 text-transparent bg-clip-text py-2 dark:from-neutral-200 dark:to-neutral-200/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const H2 = ({
  children,
  className,
  variant,
  ...props
}: { children: ReactNode } & ComponentProps<"h2"> &
  VariantProps<typeof h2Variants>) => (
  <h2
    className={cn(
      "font-medium text-4xl tracking-tight",
      h2Variants({ variant }),
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"h3">) => (
  <h3
    className={cn(
      "font-heading text-3xl text-neutral-800 dark:text-neutral-200 font-medium tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({
  children,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"h4">) => (
  <h4
    className={cn(
      "font-heading text-4xl text-neutral-800 dark:text-neutral-200 font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

export const H5 = ({
  children,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"h5">) => (
  <h5
    className={cn(
      "font-heading text-sm text-neutral-600 dark:text-neutral-400 font-medium tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h5>
);

const badgeVariants = cva("", {
  variants: {
    variant: {
      default: "text-sm text-white bg-blue-500 rounded-md px-2 py-1",
      neutral:
        "text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-500/15 rounded-md px-2 py-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Badge = ({
  children,
  variant,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>) => (
  <span
    className={cn("inline-flex", badgeVariants({ variant }), className)}
    {...props}
  >
    {children}
  </span>
);

const cardVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4 sm:p-8 border border-dashed border-neutral-400/20",
      "hover-only":
        "p-6 relative before:absolute before:inset-0 before:bg-neutral-500/0 hover:before:bg-neutral-500/10 before:rounded-xl before:scale-90 before:blur-xl hover:before:blur-0 hover:before:scale-100 before:transition-all",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Card = ({
  children,
  className,
  variant,
  ...props
}: { children: ReactNode } & ComponentProps<"div"> &
  VariantProps<typeof cardVariants>) => (
  <div className={cn(cardVariants({ variant }), className)} {...props}>
    {children}
  </div>
);

const paragraphVariants = cva("", {
  variants: {
    variant: {
      default:
        "mt-2 max-w-[600px] font-light tracking-tight text-neutral-600 dark:text-neutral-400",
      caption:
        "text-sm text-neutral-500 dark:text-neutral-400 font-medium tracking-wide uppercase",
      title:
        "mt-1 text-2xl/8 font-medium tracking-tight text-neutral-950 dark:text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const P = ({
  children,
  variant,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"p"> &
  VariantProps<typeof paragraphVariants>) => (
  <p className={cn("", paragraphVariants({ variant }), className)} {...props}>
    {children}
  </p>
);

const spanVariants = cva("", {
  variants: {
    variant: {
      default: "text-neutral-600 dark:text-neutral-400",
      caption: "text-neutral-500 dark:text-neutral-400",
      gradient:
        "bg-gradient-to-br from-neutral-950 to-neutral-950/50 text-transparent bg-clip-text py-2 dark:from-neutral-200 dark:to-neutral-200/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Span = ({
  children,
  variant,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"span"> &
  VariantProps<typeof spanVariants>) => (
  <span className={cn(spanVariants({ variant }), "", className)} {...props}>
    {children}
  </span>
);

export const A = ({
  children,
  className,
  ...props
}: { children: ReactNode; href: string } & ComponentProps<"a">) => (
  <Link
    className={cn(
      "text-neutral-700 hover:text-neutral-600",
      "dark:text-neutral-400 dark:hover:text-neutral-300",
      className,
    )}
    {...props}
  >
    {children}
  </Link>
);
