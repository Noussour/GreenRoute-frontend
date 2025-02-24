"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bike, Car, FootprintsIcon as Walk, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import RoutesMap from "@/features/routes/components/RoutesMap";
import { getRoutes } from "@/lib/ors-api";
import { Route } from "@/features/routes/types";
import { AutocompleteInput } from "@/components/AutoCompleteInput";

export default function RoutesPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const fetchedRoutes = await getRoutes(origin, destination);
      setRoutes(fetchedRoutes);
    } catch (error) {
      console.error("Error fetching routes:", error);
      setError("Failed to fetch routes. Please try again.");
    }
    setIsLoading(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FootprintsIcon":
        return Walk;
      case "Bike":
        return Bike;
      case "Car":
        return Car;
      default:
        return Walk;
    }
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
        <form onSubmit={handleSearch} className="space-y-2">
          <AutocompleteInput
            placeholder="Enter your starting point"
            value={origin}
            onChange={setOrigin}
          />
          <AutocompleteInput
            placeholder="Enter your destination"
            value={destination}
            onChange={setDestination}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="animate-spin mr-2">⏳</span>
            ) : (
              <Search className="h-4 w-4 mr-2" />
            )}
            Find Routes
          </Button>
        </form>
      </motion.div>
      {error && (
        <motion.div
          className="text-red-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}
      {routes.length > 0 && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {routes.map((route, index) => {
            const Icon = getIcon(route.icon);
            return (
              <Card
                key={route.id}
                className={index === 0 ? "border-green-500 border-2" : ""}
              >
                <CardHeader className="flex flex-row items-center justify-between py-2">
                  <CardTitle className="text-lg flex items-center">
                    <Icon className="h-5 w-5 mr-2" />
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
            );
          })}
        </motion.div>
      )}
      <motion.div
        className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <RoutesMap />
      </motion.div>
    </div>
  );
}
