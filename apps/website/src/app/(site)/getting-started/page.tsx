import { NEXT_PUBLIC_SITE_URL } from "#/src/lib/site.const";
import { CodeContainer } from "#/src/ui/code-command-container";
import { StaticStep } from "#/src/ui/stepper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started - CuiCui",
  description:
    "Learn how to use the only UI library you need, simply copy-paste, use best React tools, best practices, and more creative components.",
  keywords: [
    "copy-paste library",
    "code simplicity",
    "easy customization",
    "good coding practices",
    "diverse styles",
    "glasmorphism",
    "flat UI",
    "skeuomorphism",
    "neomorphism",
  ],
  openGraph: {
    title: "Getting Started - CuiCui",
    description:
      "Learn how to use the only UI library you need, simply copy-paste, use best React tools, best practices, and more creative components.",
    url: `${NEXT_PUBLIC_SITE_URL}/about`,
    type: "website",
    siteName: "CuiCui",
  },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="header-1">Getting Started with Cuicui</h1>
        <p className="caption-md">
          This library is designed for use in a React TypeScript environment.
          Before integrating Cuicui components, ensure that your project is set
          up with basic React tooling.
        </p>
      </header>

      <section id="cn-function">
        <h2 className="header-2">The "cn" function</h2>
        <p>
          The <code>cn</code> function is a utility for generating{" "}
          <code>className</code> strings compatible with TailwindCSS utility
          classes. Many Cuicui components rely on this function, making it an
          essential part of your toolkit.
        </p>
        <h3 className="header-5">
          Benefits of Using the <code>cn</code> function
        </h3>
        <ul className="ul-md list-inside list-disc">
          <li>
            Readable and maintainable className strings, with easy inline
            comments for styles.
          </li>
          <li>
            Supports conditional styles with TailwindCSS, enhancing flexibility.
          </li>
          <li>Simplifies maintenance by consolidating class name logic.</li>
        </ul>

        <h3 className="header-4">How to Install the cn Function</h3>
        <div className="card">
          <StaticStep step={1} title="Install the Tailwind Merge library">
            <CodeContainer>tailwind-merge</CodeContainer>
          </StaticStep>

          <StaticStep step={2} title="Install the clsx library">
            <CodeContainer>clsx</CodeContainer>
          </StaticStep>

          <StaticStep step={3} title="Create a 'cn.ts' file">
            <p className="caption-md mb-2">
              Create a <code>cn.ts</code> file in your project's{" "}
              <code>utils</code> folder and add the following code:
            </p>
            <CodeContainer isCommand={false}>
              {`// ./src/utils/cn.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
              `}
            </CodeContainer>
          </StaticStep>
        </div>
      </section>
    </div>
  );
}
