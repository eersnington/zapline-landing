"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from "posthog-js/react";

interface Benefit {
  title: string;
  description: string;
  video: string;
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
  const videoRef = useRef<HTMLVideoElement>(null);

  const posthog = usePostHog();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            posthog.capture("viewed_benefits_videos");
            observer.disconnect(); // Disconnect after first view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, benefits[activeIndex].duration);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((error) => console.error("Error playing video:", error));
    }
  }, [activeIndex]);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen bg-black flex items-center justify-center rounded-[2.5rem]"
    >
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
              onClick={() => setActiveIndex(index)}
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
                <video
                  key={benefits[activeIndex].video}
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={benefits[activeIndex].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

Error playing video: AbortError: The play() request was interrupted because video-only background media was paused to save power. https://goo.gl/LdLk22

*/
