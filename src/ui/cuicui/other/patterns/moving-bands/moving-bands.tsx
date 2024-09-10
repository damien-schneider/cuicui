export default function MovingBands({
  size = 20,
}: Readonly<{ size?: number }>) {
  return (
    <>
      <style>
        {`
        @keyframes move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: ${size}px ${size}px;
          }
        }`}
      </style>
      <div
        className="w-full h-full flex justify-center items-center bg-transparent"
        style={{
          background:
            "linear-gradient(135deg, rgb(126,126,126,0.3) 25%, rgb(126,126,126,0.1) 25%, rgb(126,126,126,0.1) 50%, rgb(126,126,126,0.3) 50%, rgb(126,126,126,0.3) 75%, rgb(126,126,126,0.1) 75%, rgb(126,126,126,0.1) 100%)",
          backgroundSize: `${size}px ${size}px`,
          animation: "move 4s linear infinite",
        }}
      />
    </>
  );
}
