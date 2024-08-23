"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Slider } from "@nextui-org/slider";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import React, { useState, useMemo } from "react";

export default function PricingTable() {
  const [numTickets, setNumTickets] = useState(100);

  const pricingTiers = [
    { name: "Basic", price: 99, tickets: 500 },
    { name: "Standard", price: 299, tickets: 1500 },
    { name: "Professional", price: 599, tickets: 3000 },
    { name: "Enterprise", price: 999, tickets: 5000 },
  ];

  const currentTier = useMemo(() => {
    return (
      pricingTiers.find((tier) => numTickets <= tier.tickets) ||
      pricingTiers[pricingTiers.length - 1]
    );
  }, [numTickets]);

  const costPerTicket = 5; // Assume $5 per ticket for human handling
  const automationPercentage = 0.6; // 60% automation

  const manualCost = numTickets * costPerTicket;
  const automatedCost = manualCost * (1 - automationPercentage);
  const savings = manualCost - automatedCost - currentTier.price;

  // Handler function for Slider onChange
  const handleSliderChange = (value: number | number[]) => {
    setNumTickets(Array.isArray(value) ? value[0] : value);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-4 gap-6">
        <Card className="col-span-3">
          <CardHeader>
            <h3 className="text-xl font-bold">Support Ticket Calculator</h3>
          </CardHeader>
          <hr className="border-t border-gray-200" />
          <CardBody>
            <div className="mb-4">
              <p>Number of expected support tickets: {numTickets}</p>
              <Slider
                className="max-w-md"
                defaultValue={100}
                maxValue={5000}
                minValue={100}
                step={100}
                value={numTickets}
                onChange={handleSliderChange}
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Recommended Tier: {currentTier.name}
              </h4>
              <p>Price: ${currentTier.price}/month</p>
              <p>Up to {currentTier.tickets} tickets/month</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">ROI Calculator</h3>
          </CardHeader>
          <hr className="border-t border-gray-200" />
          <CardBody>
            <Table aria-label="ROI calculation">
              <TableHeader>
                <TableColumn>Metric</TableColumn>
                <TableColumn>Value</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Manual Cost</TableCell>
                  <TableCell>${manualCost.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Automated Cost</TableCell>
                  <TableCell>${automatedCost.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Our Price</TableCell>
                  <TableCell>${currentTier.price}</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Total Savings</TableCell>
                  <TableCell>${savings.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
