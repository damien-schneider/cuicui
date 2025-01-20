import Stack from "@/cuicui/marketing-ui/features/stack/stack";
import { cn } from "@/cuicui/utils/cn";
import { HomeIcon } from "lucide-react";
import type { ComponentProps } from "react";

const CardExample = ({
  className,
  children,
  ...props
}: { children: string } & ComponentProps<"div">) => {
  return (
    <div className={cn("size-full p-4 rounded-2xl", className)} {...props}>
      <HomeIcon className="size-5 mb-2" />
      <p className="tracking-tighter font-semibold text-lg">{children}</p>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    content: (
      <CardExample className="bg-amber-500 text-white">
        Home is a great place to work.
      </CardExample>
    ),
  },
  {
    id: 2,
    content: (
      <CardExample className="bg-lime-500 text-white">
        Home is a great place to work.
      </CardExample>
    ),
  },
  {
    id: 3,
    content: (
      <CardExample className="bg-violet-500 text-white">
        Home is a great place to work.
      </CardExample>
    ),
  },
  {
    id: 4,
    content: (
      <CardExample className="bg-red-500 text-white">
        Home is a great place to work.
      </CardExample>
    ),
  },
];

export const StackPreview = () => {
  return <Stack randomRotation={true} cardHeight={140} cardsData={cardsData} />;
};

export default StackPreview;
