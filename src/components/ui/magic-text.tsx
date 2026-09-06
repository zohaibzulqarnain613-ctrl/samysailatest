"use client"

import * as React from "react"

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[12px] mr-1 text-xl md:text-3xl font-semibold text-white">
      <span className="absolute opacity-20 text-white">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.95", "start 0.3"],
  });
  text;
  const words = text.split(" ");

  return (
    <p ref={container} className="flex flex-wrap leading-relaxed p-2 md:p-4 min-h-[300px] md:min-h-[200px]">
      {words.map((word, i) => {
        const start = i / words.length;

        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
