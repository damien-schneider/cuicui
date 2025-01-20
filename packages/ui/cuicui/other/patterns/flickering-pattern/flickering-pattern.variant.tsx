import FlickeringGrid from "@/cuicui/other/patterns/flickering-pattern/flickering-pattern";

export function FlickeringGridPreview() {
  return (
    <FlickeringGrid
      className="z-0 absolute inset-0 size-full overflow-hidden"
      squareSize={4}
      gridGap={6}
      color="#6B7280"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={1200}
      width={1200}
    />
  );
}

export default FlickeringGridPreview;
