import GradientContainer from "../ui/gradient-container";

export default function NotFound() {
  return (
    <GradientContainer>
      <div className="space-y-4 p-2">
        <h2 className="font-bold text-lg">Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </GradientContainer>
  );
}
