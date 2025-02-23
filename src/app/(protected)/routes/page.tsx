"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bike,
  Bus,
  Car,
  Train,
  FootprintsIcon as Walk,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/features/routes/components/Map"), {
  ssr: false,
});

const transportModes = [
  { icon: Walk, label: "Walk" },
  { icon: Bike, label: "Bike" },
  { icon: Bus, label: "Bus" },
  { icon: Train, label: "Train" },
  { icon: Car, label: "Car" },
];

export default function RoutesPage() {
  const [destination, setDestination] = useState("");
  const [selectedMode, setSelectedMode] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement route search logic here
    console.log(
      "Searching for routes to:",
      destination,
      "using mode:",
      selectedMode,
    );
  };

  return (
    <div className="space-y-4">
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find Your Green Route
      </motion.h1>
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSearch} className="flex justify-center gap-2">
          <Input
            type="text"
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-grow text-sm"
          />
          <Button type="submit" size="sm">
            <Search className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Search</span>
          </Button>
        </form>
      </motion.div>
      <motion.div
        className="flex justify-center space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {transportModes.map(({ icon: Icon, label }) => (
          <Button
            key={label}
            variant={selectedMode === label ? "default" : "outline"}
            onClick={() => setSelectedMode(label)}
            className="flex-col py-1 px-2 h-auto text-xs"
            size="sm"
          >
            <Icon className="h-4 w-4 mb-1" />
            {label}
          </Button>
        ))}
      </motion.div>
      <motion.div
        className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Map />
      </motion.div>
    </div>
  );
}
