/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@nextui-org/slider";
import { Input } from "@nextui-org/input";

const pricingTiers = [
  { name: "Basic", price: 30, tickets: 50 },
  { name: "Standard", price: 180, tickets: 300 },
  { name: "Professional", price: 1200, tickets: 2000 },
  { name: "Enterprise", price: 3000, tickets: 5000 },
];

export default function PricingTable() {
  const [numTickets, setNumTickets] = useState(840);
  const [agentWage, setAgentWage] = useState(20);

  const currentTier = useMemo(() => {
    return (
      pricingTiers.find((tier) => numTickets <= tier.tickets) ||
      pricingTiers[pricingTiers.length - 1]
    );
  }, [numTickets]);

  const numAgents = Math.ceil(numTickets / 200); // Assuming one agent can handle 200 tickets per month
  const monthlySupportCost = numAgents * agentWage * 160; // Assuming 160 working hours per month
  const automationSavings = monthlySupportCost * 0.6; // 60% savings

  return (
    <div className="w-full bg-black text-white py-16 px-4 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Pricing & ROI Calculator
        </h2>

        <div className="mb-12">
          <p className="text-xl mb-4">
            Monthly support tickets:{" "}
            <span className="text-[#E1FF41]">{numTickets}</span>
          </p>
          <Slider
            aria-label="Tickets"
            color="success"
            size="lg"
            step={50}
            maxValue={5000}
            minValue={50}
            value={numTickets}
            onChange={(value) =>
              setNumTickets(Array.isArray(value) ? value[0] : value)
            }
            className="max-w-md mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Recommended Plan</h3>
            <p className="text-4xl font-bold mb-2 text-[#E1FF41]">
              ${currentTier.price}
              <span className="text-xl">/month</span>
            </p>
            <p className="mb-4">{currentTier.name} Plan</p>
            <ul className="space-y-2">
              <li>✅ Up to {currentTier.tickets} tickets/month</li>
              <li>✅ 24/7 Support</li>
              <li>✅ AI-powered automation</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">ROI Calculation</h3>
            <div className="mb-4">
              <label className="block mb-2">Agent Hourly Wage ($)</label>
              <Input
                type="number"
                value={agentWage.toString()}
                onChange={(e) => setAgentWage(Number(e.target.value))}
                className="max-w-[150px]"
              />
            </div>
            <p className="mb-2">
              Estimated agents needed:{" "}
              <span className="font-bold">{numAgents}</span>
            </p>
            <p className="mb-2">
              Monthly support cost:{" "}
              <span className="font-bold">
                ${monthlySupportCost.toFixed(2)}
              </span>
            </p>
            <p className="text-2xl font-bold mt-4">
              Monthly Savings with Automation
            </p>
            <p className="text-4xl font-bold text-[#E1FF41]">
              ${automationSavings.toFixed(2)}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
