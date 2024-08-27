"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Section {
  title: string;
  description: string;
  gradientDirection: string;
}

const sections: Section[] = [
  {
    title: "Simple setup in 1 hour",
    description:
      "Create the knowledge base and connect your existing apps to build powerful, automated workflows.",
    gradientDirection: "to right",
  },
  {
    title: "Full resolutions in under 1 minute",
    description:
      "Our Voice AI communicates seamlessly between your apps, accessing and updating information in real-time.",
    gradientDirection: "to bottom right",
  },
  {
    title: "High quality responses within your control",
    description:
      "Review and coach the AI to improve accuracy and provide the best customer experience.",
    gradientDirection: "to bottom",
  },
];

const StackedSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${windowHeight * 3}px` }}
      className="relative"
    >
      {sections.map((section, index) => (
        <Section
          key={index}
          section={section}
          index={index}
          scrollYProgress={scrollYProgress}
          windowHeight={windowHeight}
          totalSections={sections.length}
        />
      ))}
    </div>
  );
};

const Section: React.FC<{
  section: Section;
  index: number;
  scrollYProgress: any;
  windowHeight: number;
  totalSections: number;
}> = ({ section, index, scrollYProgress, windowHeight, totalSections }) => {
  const scale = 1 - index * 0.05;
  const y = useTransform(
    scrollYProgress,
    [index / totalSections, (index + 1) / totalSections],
    [windowHeight, 0]
  );

  const gapSize = `${(index + 1) * 1}vw`;

  return (
    <motion.div
      className="top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      style={{ y }}
    >
      <motion.div
        className="rounded-[25px] p-8 flex flex-col justify-center overflow-hidden"
        style={{
          background: `linear-gradient(${section.gradientDirection}, #8B5CF6, #FFA07A)`,
          width: `calc(100% - ${gapSize})`,
          height: `calc(98vh - ${gapSize})`,
          scale: scale,
        }}
      >
        <div className="flex flex-col md:flex-row h-full gap-8">
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl text-white">
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
