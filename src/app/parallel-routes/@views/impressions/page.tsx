import { Boundary } from "#/src/ui/boundary";

export default function Page() {
  return (
    <Boundary labels={["@views/impressions/page.tsx"]} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="font-bold text-lg">Impressions</h2>
      </div>
    </Boundary>
  );
}
