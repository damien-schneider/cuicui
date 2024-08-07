import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "#/src/styles/globals.css";
import { AddressBar } from "#/src/ui/address-bar";
import { DesktopSideMenu } from "#/src/ui/navigation/desktop-menu";
import GradientContainer from "../ui/gradient-container";
import { MobileMenu } from "../ui/navigation/mobile-menu";
import { ScrollArea } from "../ui/shadcn-scrollarea";
import ClientProvider from "./client-provider";

import { DM_Sans } from "next/font/google";
const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default:
      "CuiCui | High-Quality React and Tailwind Components for Copy-Paste",
    template: "%s | CuiCui",
  },
  description:
    "CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications.",
  keywords:
    "UI library, UI components, copy paste UI, web design, front-end development, modern UI, React, Tailwind CSS, TypeScript, JavaScript, Framer Motion",
  authors: {
    name: "Damien Schneider",
    url: "https://github.com/damien-schneider",
  },
  openGraph: {
    title: "CuiCui | High-Quality React and Tailwind Components for Copy-Paste",
    description:
      "CuiCui is a modern UI copy paste library using React that helps you build beautiful websites and applications with customizable, and modern components.",
    url: "https://www.cuicui.com",
    type: "website",
    locale: "en",
    siteName: "CuiCui",
    // images: [
    //   {
    //     url: "/api/og?title=CuiCui modern UI copy paste library",
    //     width: 1200,
    //     height: 630,
    //     alt: "CuiCui | Modern UI Copy Paste React components Library",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@CuiCuiUI",
  //   creator: "@CuiCuiUI",
  //   title: "CuiCui | Modern UI Copy Paste Library",
  //   description:
  //     "CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications.",
  //   images: [
  //     {
  //       url: "/api/og?title=CuiCui modern UI copy paste library",
  //       alt: "CuiCui | Modern UI Copy Paste Library",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={font.className}>
      <ThemeProvider attribute="class">
        {/* <body className="dark:bg-[url('/grid-dark-mode.svg')] bg-[url('/grid-light-mode.svg')] dark:bg-gray-950 bg-gray-50"> */}
        <body className="dark:bg-neutral-950 bg-neutral-50 ">
          <Toaster />
          <ClientProvider>
            <div className="max-w-screen-2xl mx-auto">
              <DesktopSideMenu className="p-3 top-1/2 z-50 hidden fixed lg:flex items-center justify-center w-80 max-h-dvh h-full -translate-y-1/2" />
              <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                <div className="relative">
                  <div className="gradient-top-animation absolute rotate-3 blur-[100px] h-48 w-[60vw] -right-[20vw] z-0 -top-24 opacity-20 pointer-events-none" />
                </div>
              </div>
              <div className="w-full lg:pl-80">
                {/* Add overflow-auto if layout width problems */}
                <div className="w-full p-3 h-[dvh] space-y-3">
                  <AddressBar />
                  <GradientContainer
                    rounded="sm"
                    background="solid"
                    classNameParent=""
                    classNameChild="px-8 py-10 min-h-[calc(100vh-6rem)]"
                  >
                    {/* Move overflow-auto to the previous comment if problems occurs */}
                    {children}
                  </GradientContainer>
                </div>
                <MobileMenu className="" />
              </div>
            </div>
          </ClientProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
