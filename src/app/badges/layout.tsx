import type React from "react";

const title = "Nested Layouts";

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
