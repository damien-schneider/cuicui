import type { Metadata } from "next";
import { Toaster } from "sonner";
import "#/src/styles/globals.css";

import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Providers from "#/src/app/providers";
import PlausibleScripts from "#/src/components/analytics/plausible-scripts";
import { env } from "#/src/env";
import Script from "next/script";
const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@damien_schneid",
    creator: "@damien_schneid",
    title: "CuiCui | High-Quality React and Tailwind Components for Copy-Paste",
    description:
      "CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications as easy as copy paste.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className={font.className} lang="en" suppressHydrationWarning={true}>
      {env.NODE_ENV === "development" && (
        <Script
          // crossOrigin="anonymous"
          src="https://unpkg.com/react-scan/dist/auto.global.is"
          async={true}
          strategy="beforeInteractive"
        />
      )}

      <PlausibleScripts />
      <Providers>
        {/* <body className="dark:bg-[url('/grid-dark-mode.svg')] bg-[url('/grid-light-mode.svg')] dark:bg-gray-950 bg-gray-50"> */}
        <body className="bg-neutral-50 dark:bg-neutral-950 ">
          <Toaster />

          {children}
        </body>
      </Providers>
    </html>
  );
}
