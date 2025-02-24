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
  Leaf,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/features/routes/components/Map"), {
  ssr: false,
});

interface Route {
  id: number;
  mode: string;
  icon: React.ElementType;
  duration: string;
  distance: string;
  ecoScore: number;
}

export default function RoutesPage() {
  const [destination, setDestination] = useState("");
  const [routes, setRoutes] = useState<Route[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating API call to get routes
    const mockRoutes: Route[] = [
      {
        id: 1,
        mode: "Walk",
        icon: Walk,
        duration: "30 mins",
        distance: "2 km",
        ecoScore: 100,
      },
      {
        id: 2,
        mode: "Bike",
        icon: Bike,
        duration: "15 mins",
        distance: "3 km",
        ecoScore: 90,
      },
      {
        id: 3,
        mode: "Bus",
        icon: Bus,
        duration: "20 mins",
        distance: "5 km",
        ecoScore: 70,
      },
      {
        id: 4,
        mode: "Train",
        icon: Train,
        duration: "10 mins",
        distance: "8 km",
        ecoScore: 80,
      },
      {
        id: 5,
        mode: "Car",
        icon: Car,
        duration: "12 mins",
        distance: "7 km",
        ecoScore: 30,
      },
    ].sort((a, b) => b.ecoScore - a.ecoScore); // Sort by ecoScore descending

    setRoutes(mockRoutes);
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
        <form onSubmit={handleSearch} className="flex gap-2">
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
      {routes.length > 0 && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {routes.map((route, index) => (
            <Card
              key={route.id}
              className={index === 0 ? "border-green-500 border-2" : ""}
            >
              <CardHeader className="flex flex-row items-center justify-between py-2">
                <CardTitle className="text-lg flex items-center">
                  <route.icon className="h-5 w-5 mr-2" />
                  {route.mode}
                  {index === 0 && (
                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full flex items-center">
                      <Leaf className="h-3 w-3 mr-1" />
                      Best Eco Route
                    </span>
                  )}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  Eco Score: {route.ecoScore}
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>{route.duration}</span>
                  <span>{route.distance}</span>
                </div>
                <Progress value={route.ecoScore} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}
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
