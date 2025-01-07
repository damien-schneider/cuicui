import Typewriter from "@/cuicui/other/text-animation/typewritter/typewritter";

export function Preview() {
  return (
    <div className="text-3xl flex items-start justify-start p-12">
      <p className="whitespace-pre-wrap">
        <span>{"We're born 🌞 to "}</span>
        <Typewriter
          text={[
            "experience",
            "dance",
            "love",
            "be alive",
            "create things that make the world a better place",
          ]}
          speed={70}
          className="text-yellow-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </p>
    </div>
  );
}

export default Preview;
