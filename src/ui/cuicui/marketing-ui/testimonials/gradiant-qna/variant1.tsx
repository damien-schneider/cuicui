import { ChevronDownIcon } from "lucide-react";
import { cn } from "#/src/utils/cn";

export default function GradientQnaVariant1() {
  return (
    <div className="">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 ">
        <AdvancedGradiant className="opacity-50" />
      </div>
      <div className=" space-y-2">
        <Testimonial
          content="The best thing about this product is that it is very easy to use and it is very user-friendly. It is also very affordable and it is very easy to set up."
          title="What is the best thing about this product?"
        />
        <Testimonial
          content="The best thing about this product is that it is very easy to use and it is very user-friendly. It is also very affordable and it is very easy to set up."
          title="What is the best thing about this product?"
        />
        <Testimonial
          content="The best thing about this product is that it is very easy to use and it is very user-friendly. It is also very affordable and it is very easy to set up."
          title="What is the best thing about this product?"
        />
      </div>
    </div>
  );
}

const Testimonial = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-400/20 bg-neutral-500/10 backdrop-blur-2xl transition-all hover:bg-neutral-500/20">
      <details className="peer group max-h-96 w-full transform-gpu overflow-hidden transition-all">
        <summary className="flex transform-gpu cursor-pointer list-none items-center justify-between gap-4 p-4 transition-all duration-300 group-open:pt-8 group-open:pl-8">
          <h6 className="font-medium text-lg text-neutral-600 tracking-tight dark:text-neutral-300">
            {title}
          </h6>
          <ChevronDownIcon className="group-open:-rotate-180 absolute top-5 right-5 size-5 transform-gpu text-neutral-600 transition-all dark:text-neutral-300" />
        </summary>
      </details>

      <div className="max-h-0 transform-gpu overflow-hidden font-medium text-neutral-700 transition-all duration-500 peer-open:max-h-40 dark:text-neutral-200">
        <p className="m-2 rounded-2xl bg-neutral-500/10 p-8 ">{content}</p>
      </div>
    </div>
  );
};

const AdvancedGradiant = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <>
      <style>
        {`
          @keyframes size-bounce {
            50% { transform: scale(0.8); }
            100% { transform: scale(1); }
          }
          @keyframes spin-right {
            100% { transform: rotate(360deg); }
          }
          @keyframes spin-left {
            100% { transform: rotate(-360deg); }
          }
        `}
      </style>
      <div
        className={cn(
          "relative size-[400px] transform-gpu transition-all",
          className,
        )}
      >
        <div className="absolute top-0 left-0 grid h-full w-full transform-gpu place-items-center">
          <div
            className={cn(
              "h-full w-full transform-gpu rounded-full opacity-80 blur-3xl",
            )}
            style={{
              background:
                "conic-gradient(#FF0080, #EE00FF, #00A6FF, #4797FF, #0044FF, #FF8000, #FF00CC)",
              animation: "spin-right 15s linear infinite",
            }}
          />
        </div>
        <div
          className="absolute top-0 left-0 grid h-full w-full transform-gpu place-items-center"
          style={{
            animation: "size-bounce 20s linear infinite",
          }}
        >
          <div
            className={cn(
              "absolute size-[300px] transform-gpu rounded-full blur-2xl",
            )}
            style={{
              background: "conic-gradient(#FFF, #12B4E6, #DC4CFC)",
              animation: "spin-right 10s linear infinite",
            }}
          />
        </div>
        <div
          className="absolute top-0 left-0 grid h-full w-full transform-gpu place-items-center"
          style={{
            animation: "size-bounce 10s linear infinite",
          }}
        >
          <div
            className={cn(
              "absolute size-[300px] transform-gpu rounded-full opacity-80 blur-2xl",
            )}
            style={{
              background: "conic-gradient(#A6EFFF, #12ADE6, #4C63FC)",
              animation: "spin-left 15s linear infinite",
            }}
          />
        </div>
      </div>
    </>
  );
};
