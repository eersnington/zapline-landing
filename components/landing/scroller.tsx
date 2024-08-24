"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Section {
  title: string;
  description: string;
  gradientDirection: string;
}

const sections: Section[] = [
  {
    title: "Section One",
    description:
      "This is the description for section one. It can be a brief overview or a longer explanation of the content.",
    gradientDirection: "to right",
  },
  {
    title: "Section Two",
    description:
      "Section two's description goes here. You can customize this text to fit your needs and provide relevant information.",
    gradientDirection: "to bottom right",
  },
  {
    title: "Section Three",
    description:
      "The third section's description. This could be about a project, a service, or any other topic you'd like to highlight.",
    gradientDirection: "to bottom",
  },
];

const StackedSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {sections.map((section, i) => (
        <Section
          key={`s_${i}`}
          index={i}
          progress={scrollYProgress}
          section={section}
        />
      ))}
    </div>
  );
};

const Section = ({
  section,
  index,
  progress,
}: {
  section: Section;
  index: number;
  progress: any;
}) => {
  const y = useTransform(progress, [0, 1], [0, -50 * index]);

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center sticky top-0 rounded-lg bg-grey"
      style={{ y }}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto h-[80vh] rounded-[25px] p-8 md:p-16 flex flex-col justify-center "
        initial={{ opacity: 0, y: 50 }}
        style={{
          background: `linear-gradient(${section.gradientDirection}, #8B5CF6, #FFA07A)`,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8 text-white">
          {section.title}
        </h2>
        <div className="flex flex-col md:flex-row h-full gap-8">
          <div className="w-full md:w-2/5 flex items-center">
            <p className="text-lg md:text-xl text-white first-letter:text-4xl first-letter:font-serif">
              {section.description}
            </p>
          </div>
          <div className="w-full md:w-3/5 h-64 md:h-full relative rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white bg-opacity-20 rounded-2xl" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StackedSections;
