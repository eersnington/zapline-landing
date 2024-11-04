"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { usePostHog } from "posthog-js/react";

const pricingTiers = [
  {
    name: "Basic",
    price: 19,
    responses: 190,
    additional: "$0.2",
    features: [
      "Up to 190 AI responses",
      "Premium human-like voice AI",
      "Order tracking and editing",
      "Smart product recommendations",
      "Advanced cross-selling features",
      "Full conversation history",
      "Transcription and analytics",
      "24/7 premium support",
    ],
  },
  {
    name: "Growth",
    price: 49,
    additional: "$0.2",
    responses: 500,
    features: [
      "Up to 500 AI responses",
      "Premium human-like voice AI",
      "Order tracking and editing",
      "Smart product recommendations",
      "Advanced cross-selling features",
      "Full conversation history",
      "Transcription and analytics",
      "24/7 premium support",
    ],
  },
  {
    name: "Scale",
    price: 99,
    additional: "$0.1",
    responses: 1000,
    features: [
      "Up to 1,000 AI responses",
      "Premium human-like voice AI",
      "Order tracking and editing",
      "Smart product recommendations",
      "Advanced cross-selling features",
      "Full conversation history",
      "Transcription and analytics",
      "24/7 premium support",
    ],
  },
];

export default function PricingTable() {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("viewed_pricing_page");
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-8 h-8 text-green-500" />
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              100% satisfaction guaranteed
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Try ZaplineAI Today
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto mt-4">
            Your satisfaction is our priority. We provide immediate refund
            within 14 days if ZaplineAI isn&apos;t the perfect fit for your
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-black text-white rounded-xl p-8 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-[#E1FF41]">
                      ${tier.price}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {tier.additional} per additional response
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#E1FF41] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    const subject = encodeURIComponent(
                      `Inquiry about ZaplineAI ${tier.name} Plan`
                    );
                    const body = encodeURIComponent(
                      `Hello,\n\nI'm interested in the ${tier.name} Plan on ZaplineAI and would like to get started.\n\nCould you please provide me with further details?\n\nBest Regards,`
                    );
                    window.location.href = `mailto:support@zaplineai.com?subject=${subject}&body=${body}`;
                  }}
                  className="mt-8 w-full bg-[#E1FF41] text-black py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
