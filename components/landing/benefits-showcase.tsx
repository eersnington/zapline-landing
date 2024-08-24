"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@nextui-org/progress";
import { Skeleton } from "@nextui-org/skeleton";

const benefits = [
  {
    title: "Automate 60% of Customer Queries",
    description: "Focus on what humans do best and let AI handle the rest",
    color: "bg-purple-400",
  },
  {
    title: "Resolve Queries in <1min",
    description: "Respond to customer queries faster than ever before.",
    color: "bg-blue-400",
  },
  {
    title: "Built for E-commerce",
    description: "Tailored to the needs of handling support tickets.",
    color: "bg-green-400",
  },
  {
    title: "Predefined Actions for Smooth Operations",
    description:
      // write something like forget about repetive tasks after setting it up once
      "Set up once and forget about repetitive tasks.",
    color: "bg-yellow-400",
  },
];

export function BenefitsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 4000; // 4 seconds
    const step = 100 / (interval / 50); // Update every 50ms

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress + step >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
          return 0;
        }
        return oldProgress + step;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-gradient-to-br from-purple-200 to-[#f6d1b5] min-h-screen">
      <div className="w-full md:w-1/2 space-y-6 pr-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            animate={{
              opacity: index === activeIndex ? 1 : 0.6,
              scale: index === activeIndex ? 1.05 : 1,
            }}
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-gray-100"
            }`}
            initial={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {index === activeIndex && (
              <Progress
                aria-label="Loading..."
                className="w-full h-1 mb-4"
                color="secondary"
                value={progress}
              />
            )}
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
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
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full"
            exit={{ opacity: 0, scale: 0.9 }}
            initial={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton
              className={`w-full h-full ${benefits[activeIndex].color}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
