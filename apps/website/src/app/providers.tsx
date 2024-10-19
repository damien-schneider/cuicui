import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
