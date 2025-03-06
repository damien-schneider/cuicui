import NavigationMenu from "#/src/app/(site)/components/sidemenu/navigation-menu";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationMenu section="snippets" />
      {children}
    </>
  );
}
