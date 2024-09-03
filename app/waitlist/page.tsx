"use client";

import React, { useState } from "react";
import { Bell } from "lucide-react";
import { addToWaitlist } from "@/app/_actions/waitlist";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    const result = await addToWaitlist(formData);
    setMessage(result.message);
    setIsLoading(false);
    if (!result.message.includes("Error")) {
      setEmail("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <Card className="max-w-md w-full p-8 bg-black text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#E1FF41]">
          Join Our Waitlist
        </h1>
        <div className="text-center mb-8 text-gray-300">
          Be the first to know when we launch! Enter your email below to join
          our waitlist.
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            classNames={{
              label: "text-white",
              input: "text-white bg-gray-800 placeholder-gray-400",
            }}
          />
          <Button
            type="submit"
            size="lg"
            isLoading={isLoading}
            startContent={!isLoading && <Bell size={20} />}
            fullWidth
            className="bg-[#E1FF41] text-black hover:bg-white hover:text-black transition-colors"
          >
            {isLoading ? "Submitting..." : "Get Notified"}
          </Button>
        </form>
        {message && (
          <div
            className={`mt-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-[#E1FF41]"
            }`}
          >
            {message}
          </div>
        )}
      </Card>
    </div>
  );
}
