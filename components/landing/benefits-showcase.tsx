"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@nextui-org/skeleton";

interface Benefit {
  title: string;
  description: string;
  video?: string;
  duration: number;
}

const benefits: Benefit[] = [
  {
    title: "Automate 60% of Customer Queries",
    description: "Focus on what humans do best and let AI handle the rest",
    video: "/vid1.mp4",
    duration: 6000,
  },
  {
    title: "Resolve Queries in <1min",
    description: "Respond to customer queries faster than ever before.",
    video: "/vid2.mp4",
    duration: 9000,
  },
  {
    title: "Built for E-commerce",
    description: "Tailored to the needs of handling support tickets.",
    video: "/vid3.mp4",
    duration: 8800,
  },
  {
    title: "Predefined Actions for Smooth Operations",
    description: "Set up once and forget about repetitive tasks.",
    video: "/vid4.mp4",
    duration: 8200,
  },
];

export default function BenefitsShowcase(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const advanceSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  }, []);

  useEffect(() => {
    const currentBenefit = benefits[activeIndex];
    const timer = setTimeout(advanceSlide, currentBenefit.duration);

    return () => clearTimeout(timer);
  }, [activeIndex, advanceSlide]);

  useEffect(() => {
    setIsVideoLoaded(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeIndex]);

  const handleCardClick = (index: number): void => {
    setActiveIndex(index);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
    setIsVideoLoaded(false);
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center rounded-[2.5rem]">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center p-8 gap-8">
        <div className="w-full lg:w-1/2 h-full overflow-y-auto pr-4 lg:pr-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              animate={{
                opacity: index === activeIndex ? 1 : 0.7,
              }}
              className={`p-6 mb-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "bg-white/10 backdrop-blur-sm border-l-4 border-[#E1FF41]"
                  : "bg-white/5 backdrop-blur-sm hover:bg-white/15"
              }`}
              initial={{ opacity: 0.7 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8 pt-8 lg:pt-0">
          <div className="w-full max-w-[900px] aspect-square relative rounded-2xl overflow-hidden shadow-xl">
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
                  isVideoLoaded ? (
                    <video
                      key={activeIndex}
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      src={benefits[activeIndex].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onLoadedData={handleVideoLoaded}
                      onError={handleVideoError}
                    />
                  ) : (
                    <Skeleton className="w-full h-full bg-gradient-to-br from-[#E1FF41] to-[#F0F68A]" />
                  )
                ) : (
                  <Skeleton className="w-full h-full bg-gradient-to-br from-[#E1FF41] to-[#F0F68A]" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
