import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "#/src/styles/globals.css";
import { AddressBar } from "#/src/ui/address-bar";
import { DesktopSideMenu } from "#/src/ui/side-menu";
import GradientContainer from "../ui/gradient-container";
import { MobileNavbar } from "../ui/mobile-navbar";
import ClientProvider from "./client-provider";

export const metadata: Metadata = {
  title: {
    default: "CuiCui | Modern UI copy paste library",
    template: "%s | CuiCui",
  },
  description:
    "CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications.",
  openGraph: {
    title: "CuiCui | Modern UI copy paste library",
    description:
      "CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications.",
    images: ["/api/og?title=CuiCui modern UI copy paste library"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class">
        {/* <body className="dark:bg-[url('/grid-dark-mode.svg')] bg-[url('/grid-light-mode.svg')] dark:bg-gray-950 bg-gray-50"> */}
        <body className="dark:bg-neutral-950 bg-neutral-50">
          <Toaster />
          <ClientProvider>
            <div className="max-w-screen-2xl mx-auto  w-screen relative">
              <DesktopSideMenu className="p-3 top-1/2 z-50 hidden fixed lg:flex items-center justify-center w-80 max-h-dvh h-full -translate-y-1/2" />
              {/* <div className="gradient-top-animation absolute rotate-3 blur-[100px] h-48 w-[60vw] -right-[20vw] z-0 -top-24 opacity-20 pointer-events-none" /> */}
              <div className="w-full lg:pl-80">
                {/* Add overflow-auto if layout width problems */}
                <div className="w-full p-3 space-y-4 flex flex-col lg:pl-0 grow-0">
                  <AddressBar />
                  <GradientContainer rounded="sm" background="solid">
                    {/* Move overflow-auto to the previous comment if problems occurs */}
                    <div className="py-4 px-2 space-y-12">{children}</div>
                  </GradientContainer>
                </div>
                <MobileNavbar className="" />
              </div>
            </div>
          </ClientProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
