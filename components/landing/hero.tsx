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
    <section className="flex flex-col items-center justify-center w-full px-4 py-8">
      <div className="inline-block max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-black text-gray-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2 max-w-fit">
            <span className="text-sm font-bold whitespace-nowrap">
              Automate 60% of your support
            </span>
            <Sparkles className="text-purple-500 animate-pulse" size={24} />
          </div>
        </div>
        <div className="my-12">
          <h1
            className={titleStyles({
              size: "xl",
              class: "text-black leading-tight",
            })}
          >
            Have an Alexa-like voice bot that lives in your store
            {/* I need this h1 to be rephrased: Let customers solve their queries with Alexa like voice assistant in
            your store */}
          </h1>
        </div>
        <h2
          className={subtitleStyles({
            class: "max-w-3xl mx-auto text-black text-xl mb-12",
          })}
        >
          Let customers resolve their queries with an Alexa-like voice bot that
          manages orders, runs your custom workflows, and integrates with your
          favorite apps. Delivering full resolutions in under a minute,
          it&apos;s faster than any chatbot.
        </h2>
        <div className="flex items-center justify-center mb-6 text-gray-600">
          <span className="text-sm font-semibold">
            👋 Join 149 store owners on the waitlist
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            className="w-full sm:w-96"
            placeholder="Enter your work email"
            size="lg"
            type="email"
          />
          <Button
            className="bg-[#ffbe86] text-black hover:bg-[#ffcba4] px-8 py-6 text-lg font-semibold"
            color="primary"
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
