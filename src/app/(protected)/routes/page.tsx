"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AutocompleteInput } from "@/components/AutoCompleteInput";
import RoutesContainer from "@/features/routes/components/RoutesContainer";
import useRouteStore from "@/features/routes/store/RouteStore";
import { getRoutes } from "@/lib/ors-api";

export default function RoutesPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setRoutes = useRouteStore((state) => state.setRoutes);

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
      <RoutesContainer />
    </div>
  );
}
