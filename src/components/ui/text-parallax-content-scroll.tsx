import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getOptimizedImageUrl, getImageSrcSet } from "@/utils/image-optimization";

interface ServiceParallaxItem {
  imgUrl: string;
  subheading: string;
  heading: string;
  title: string;
  description: string;
}

interface ServiceParallaxContentProps {
  items: ServiceParallaxItem[];
}

export const ServiceParallaxContent: React.FC<ServiceParallaxContentProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={item.imgUrl}
          subheading={item.subheading}
          heading={item.heading}
          isFirst={index === 0}
        >
          <ExampleContent
            title={item.title}
            description={item.description}
          />
        </TextParallaxContent>
      ))}
    </>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
  isFirst?: boolean;
}

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
  isFirst
}) => {
  return (
    <div
      className="w-full"
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh] w-full">
        <StickyImage imgUrl={imgUrl} isFirst={isFirst} />
        <OverlayCopy heading={heading} subheading={subheading} isFirst={isFirst} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
  isFirst?: boolean;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl, isFirst }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        minHeight: "500px",
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl w-full"
    >
      <img
        src={getOptimizedImageUrl(imgUrl, 1200)}
        srcSet={getImageSrcSet(imgUrl, [400, 800, 1200, 1600])}
        sizes="100vw"
        alt=""
        loading={isFirst ? "eager" : "lazy"}
        fetchPriority={isFirst ? "high" : "auto"}
        decoding={isFirst ? "sync" : "async"}
        className="absolute inset-0 h-full w-full object-cover object-center"
        width="1200"
        height="800"

      />
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
  isFirst?: boolean;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading, isFirst }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8"
    >
      <p className="mb-2 text-center text-base sm:text-lg md:mb-4 md:text-2xl lg:text-3xl">
        {subheading}
      </p>
      {isFirst ? (
        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-4xl leading-tight">{heading}</h1>
      ) : (
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-4xl leading-tight">{heading}</h2>
      )}
    </motion.div>
  );
};

interface ExampleContentProps {
  title: string;
  description: string;
}

const ExampleContent: React.FC<ExampleContentProps> = ({ title, description }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 pb-24 pt-12 md:grid-cols-12 w-full">
    <h2 className="col-span-1 text-2xl md:text-3xl font-bold text-white md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);
