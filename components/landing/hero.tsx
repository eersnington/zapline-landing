import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Sparkles, Users } from "lucide-react";

import {
  title as titleStyles,
  subtitle as subtitleStyles,
} from "@/components/primitives";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full max-h-screen px-4 py-4">
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
        <div className="mb-4 sm:mb-8">
          <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-3 max-w-fit">
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
              Automate 60% of your support
            </span>
            <Sparkles className="text-[#E1FF41] animate-pulse" size={24} />
          </div>
        </div>
        <h1
          className={titleStyles({
            size: "xl",
            class:
              "text-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8",
          })}
        >
          Elevate your CX with an
          <br />
          Alexa-like Voicebot
        </h1>
        <h2
          className={subtitleStyles({
            class:
              "max-w-4xl mx-auto text-black text-base sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed",
          })}
        >
          Let customers simply talk to get instant help on your store. Our
          Alexa-like voicebot delivers complete resolutions in under a
          minute—faster than any traditional chatbot.
        </h2>
        <div className="flex items-center justify-center mb-6 text-gray-600">
          <Users
            className="mr-2 bg-black rounded-full text-[#E1FF41] p-2"
            size={32}
          />
          <span className="text-lg sm:text-xl font-semibold">
            Join 149 store owners on the waitlist
          </span>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            className="w-full sm:w-[400px] text-base sm:text-lg"
            placeholder="Enter your work email"
            size="lg"
            type="email"
            color="primary"
            radius="full"
          />
          <Button
            className="bg-[#E1FF41] text-black hover:bg-black hover:text-white px-6 py-3 sm:px-10 sm:py-7 text-lg sm:text-xl font-semibold rounded-full transition-colors"
            size="lg"
            variant="flat"
          >
            Get Notified
          </Button>
        </div>
      </div>
    </section>
  );
};
