"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Bike,
  Bus,
  Car,
  Train,
  FootprintsIcon as Walk,
  Leaf,
  Clock,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [view, setView] = useState("list");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
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
    ].sort((a, b) => b.ecoScore - a.ecoScore);

    setRoutes(mockRoutes);
    setSelectedRoute(null);
  };

  const getEcoScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Find Your Green Route
        </h1>
        <p className="text-muted-foreground">
          Discover eco-friendly ways to travel
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {routes.length > 0 && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs value={view} onValueChange={setView} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
          </Tabs>

          <AnimatePresence mode="wait">
            {view === "list" ? (
              <motion.div
                key="list"
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {routes.map((route, index) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className={`transition-all hover:shadow-lg cursor-pointer ${
                        selectedRoute?.id === route.id
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => setSelectedRoute(route)}
                    >
                      <CardHeader className="flex flex-row items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <route.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              {route.mode}
                              {index === 0 && (
                                <Badge
                                  variant="secondary"
                                  className="bg-green-500/10 text-green-500"
                                >
                                  <Leaf className="h-3 w-3 mr-1" />
                                  Best Choice
                                </Badge>
                              )}
                            </CardTitle>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={getEcoScoreColor(route.ecoScore)}
                        >
                          Eco Score: {route.ecoScore}
                        </Badge>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {route.duration}
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="h-4 w-4 mr-1" />
                            {route.distance}
                          </div>
                        </div>
                        <Progress value={route.ecoScore} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="map"
                className="h-[500px] rounded-lg overflow-hidden shadow-lg border border-primary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Map />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
