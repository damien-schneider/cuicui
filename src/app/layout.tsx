import type { Metadata } from "next";
import { Toaster } from "sonner";
import "#/src/styles/globals.css";
import { DesktopSideMenu } from "#/src/components/navigation/desktop-menu";
import { AddressBar } from "#/src/ui/address-bar";
import { MobileMenu } from "../components/navigation/mobile-menu";

import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Providers from "#/src/app/providers";
import StarGithubProjectButton from "#/src/ui/star-github-project-button";
import PlausibleScripts from "#/src/components/analytics/plausible-scripts";
const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuicui.day",
  ),
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
  publisher: "Cuicui - Damien Schneider",
  openGraph: {
    title: "CuiCui | High-Quality React and Tailwind Components for Copy-Paste",
    description:
      "CuiCui is a modern UI copy paste library using React that helps you build beautiful websites and applications with customizable, and modern components.",
    url: "https://www.cuicui.day",
    type: "website",
    locale: "en",
    siteName: "CuiCui",
    images: [
      {
        url: "/metadata/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "A preview of CuiCui's website with a sentence saying 'SaaS ready Copy-Paste React Components'.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@damien_schneid",
    creator: "@damien_schneid",
    title: "CuiCui | High-Quality React and Tailwind Components for Copy-Paste",
    description:
      "CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications as easy as copy paste.",
    images: [
      {
        url: "/metadata/opengraph-image.png",
        alt: "A preview of CuiCui's website with a sentence saying 'SaaS ready Copy-Paste React Components'.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={font.className} lang="en" suppressHydrationWarning={true}>
      <PlausibleScripts />
      <Providers>
        {/* <body className="dark:bg-[url('/grid-dark-mode.svg')] bg-[url('/grid-light-mode.svg')] dark:bg-gray-950 bg-gray-50"> */}
        <body className="bg-neutral-50 dark:bg-neutral-950 ">
          <Toaster />

          <div className="mx-auto max-w-screen-2xl">
            <DesktopSideMenu />
            {/* <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                <div className="relative">
                  <div className="gradient-top-animation absolute rotate-3 blur-[100px] h-48 w-[60vw] -right-[20vw] z-0 -top-24 opacity-20 pointer-events-none" />
                </div>
              </div> */}
            <div className="lg:ml-80">
              {/* Add overflow-auto if layout width problems */}

              <AddressBar />
              {/* <GradientContainer
                    rounded="sm"
                    background="solid"
                    classNameParent=""
                    classNameChild="px-8 py-10 min-h-[calc(100vh-6rem)]"
                    > */}
              <main className=" p-4 pt-12 pb-20 md:p-6">
                {/* Move overflow-auto to the previous comment if problems occurs */}
                {children}
              </main>
              {/* </GradientContainer> */}
              <div className="flex sm:hidden fixed bottom-20 left-2">
                <StarGithubProjectButton />
              </div>

              <MobileMenu />
            </div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
