"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

type MarqueeAnimationProps = {
  children: string;
  className?: string;
  direction?: "left" | "right";
  baseVelocity: number;
};

const MarqueeAnimation = React.memo(({
  children,
  className,
  direction = "left",
  baseVelocity = 10,
}: MarqueeAnimationProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (direction == "left") {
      directionFactor.current = 1;
    } else if (direction == "right") {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden w-full text-nowrap flex-nowrap flex relative">
      <motion.div
        className={cn(
          "font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-nowrap text-nowrap *:block *:me-4 sm:*:me-6 md:*:me-8 lg:*:me-10 will-change-transform",
          className
        )}
        style={{ x }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
});

export { MarqueeAnimation };
