"use client";
import React, { useState, useTransition } from "react";
import { Calendar, Sparkles } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function BookMeetingPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      // Replace with your actual booking logic
      setTimeout(() => {
        setMessage("Thanks! We'll be in touch shortly to schedule your demo.");
        setEmail("");
      }, 1500);
    });
  };

  return (
    <section className="flex flex-col items-center justify-between w-full min-h-[10vh] max-h-[80vh] px-4">
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
        <div className="mb-4 sm:mb-8">
          <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-3 max-w-fit">
            <span className="text-sm sm:text-lg font-bold whitespace-nowrap">
              Book a Demo
            </span>
            <Sparkles className="text-[#E1FF41] animate-pulse" size={24} />
          </div>
        </div>
        <h1 className="text-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8">
          Experience the Future of CX
        </h1>
        <h2 className="max-w-3xl mx-auto text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed">
          See how our Alexa-like voicebot can automate 60% of your support and
          transform your customer experience.
        </h2>
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
          >
            {isPending ? "Scheduling..." : "Book Demo"}
          </Button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-500">{message}</p>
        )}
      </div>
    </section>
  );
}
