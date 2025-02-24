import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import RoutesList from "./RoutesList";
import RoutesMap from "./RoutesMap";

function RoutesContainer() {
  const [view, setView] = useState("list");

  return (
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
        {view === "list" ? <RoutesList /> : <RoutesMap />}
      </AnimatePresence>
    </motion.div>
  );
}

export default RoutesContainer;
