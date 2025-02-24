"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";

// Import the CSS statically
import "leaflet/dist/leaflet.css";

// Create a dynamic import for the Map component
const Map = dynamic(
  () => import("./Map"), // Create this component in a separate file
  { ssr: false },
);

export default function RoutesMap() {
  return (
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
  );
}
