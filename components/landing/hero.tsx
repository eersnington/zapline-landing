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
    <section className="flex flex-col items-center justify-center w-full px-4">
      <div className="inline-block max-w-5xl text-center">
        <div className="mb-12 flex justify-center">
          <div className="bg-black text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-3 max-w-fit">
            <span className="text-lg font-bold whitespace-nowrap">
              Automate 60% of your support
            </span>
            <Sparkles className="text-[#E1FF41] animate-pulse" size={28} />
          </div>
        </div>
        <div className="my-16">
          <h1
            className={titleStyles({
              size: "xl",
              class: "text-black leading-tight text-7xl font-bold",
            })}
          >
            Elevate your CX with an
            <br />
            Alexa-like Voicebot
          </h1>
        </div>
        <h2
          className={subtitleStyles({
            class:
              "max-w-3xl mx-auto text-black text-3xl mb-16 leading-relaxed",
          })}
        >
          Let customers simply talk to get instant help on your store. Our
          Alexa-like voicebot delivers complete resolutions in under a
          minute—faster than any traditional chatbot.
        </h2>
        <div className="flex items-center justify-center mb-8 text-gray-600">
          <Users className="mr-2 text-[#E1FF41]" size={24} />
          <span className="text-xl font-semibold">
            Join 149 store owners on the waitlist
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            className="w-full sm:w-[400px] text-lg"
            placeholder="Enter your work email"
            size="lg"
            type="email"
            color="primary"
            radius="full"
          />
          <Button
            className="bg-[#E1FF41] text-black hover:bg-black hover:text-white px-10 py-7 text-xl font-semibold rounded-full transition-colors"
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
