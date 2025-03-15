import { cn } from "@/cuicui/utils/cn";
import type { ComponentProps } from "react";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink href="#">Icons</NavbarLink>
      <NavbarLink href="#">App</NavbarLink>
      <NavbarLink href="#">Pricing</NavbarLink>
      <NavbarLink href="#" isHighlighted={true}>
        Buy Icons
      </NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;

export const NavbarContainer = ({
  children,
  className,
  ...props
}: ComponentProps<"nav">) => {
  return (
    <nav
      className={cn(
        "flex w-fit backdrop-blur-md bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl shadow-xl shadow-black/5 p-px relative border border-neutral-400/10",
        className,
      )}
      {...props}
    >
      <ul className="gap-2 flex w-fit items-center justify-between">
        {children}
      </ul>
    </nav>
  );
};

export const NavbarLink = ({
  children,
  href,
  isHighlighted,
  ...props
}: {
  isHighlighted?: boolean;
} & ComponentProps<"a">) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "relative inline-flex text-sm h-11 w-28 tracking-tight items-center justify-center",
          isHighlighted
            ? "text-white bg-linear-to-b from-violet-500 to-violet-600 rounded-[14px] hover:from-violet-500/80 hover:to-violet-600/80 shadow-md transition-all hover:scale-105"
            : "text-neutral-800 dark:text-neutral-300 before:absolute before:inset-0  before:bg-neutral-500/20 hover:before:scale-100 before:scale-50 before:opacity-0 hover:before:opacity-100 before:transition before:rounded-[14px]",
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};
