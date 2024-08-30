"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@nextui-org/skeleton";

const benefits = [
  {
    title: "Automate 60% of Customer Queries",
    description: "Focus on what humans do best and let AI handle the rest",
    video: "/vid1.mp4",
    duration: 6000, // 5 seconds
  },
  {
    title: "Resolve Queries in <1min",
    description: "Respond to customer queries faster than ever before.",
    duration: 3000, // 3 seconds
  },
  {
    title: "Built for E-commerce",
    description: "Tailored to the needs of handling support tickets.",
    video: "/vid3.mp4",
    duration: 9000, // 9 seconds
  },
  {
    title: "Predefined Actions for Smooth Operations",
    description: "Set up once and forget about repetitive tasks.",
    video: "/vid4.mp4",
    duration: 6000, // 6 seconds
  },
];

export default function BenefitsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advanceSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  }, []);

  useEffect(() => {
    const currentBenefit = benefits[activeIndex];
    const timer = setTimeout(advanceSlide, currentBenefit.duration);

    return () => clearTimeout(timer);
  }, [activeIndex, advanceSlide]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center rounded-[2.5rem]">
      <div className="w-full h-full flex flex-col md:flex-row justify-between items-center p-8">
        <div className="w-full md:w-1/2 h-full overflow-y-auto pr-4 md:pr-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              animate={{
                opacity: index === activeIndex ? 1 : 0.7,
              }}
              className={`p-6 mb-6 rounded-lg shadow-md transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white/10 backdrop-blur-sm border-l-4 border-[#E1FF41]"
                  : "bg-white/5 backdrop-blur-sm"
              }`}
              initial={{ opacity: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="w-full md:w-1/2 h-full md:pl-8 pt-8 md:pt-0">
          <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                animate={{ opacity: 1 }}
                className="w-full h-full"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {benefits[activeIndex].video ? (
                  <video
                    className="w-full h-full object-cover"
                    src={benefits[activeIndex].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Skeleton className="w-full h-full bg-gradient-to-br from-[#E1FF41] to-[#00FF00]" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
