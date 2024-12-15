"use client";
const code = `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
`;
const language = "CSS";

import CodeEditor from "@/cuicui/application-ui/code/code-card/code-card";

export const CodeCardPreview = () => {
  return <CodeEditor code={code} language={language} />;
};

export default CodeCardPreview;
