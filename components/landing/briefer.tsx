"use client";

import React, { useState, useEffect, useRef } from "react";
import { ThumbsUp, ThumbsDown, Tag, Package, RotateCcw } from "lucide-react";
import { usePostHog } from "posthog-js/react";

const VideoFrame = ({ height, width }: { height: number; width: number }) => (
  <div className="w-full h-full relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
    <video
      autoPlay
      controls
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
      height={height}
      src="/zap2.0-demo-vod-final.mp4"
      style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
      width={width}
    />
  </div>
);
const TextColumn = ({ height }: { height: number }) => (
  <div
    className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col justify-between shadow-lg border border-gray-200 overflow-y-auto"
    style={{ height: `${height}px` }}
  >
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 lg:mb-6 text-black">
        Voice Agent&apos;s Response
      </h2>
      <div className="space-y-2 md:space-y-3 lg:space-y-4">
        <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-semibold text-gray-600 mb-1 md:mb-2 flex items-center">
            <Package className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> DATA
            FETCHED
          </h4>
          <div className="flex justify-between items-center">
            <span className="text-black text-sm md:text-base font-medium">
              Order Status
            </span>
            <div className="space-x-1 md:space-x-2">
              <button className="text-green-500 hover:text-green-600">
                <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <ThumbsDown className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-black text-sm md:text-base font-medium">
              Tracking Link
            </span>
            <div className="space-x-1 md:space-x-2">
              <button className="text-green-500 hover:text-green-600">
                <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <ThumbsDown className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-semibold text-gray-600 mb-1 md:mb-2 flex items-center">
            <RotateCcw className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />{" "}
            INSTRUCTION
          </h4>
          <div className="flex justify-between items-center">
            <span className="text-black text-sm md:text-base font-medium">
              WISMO Action
            </span>
            <div className="space-x-1 md:space-x-2">
              <button className="text-green-500 hover:text-green-600">
                <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <ThumbsDown className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-semibold text-gray-600 mb-1 md:mb-2 flex items-center">
            <Tag className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> TICKET
            ACTIONS
          </h4>
          <div className="flex flex-wrap gap-1 md:gap-2">
            <span className="inline-block bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
              WISMO
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
              Resolved
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Briefer = () => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  const posthog = usePostHog();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            posthog.capture("viewed_briefer_demo");
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
    const updateDimensions = () => {
      const containerWidth = Math.min(window.innerWidth * 0.66, 960); // 2/3 of the window width, max 1600px
      const containerHeight = Math.min(containerWidth * (10 / 16), 600); // 16:10 aspect ratio, max height 1000px

      setContainerDimensions({
        width: containerWidth,
        height: containerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full max-w-[1600px] mx-auto mt-8 md:mt-16 lg:mt-24 px-4"
    >
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8">
        <div
          className="w-full md:w-2/3"
          style={{
            height: `${containerDimensions.height}px`,
            maxWidth: `${containerDimensions.width}px`,
          }}
        >
          <VideoFrame
            height={containerDimensions.height}
            width={containerDimensions.width}
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextColumn height={containerDimensions.height} />
        </div>
      </div>
    </div>
  );
};

export default Briefer;
