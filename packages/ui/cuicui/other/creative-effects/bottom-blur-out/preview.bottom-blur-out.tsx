import { BottomBlurOut } from "@/cuicui/other/creative-effects/bottom-blur-out/bottom-blur-out";

export default function PreviewBottomBlurOut() {
  return (
    <div className="relative w-52 dark:text-white">
      {Array.from({ length: 20 }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index}>
          Sunt id fugiat dolor nostrud aute eiusmod ea sint. Ea laborum do irure
          et. Ea elit incididunt velit veniam anim ullamco elit sunt. Ea veniam
          nisi elit nostrud eu sit ut non Lorem adipisicing non ut excepteur.
          Sint elit cupidatat reprehenderit nulla ipsum enim Lorem cillum velit
          veniam. Esse elit sit irure Lorem. Esse aliqua incididunt amet est
          voluptate esse adipisicing culpa commodo est.
          <img
            src="https://plus.unsplash.com/premium_photo-1727558768347-eefa5276de9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="random"
            width="auto"
            height={100}
          />
        </div>
      ))}
      <BottomBlurOut />
    </div>
  );
}
