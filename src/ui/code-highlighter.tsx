"use client";

import { ClipboardIcon } from "lucide-react";
import { Highlight, type PrismTheme, themes } from "prism-react-renderer";
import { toast } from "sonner";
import { useCopyToClipboard } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard";
import "../styles/prism-js-custom.css";
import { cn } from "../utils/cn";
import { Button } from "./shadcn/button";
export default function CodeHighlighter({
  code,
  classNameContainer,
}: Readonly<{ code: string; classNameContainer?: string }>) {
  const [copiedText, copy] = useCopyToClipboard();
  console.log("\nCODE DANS LE HIGHLIGHT\n", code);
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
        toast.success("Code copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
        toast.error("Failed to copy code to clipboard!");
      });
  };

  return (
    <div className="w-full">
      <Button
        type="button"
        onClick={handleCopy(code)}
        variant="icon"
        size="icon"
        aria-label="Copy the code"
        className="absolute top-2 right-2 p-1 bg-neutral-200 dark:bg-neutral-800"
      >
        <ClipboardIcon className="size-5" />
      </Button>
      {/* <pre className="w-full break-words overflow-hidden">
        <code className="w-full">{code.trim()}</code>
      </pre> */}
      <Highlight code={code} language="tsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={cn("text-xs", classNameContainer)}>
            {tokens.map((line, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} {...getLineProps({ line, key: index })}>
                {line.map((token, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <span key={index} {...getTokenProps({ token, index })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

// const customTheme: PrismTheme = {
//   plain: {
//     color: "#ccc",
//     backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
//     //@ts-ignore
//     fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
//     fontSize: "0.9rem",
//     textAlign: "left",
//     whiteSpace: "pre",
//     wordSpacing: "normal",
//     wordBreak: "normal",
//     wordWrap: "normal",
//     lineHeight: "1.5",
//     MozTabSize: 4,
//     OTabSize: 4,
//     tabSize: 4,
//     fontWeight: "400",
//     WebkitHyphens: "none",
//     MozHyphens: "none",
//     MsHyphens: "none",
//     hyphens: "none",
//   },
//   styles: [
//     {
//       types: ["prolog", "comment", "block-comment", "doctype", "cdata"],
//       style: {
//         color: "#999",
//       },
//     },
//     {
//       types: ["punctuation"],
//       style: {
//         color: "#ccc",
//       },
//     },
//     {
//       types: ["tag", "attr-name", "namespace", "deleted"],
//       style: {
//         color: "#e2777a",
//       },
//     },
//     {
//       types: ["function-name"],
//       style: {
//         color: "#6196cc",
//       },
//     },
//     {
//       types: ["boolean", "number", "function"],
//       style: {
//         color: "#f08d49",
//       },
//     },
//     {
//       types: ["property", "class-name", "constant", "symbol"],
//       style: {
//         color: "#f8c555",
//       },
//     },
//     {
//       types: ["selector", "important", "atrule", "keyword", "builtin"],
//       style: {
//         color: "#cc99cd",
//       },
//     },
//     {
//       types: ["string", "char", "attr-value", "regex", "variable"],
//       style: {
//         color: "#7ec699",
//       },
//     },
//     {
//       types: ["operator", "entity", "url"],
//       style: {
//         color: "#67cdcc",
//       },
//     },
//     {
//       types: ["important", "bold"],
//       style: {
//         fontWeight: "bold",
//       },
//     },
//     {
//       types: ["italic"],
//       style: {
//         fontStyle: "italic",
//       },
//     },
//     {
//       types: ["entity"],
//       style: {
//         cursor: "help",
//       },
//     },
//     {
//       types: ["inserted"],
//       style: {
//         color: "green",
//       },
//     },
//   ],
// };
