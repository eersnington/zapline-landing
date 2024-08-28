"use client";

import React from "react";
import { motion } from "framer-motion";

interface Section {
  title: string;
  description: string;
  icon: string;
  gradientPosition: string;
}

const sections: Section[] = [
  {
    title: "Simple setup in 1 hour",
    description:
      "Create the knowledge base and connect your existing apps to build powerful, automated workflows.",
    icon: "⚡",
    gradientPosition: "50% 0%",
  },
  {
    title: "Full resolutions in under 1 minute",
    description:
      "Our Voice AI communicates seamlessly between your apps, accessing and updating information in real-time.",
    icon: "🚀",
    gradientPosition: "100% 0%",
  },
  {
    title: "High quality responses within your control",
    description:
      "Review and coach the AI to improve accuracy and provide the best customer experience.",
    icon: "🎯",
    gradientPosition: "0% 100%",
  },
];

const Card: React.FC<{ section: Section; i: number }> = ({ section, i }) => {
  const cardSize = 100 - i * 0.5; // Decrease size by 0.5% for each subsequent card

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="flex flex-col relative rounded-[25px] bg-black text-white overflow-hidden border-2 border-white"
        style={{
          width: `${cardSize}vw`,
          height: `${cardSize}vh`,
          maxWidth: "95vw", // Prevent overflow
          maxHeight: "95vh", // Prevent overflow
          position: "absolute",
          top: `${50 + i * 1.25}%`,
          left: "50%",
          transform: `translate(-50%, -50%)`,
          padding: `${5 - i * 0.5}rem`, // Decrease padding for smaller cards
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${section.gradientPosition}, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
        <h2 className="text-center m-0 text-[28px] relative z-10">
          {section.title}
        </h2>
        <div className="flex h-full mt-[50px] gap-[50px] relative z-10">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-[16px] first-letter:text-[28px]">
              {section.description}
            </p>
          </div>
          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#E1FF41] to-[#00FF00]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StackedSections: React.FC = () => {
  return (
    <div className="h-[300vh]">
      {sections.map((section, i) => (
        <Card key={i} i={i} section={section} />
      ))}
    </div>
  );
};

export default StackedSections;
