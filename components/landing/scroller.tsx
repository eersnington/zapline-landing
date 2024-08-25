"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Section {
  title: string;
  description: string;
  gradientDirection: string;
  width: string;
}

const sections: Section[] = [
  {
    title: "Simple setup in 1 hour",
    description:
      "Create the knowledge base and connect your existing apps to build powerful, automated workflows.",
    gradientDirection: "to right",
    width: "98%",
  },
  {
    title: "Full resolutions in under 1 minute",
    description:
      "Our Voice AI communicates seamlessly between your apps, accessing and updating information in real-time.",
    gradientDirection: "to bottom right",
    width: "93%",
  },
  {
    title: "High quality responses within your control",
    description:
      "Review and coach the AI to improve accuracy and provide the best customer experience.",
    gradientDirection: "to bottom",
    width: "88%",
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (sectionRef.current) {
        const width = sectionRef.current.offsetWidth;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center sticky top-0 w-full"
      style={{ y, height: `${dimensions.height}px` }}
    >
      <motion.div
        ref={sectionRef}
        className="mx-auto rounded-[25px] p-8 md:p-16 flex flex-col justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        style={{
          background: `linear-gradient(${section.gradientDirection}, #8B5CF6, #FFA07A)`,
          width: section.width,
          height: "100%",
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Section content */}
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
