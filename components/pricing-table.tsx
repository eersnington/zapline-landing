"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@nextui-org/slider";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

interface PricingTier {
  name: string;
  price: number;
  conversations: number;
  additional: number;
  maxConversations: number;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: 30,
    conversations: 50,
    additional: 0.4,
    maxConversations: 299,
  },
  {
    name: "Standard",
    price: 180,
    conversations: 300,
    additional: 0.4,
    maxConversations: 1999,
  },
  {
    name: "Professional",
    price: 1200,
    conversations: 2000,
    additional: 0.36,
    maxConversations: 4999,
  },
  {
    name: "Enterprise",
    price: 3000,
    conversations: 5000,
    additional: 0.36,
    maxConversations: 10000,
  },
];

export default function PricingTable(): JSX.Element {
  const [numConversations, setNumConversations] = useState<number>(50);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const currentTier = useMemo<PricingTier>(() => {
    return (
      pricingTiers.find((tier) => numConversations <= tier.maxConversations) ||
      pricingTiers[0]
    );
  }, [numConversations]);

  const calculatePrice = useMemo<number>(() => {
    if (numConversations <= currentTier.conversations) {
      return currentTier.price;
    }
    const additionalConversations =
      numConversations - currentTier.conversations;
    const additionalCost = additionalConversations * currentTier.additional;
    return currentTier.price + additionalCost;
  }, [numConversations, currentTier]);

  const supportAgentCost = ((numConversations * 6) / 60) * 25; // 6 minutes per conversation, $25/hour
  const zaplineCost = calculatePrice;
  const monthlySavings = supportAgentCost - zaplineCost;
  const timeSaved = ((numConversations * 6) / 60).toFixed(2); // in hours
  const automationRate = 0.7; // 70% automation rate

  const handleConversationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setNumConversations(value);
    }
  };

  return (
    <div className="w-full bg-black text-white py-16 px-4 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Pricing & ROI Calculator
        </h2>

        <div className="mb-12">
          <div className="text-xl mb-4 flex items-center justify-center">
            <span className="mr-2">Monthly conversations:</span>
            <Input
              type="number"
              value={numConversations.toString()}
              onChange={handleConversationChange}
              min={0}
              className="max-w-[150px] bg-transparent text-white"
            />
          </div>
          <Slider
            aria-label="Conversations"
            color="success"
            size="lg"
            step={1}
            maxValue={10000}
            minValue={0}
            value={numConversations}
            onChange={(value: number | number[]) =>
              setNumConversations(Array.isArray(value) ? value[0] : value)
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
            <h3 className="text-2xl font-bold mb-4">{currentTier.name} Plan</h3>
            <ul className="space-y-2">
              <li>
                ✅ Up to {currentTier.conversations} conversations/month
                included
              </li>
              <li>
                ✅ ${currentTier.additional.toFixed(2)} per additional
                conversation
              </li>
              <li>✅ Helpdesk</li>
              <li>✅ Transcription Analysis</li>
              <li>✅ Conversation Analytics</li>
              <li>✅ 30+ integrations</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-4">
              <p className="text-lg">You pay</p>
              <p className="text-4xl font-bold text-[#E1FF41]">
                ${calculatePrice.toFixed(2)}
                <span className="text-xl">/month</span>
              </p>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Monthly ROI</h3>
            <p className="mb-2">
              <strong>Time saved:</strong> {timeSaved} hours
            </p>
            <p className="mb-2">
              <strong>Money saved:</strong> ${monthlySavings.toFixed(2)}
            </p>
            <div className="mt-4 text-center">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onOpen();
                }}
                className="text-primary hover:underline flex items-center justify-center"
              >
                <CopyIcon size={16} className="mr-2" />
                How ROI is calculated?
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        classNames={{
          base: "bg-gray-900 text-white",
          header: "border-b border-gray-700",
          body: "py-6",
          footer: "border-t border-gray-700",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ROI Calculation Explained
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-2">Without Zapline</h4>
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Conversations per month</td>
                          <td className="text-right">{numConversations}</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Time per conversation</td>
                          <td className="text-right">6 minutes</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Total time (hours)</td>
                          <td className="text-right">
                            {((numConversations * 6) / 60).toFixed(2)}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">
                            Hourly rate for Support Agent
                          </td>
                          <td className="text-right">$25</td>
                        </tr>
                        <tr className="font-bold text-red-500">
                          <td className="py-2">Total cost</td>
                          <td className="text-right">
                            ${supportAgentCost.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">With Zapline</h4>
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Conversations per month</td>
                          <td className="text-right">{numConversations}</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Automation rate</td>
                          <td className="text-right">
                            {automationRate * 100}%
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Automated conversations</td>
                          <td className="text-right">
                            {Math.round(numConversations * automationRate)}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Manual conversations</td>
                          <td className="text-right">
                            {Math.round(
                              numConversations * (1 - automationRate)
                            )}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Manual time (hours)</td>
                          <td className="text-right">
                            {(
                              (numConversations * (1 - automationRate) * 6) /
                              60
                            ).toFixed(2)}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Manual cost</td>
                          <td className="text-right">
                            $
                            {(
                              ((numConversations * (1 - automationRate) * 6) /
                                60) *
                              25
                            ).toFixed(2)}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Zapline cost</td>
                          <td className="text-right">
                            ${zaplineCost.toFixed(2)}
                          </td>
                        </tr>
                        <tr className="font-bold text-green-500">
                          <td className="py-2">Total cost</td>
                          <td className="text-right">
                            $
                            {(
                              zaplineCost +
                              ((numConversations * (1 - automationRate) * 6) /
                                60) *
                                25
                            ).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-bold text-lg">
                    Monthly savings: ${monthlySavings.toFixed(2)}
                  </p>
                  <p className="font-bold text-lg">
                    Time saved: {timeSaved} hours
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
