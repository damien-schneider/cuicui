"use client";
import { cn } from "@/cuicui/utils/cn";
import { motion } from "motion/react";
import { useState } from "react";

interface UserInfoProps {
  avatar: string;
  name: string;
  position: string;
}

const UserInfo = ({ avatar, name, position }: UserInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-lg object-cover shadow-2xs"
      />
      <div className="flex flex-col">
        <h6 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
          {name}
        </h6>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {position}
        </p>
      </div>
    </div>
  );
};

interface TestimonialMessageProps {
  message: string;
}

const TestimonialMessage = ({ message }: TestimonialMessageProps) => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-700 border border-neutral-400/20 border-dashed rounded-md p-4 shadow-2xs flex flex-col gap-2">
      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-5">
        {message}
      </p>
    </div>
  );
};

interface TestimonialCardProps {
  avatar: string;
  name: string;
  position: string;
  message: string;
}

export const TestimonialCard = ({
  avatar,
  name,
  position,
  message,
}: TestimonialCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "w-full sm:max-w-sm p-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex gap-2 cursor-pointer hover:scale-[1.02] transition-transform duration-200 ease-out",
        hovered ? "flex-col-reverse" : "flex-col",
      )}
    >
      <motion.div layout={true}>
        <UserInfo avatar={avatar} name={name} position={position} />
      </motion.div>
      <motion.div layout={true}>
        <TestimonialMessage message={message} />
      </motion.div>
    </div>
  );
};
