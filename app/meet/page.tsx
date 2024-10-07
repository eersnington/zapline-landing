"use client";
import React, { useState, useTransition } from "react";
import { Calendar, Sparkles, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { addToWaitlist } from "../_actions/waitlist";

export default function BookMeetingPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const formData = new FormData();
      formData.append("email", email);

      const result = await addToWaitlist(formData);

      console.log(result);

      if (!result.message.includes("Error")) {
        setMessage("Thanks! We'll be in touch shortly to schedule your demo.");
        setEmail("");
      } else {
        setMessage(result.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-black rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#E1FF41] mb-2">
                    Book Your Demo
                  </h2>
                  <p className="text-gray-400">
                    See how our Alexa-like voicebot transforms customer support
                  </p>
                </div>
                <Input
                  required
                  className="w-full"
                  classNames={{
                    input: "bg-gray-400 text-white placeholder-gray-200",
                    inputWrapper: "bg-gray-200",
                  }}
                  placeholder="Enter your work email"
                  radius="full"
                  size="lg"
                  startContent={<Mail className="text-gray-800" size={20} />}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="w-full bg-[#E1FF41] text-black hover:bg-white hover:text-black px-6 py-7 text-lg font-semibold rounded-full transition-colors"
                  disabled={isPending}
                  size="lg"
                  type="submit"
                >
                  {isPending ? "Scheduling..." : "Schedule Demo"}
                </Button>
                {message && (
                  <p className="mt-4 text-center text-[#E1FF41]">{message}</p>
                )}
              </form>
            </div>
          </div>

          {/* Right side - Info */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                  Ready to take your CX to a{" "}
                  <span className="text-[#E1FF41] bg-black rounded-md px-2 py-1">
                    whole new level?
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  Book a personalized demo to see how our AI voicebot can
                  transform your customer experience
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Clock className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Quick Requirements Check
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll ask a few questions to understand your needs
                      and where our voicebot can help
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Phone className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Live Interaction
                    </h3>
                    <p className="text-gray-600">
                      Try our voicebot and see the magic happen in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Sparkles className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Tailored to You
                    </h3>
                    <p className="text-gray-600">
                      See specific use cases for your business needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
