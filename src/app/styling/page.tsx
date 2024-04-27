import { ExternalLink } from "#/src/ui/external-link";

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="font-bold text-xl">Styling</h1>

      <ul>
        <li>This example shows different styling solutions.</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/styling/css-modules">
          Docs
        </ExternalLink>

        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/styling">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
