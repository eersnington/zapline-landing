import React from "react";
import { Button } from "@nextui-org/button";

import {
  title as titleStyles,
  subtitle as subtitleStyles,
} from "@/components/primitives";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="inline-block max-w-4xl">
        <div className="mb-6">
          <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
            AI-Powered Customer Support for Shopify
          </span>
        </div>
        <div className="my-12">
          <h1
            className={titleStyles({
              size: "lg",
              class: "text-black leading-tight",
            })}
          >
            Revolutionize Your Shopify Store <br /> with Intelligent Voice AI
          </h1>
        </div>
        <h2
          className={subtitleStyles({
            class: "max-w-3xl mx-auto text-gray-700 text-xl",
          })}
        >
          Automate 70% of customer queries and provide a 24/7 conversational
          experience that delights shoppers and boosts sales. Elevate your
          e-commerce game with voice AI.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button
          className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold"
          color="default"
          size="lg"
          variant="solid"
        >
          Join Waitlist
        </Button>
        <Button
          className="bg-[#ffbe86] text-black hover:bg-[#ffcba4] px-8 py-6 text-lg font-semibold"
          color="primary"
          size="lg"
          variant="flat"
        >
          Watch 1-Min Demo
        </Button>
      </div>
    </section>
  );
};
