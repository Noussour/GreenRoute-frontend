"use client";

import type React from "react";
import { motion } from "motion/react";
import { mockRoutes } from "@/features/routes/constants";
import DestinationForm from "@/features/routes/components/DestinationForm";
import RoutesContainer from "@/features/routes/components/RoutesContainer";
import useRouteStore from "@/features/routes/store/RouteStore";
import { useShallow } from "zustand/shallow";

export default function RoutesPage() {
  const { routes, setRoutes, setSelectedRoute } = useRouteStore(
    useShallow((state) => ({
      routes: state.routes,
      setRoutes: state.setRoutes,
      setSelectedRoute: state.setSelectedRoute,
    })),
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    setRoutes(mockRoutes);
    setSelectedRoute(null);
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
        <DestinationForm handleSearch={handleSearch} />
      </motion.div>

      {routes.length > 0 && <RoutesContainer />}
    </div>
  );
}
