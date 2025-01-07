import ScrambleHover from "@/cuicui/other/text-animation/scramble-hover/scramble";

export default function Preview() {
  return (
    <div className=" flex flex-col justify-center items-center text-2xl p-12 gap-20 text-neutral-800 dark:text-white">
      <ScrambleHover
        text={"from the start"}
        scrambleSpeed={40}
        sequential={true}
        revealDirection="start"
        useOriginalCharsOnly={false}
        className="font-azeretMono"
        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
      />

      <ScrambleHover
        text={"from the center"}
        scrambleSpeed={40}
        sequential={true}
        revealDirection="center"
        useOriginalCharsOnly={false}
        className="font-azeretMono"
        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
      />

      <ScrambleHover
        text={"from the end"}
        scrambleSpeed={40}
        sequential={true}
        revealDirection="end"
        useOriginalCharsOnly={false}
        className="font-azeretMono"
        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
      />
    </div>
  );
}
