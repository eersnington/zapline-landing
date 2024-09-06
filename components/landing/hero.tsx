"use client";

import React, { useState, useTransition, Suspense, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Sparkles, Users } from "lucide-react";
import { usePostHog } from "posthog-js/react";

import {
  title as titleStyles,
  subtitle as subtitleStyles,
} from "@/components/primitives";
import { addToWaitlist, getWaitlistCount } from "@/app/_actions/waitlist";

const WaitlistCount = () => {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchCount = async () => {
      const newCount = await getWaitlistCount();

      setCount(newCount);
    };

    fetchCount();

    const handleUpdate = () => fetchCount();

    window.addEventListener("waitlistUpdated", handleUpdate);

    return () => window.removeEventListener("waitlistUpdated", handleUpdate);
  }, []);

  return (
    <span className="text-lg sm:text-xl font-semibold">
      Join {count === null ? "..." : count} store owner{count !== 1 ? "s" : ""}{" "}
      on the waitlist
    </span>
  );
};

export const Hero: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("viewed_hero_landing");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const formData = new FormData();

      formData.append("email", email);
      const result = await addToWaitlist(formData);

      posthog.capture("submitted_waitlist");

      setMessage(result.message);
      if (!result.message.includes("Error")) {
        setEmail("");
        // Trigger a re-render of the WaitlistCount component
        const event = new Event("waitlistUpdated");

        window.dispatchEvent(event);
      }
    });
  };

  return (
    <section className="flex flex-col items-center justify-between w-full min-h-[10vh] max-h-[80vh] px-4">
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
        <div className="mb-4 sm:mb-8">
          <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-3 max-w-fit">
            <span className="text-sm sm:text-lg font-bold whitespace-nowrap">
              Automate 60% of your support
            </span>
            <Sparkles className="text-[#E1FF41] animate-pulse" size={24} />
          </div>
        </div>
        <h1
          className={titleStyles({
            size: "xl",
            class:
              "text-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8",
          })}
        >
          Elevate your CX with an
          <br />
          Alexa-like Voicebot
        </h1>
        <h2
          className={subtitleStyles({
            class:
              "max-w-3xl mx-auto text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed",
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
          <Suspense
            fallback={
              <span className="text-lg sm:text-xl font-semibold">
                Join ... store owners on the waitlist
              </span>
            }
          >
            <WaitlistCount />
          </Suspense>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <form
          className="flex flex-col sm:flex-row gap-4 justify-center"
          onSubmit={handleSubmit}
        >
          <Input
            required
            className="w-full sm:w-[400px] text-base sm:text-lg"
            color="primary"
            name="email"
            placeholder="Enter your work email"
            radius="full"
            size="lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="bg-[#E1FF41] text-black hover:bg-black hover:text-white px-6 py-3 sm:px-10 sm:py-7 text-lg sm:text-xl font-semibold rounded-full transition-colors"
            disabled={isPending}
            size="lg"
            type="submit"
            variant="flat"
          >
            {isPending ? "Submitting..." : "Get Notified"}
          </Button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};
