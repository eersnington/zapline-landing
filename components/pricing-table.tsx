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
              <p className="text-lg">Base price</p>
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
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link href="#" onClick={onOpen}>
            {/* This isn't together. I need it to be fixed*/}
            <CopyIcon className="text-white" size={16} /> How ROI is calculated?
          </Link>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "bg-gray-900 text-white",
          header: "bg-gray-900 text-white",
          footer: "bg-gray-900 text-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ROI Calculation Explained
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Without Zapline</h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td>Support agent cost:</td>
                          <td className="text-right">
                            ${supportAgentCost.toFixed(2)}
                          </td>
                        </tr>
                        <tr className="font-bold text-red-500">
                          <td>Total cost:</td>
                          <td className="text-right">
                            ${supportAgentCost.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">With Zapline</h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td>Zapline cost:</td>
                          <td className="text-right">
                            ${zaplineCost.toFixed(2)}
                          </td>
                        </tr>
                        <tr className="font-bold text-green-500">
                          <td>Total cost:</td>
                          <td className="text-right">
                            ${zaplineCost.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-bold">
                    Monthly savings: ${monthlySavings.toFixed(2)}
                  </p>
                  <p>Time saved: {timeSaved} hours</p>
                  <p className="text-sm mt-2">
                    (Based on $25/hour and 6 minutes per conversation for
                    support agents)
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
