"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import clsx from "clsx";
import Image from "next/image";

interface Section {
  title: string;
  description: string;
  icon: string;
  gradientPosition: string;
  image?: string;
}

const sections: Section[] = [
  {
    title: "Simple setup in 1 hour",
    description:
      "Create the knowledge base and connect your existing apps to build powerful, automated workflows.",
    icon: "⚡",
    gradientPosition: "50% 0%",
    image: "/section1.png",
  },
  {
    title: "Full resolutions in under 1 minute",
    description:
      "Our Voice AI communicates seamlessly between your apps, accessing and updating information in real-time.",
    icon: "🚀",
    gradientPosition: "100% 0%",
    image: "/section2.png",
  },
  {
    title: "High quality responses within your control",
    description:
      "Review and coach the AI to improve accuracy and provide the best customer experience.",
    icon: "🎯",
    gradientPosition: "0% 100%",
    image: "/section3.png",
  },
];

const Card: React.FC<{ section: Section; i: number }> = ({ section, i }) => {
  const cardSize = 100 - i * 1; // Decrease size by 1% for each subsequent card

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className={clsx(
          "flex flex-col relative rounded-[25px] bg-black text-white overflow-hidden border-2 border-white"
        )}
        style={{
          width: `${cardSize}vw`,
          height: `${cardSize}vh`,
          maxWidth: "95vw",
          maxHeight: "95vh",
          position: "absolute",
          top: `${50 + i * 2.25}%`,
          left: "50%",
          transform: `translate(-50%, -50%)`,
          padding: `${5 - i * 0.5}rem`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${section.gradientPosition}, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
        <div className="flex flex-col md:flex-row h-full gap-8 relative z-10">
          <div className="w-full md:w-[40%] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              {section.description}
            </p>
          </div>
          <div className="relative w-full md:w-[60%] h-[35%]  md:h-full rounded-[25px] overflow-hidden mt-4 md:mt-0">
            {section.image ? (
              <Image
                src={section.image}
                alt={section.title}
                layout="fill"
                objectFit="cover"
                priority={i === 0} // Load the first image with priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#E1FF41] to-[#00FF00]" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StackedSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] mb-8">
      {sections.map((section, i) => (
        <Card key={i} i={i} section={section} />
      ))}
    </div>
  );
};

export default StackedSections;
