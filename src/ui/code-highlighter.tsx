// import { Highlight, type PrismTheme, themes } from "prism-react-renderer";

import type { HTMLAttributes } from "react";
import CopyToClipboardButton from "#/src/components/component-wrapper/copy-to-clipboard-button";
import ShikiCode from "#/src/ui/cuicui/application-ui/code/advanced-code-block/code-highlighter";
// import "../styles/prism-js-custom.css";
import { cn } from "../utils/cn";
export default function CodeHighlighter({
  code,
  className,
  ...props
}: Readonly<
  { code: string; className?: string } & HTMLAttributes<HTMLDivElement>
>) {
  return (
    <>
      <CopyToClipboardButton code={code} />
      <ShikiCode
        code={code}
        lang="typescript"
        theme="github-light"
        className={cn("text-sm", className)}
      />
    </>
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
