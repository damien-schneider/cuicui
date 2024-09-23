"use server";
import { type BundledLanguage, type BundledTheme, codeToHtml } from "shiki";
import { cn } from "#/src/utils/cn";
import "./style.css";
type ShikiProps = {
  code: string;
  lang: BundledLanguage;
  theme: BundledTheme;
  className?: string;
};
export async function ShikiCode({ code, lang, theme, className }: ShikiProps) {
  const html = await codeToHtml(code, {
    lang,
    theme,
  });

  return (
    <div
      className={cn(
        "*:bg-transparent dark:invert hue-rotate-0 dark:hue-rotate-180",
        className,
      )}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <Done server side, no worries>
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
