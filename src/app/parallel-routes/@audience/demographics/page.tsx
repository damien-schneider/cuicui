import { Boundary } from "#/src/ui/boundary";

export default function Page() {
  return (
    <Boundary labels={["@audience/demographics/page.tsx"]} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="font-bold text-lg">Demographics</h2>
      </div>
    </Boundary>
  );
}
