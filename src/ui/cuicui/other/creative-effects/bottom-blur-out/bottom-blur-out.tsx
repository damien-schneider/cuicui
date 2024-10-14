export const BottomBlurOut = () => {
  return (
    <div className="gradient-blur fixed z-10 pointer-events-none before:absolute before:inset-0 after:absolute after:inset-0 before:z-[1] h-[7%] bottom-0 inset-x-0 before:backdrop-blur-[0.5px] after:backdrop-blur-[32px]">
      <style>{gradientBlurCss}</style>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`${index}-bottom-blur-out`}
          className="absolute inset-0"
          style={{
            zIndex: index + 2,
            backdropFilter: `blur(${2 ** index}px)`,
            WebkitBackdropFilter: `blur(${2 ** index}px)`,
          }}
        />
      ))}
    </div>
  );
};

const gradientBlurCss = `
.gradient-blur:before {
    -webkit-mask: linear-gradient(180deg, transparent 0%, #000 12.5%, #000 25%, transparent 37.5%);
    mask: linear-gradient(180deg, transparent 0%, #000 12.5%, #000 25%, transparent 37.5%);
}

.gradient-blur > div:nth-of-type(1) {
    -webkit-mask: linear-gradient(180deg, transparent 12.5%, #000 25%, #000 37.5%, transparent 50%);
    mask: linear-gradient(180deg, transparent 12.5%, #000 25%, #000 37.5%, transparent 50%);
}

.gradient-blur > div:nth-of-type(2) {
    -webkit-mask: linear-gradient(180deg, transparent 25%, #000 37.5%, #000 50%, transparent 62.5%);
    mask: linear-gradient(180deg, transparent 25%, #000 37.5%, #000 50%, transparent 62.5%);
}

.gradient-blur > div:nth-of-type(3) {
    -webkit-mask: linear-gradient(180deg, transparent 37.5%, #000 50%, #000 62.5%, transparent 75%);
    mask: linear-gradient(180deg, transparent 37.5%, #000 50%, #000 62.5%, transparent 75%);
}

.gradient-blur > div:nth-of-type(4) {
    -webkit-mask: linear-gradient(180deg, transparent 50%, #000 62.5%, #000 75%, transparent 87.5%);
    mask: linear-gradient(180deg, transparent 50%, #000 62.5%, #000 75%, transparent 87.5%);
}

.gradient-blur > div:nth-of-type(5) {
    -webkit-mask: linear-gradient(180deg, transparent 62.5%, #000 75%, #000 87.5%, transparent);
    mask: linear-gradient(180deg, transparent 62.5%, #000 75%, #000 87.5%, transparent);
}

.gradient-blur:after {
    -webkit-mask: linear-gradient(180deg, transparent 75%, #000 87.5%, #000);
    mask: linear-gradient(180deg, transparent 75%, #000 87.5%, #000);
}
`;
