import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form Builder",
  description:
    "Build forms with ease using the Form Builder tool. Based on shadCn components.",
  openGraph: {
    title: "Form Builder",
    description:
      "Build forms with ease using the Form Builder tool. Based on shadCn components.",
  },
};

export default function Page() {
  return (
    <iframe
      src="https://formbuilder.kurdmake.com"
      className="w-full h-dvh"
      title="Form Builder"
    />
  );
}
