"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@nextui-org/skeleton";

const benefits = [
  {
    title: "Automate 60% of Customer Queries",
    description: "Focus on what humans do best and let AI handle the rest",
  },
  {
    title: "Resolve Queries in <1min",
    description: "Respond to customer queries faster than ever before.",
  },
  {
    title: "Built for E-commerce",
    description: "Tailored to the needs of handling support tickets.",
  },
  {
    title: "Predefined Actions for Smooth Operations",
    description: "Set up once and forget about repetitive tasks.",
  },
];

export function BenefitsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 min-h-screen">
      <div className="w-full md:w-1/2 space-y-6 pr-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            animate={{
              opacity: index === activeIndex ? 1 : 0.7,
            }}
            className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
              index === activeIndex
                ? "bg-white/80 backdrop-blur-sm border-l-4 border-[#FF0B7C]"
                : "bg-white/50 backdrop-blur-sm"
            }`}
            initial={{ opacity: 0.7 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {benefit.title}
            </h3>
            <p className="text-md text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative h-[500px] overflow-hidden rounded-lg shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            animate={{ opacity: 1 }}
            className="w-full h-full"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton className="w-full h-full bg-gradient-to-br from-[#FF0B7C] to-purple-400" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
