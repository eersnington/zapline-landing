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
import { Progress } from "@nextui-org/progress";
import React, { useState, useMemo } from "react";

export default function PricingTable() {
  const [numTickets, setNumTickets] = useState(840);
  const [agentWage, setAgentWage] = useState(20); // Default hourly wage
  const [currentResponseTime, setCurrentResponseTime] = useState(7); // in hours
  const [currentResolutionTime, setCurrentResolutionTime] = useState(9.8); // in hours

  const pricingTiers = [
    { name: "Basic", price: 99, tickets: 100 },
    { name: "Standard", price: 299, tickets: 500 },
    { name: "Professional", price: 599, tickets: 2000 },
    { name: "Enterprise", price: 999, tickets: 5000 },
  ];

  const currentTier = useMemo(() => {
    return (
      pricingTiers.find((tier) => numTickets <= tier.tickets) ||
      pricingTiers[pricingTiers.length - 1]
    );
  }, [numTickets]);

  const automationPercentage = 0.15; // 15% automation savings
  const timeImprovementPercentage = 0.3; // 30% time improvement

  const manualCost = numTickets * (agentWage / 4); // Assuming average 15 min per ticket
  const automatedCost = manualCost * (1 - automationPercentage);
  const savings = manualCost - automatedCost;

  const improvedResponseTime =
    currentResponseTime * (1 - timeImprovementPercentage);
  const improvedResolutionTime =
    currentResolutionTime * (1 - timeImprovementPercentage);

  const handleSliderChange = (value: number | number[]) => {
    setNumTickets(Array.isArray(value) ? value[0] : value);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2">
              Support Ticket Calculator
            </h3>
            <p className="text-gray-500">
              Adjust the slider to see your savings
            </p>
          </CardHeader>
          <CardBody>
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">
                Monthly support tickets:{" "}
                <span className="text-primary">{numTickets}</span>
              </p>
              <Slider
                className="max-w-md"
                defaultValue={840}
                maxValue={9000}
                minValue={840}
                step={100}
                value={numTickets}
                onChange={handleSliderChange}
                showSteps={true}
                marks={pricingTiers.map((tier) => ({
                  value: tier.tickets,
                  label: tier.name,
                }))}
              />
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">
                Agent hourly wage: $
                <span className="text-primary">{agentWage}</span>
              </p>
              <Slider
                className="max-w-md"
                defaultValue={20}
                maxValue={50}
                minValue={10}
                step={1}
                value={agentWage}
                onChange={(value) =>
                  setAgentWage(Array.isArray(value) ? value[0] : value)
                }
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Recommended Tier:{" "}
                <span className="text-primary">{currentTier.name}</span>
              </h4>
              <p className="text-lg">
                Price:{" "}
                <span className="font-bold">${currentTier.price}/month</span>
              </p>
              <p className="text-gray-500">
                Up to {currentTier.tickets} tickets/month
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <h3 className="text-2xl font-bold">ROI Breakdown</h3>
          </CardHeader>
          <CardBody>
            <Table aria-label="ROI calculation" className="mt-4">
              <TableHeader>
                <TableColumn>Metric</TableColumn>
                <TableColumn>Without Automate</TableColumn>
                <TableColumn>With Automate</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Monthly Cost</TableCell>
                  <TableCell className="font-bold">
                    ${manualCost.toFixed(2)}
                  </TableCell>
                  <TableCell className="font-bold">
                    ${automatedCost.toFixed(2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>First Response Time</TableCell>
                  <TableCell>{currentResponseTime.toFixed(1)}hrs</TableCell>
                  <TableCell className="text-success">
                    {improvedResponseTime.toFixed(1)}hrs
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Resolution Time</TableCell>
                  <TableCell>{currentResolutionTime.toFixed(1)}hrs</TableCell>
                  <TableCell className="text-success">
                    {improvedResolutionTime.toFixed(1)}hrs
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Monthly Savings</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="font-bold text-success">
                    ${savings.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">
                Total Monthly Savings
              </h4>
              <p className="text-3xl font-bold text-success">
                ${savings.toFixed(2)}
              </p>
              <Progress
                value={(savings / manualCost) * 100}
                className="mt-2"
                color="success"
                showValueLabel={true}
                label="Savings"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
