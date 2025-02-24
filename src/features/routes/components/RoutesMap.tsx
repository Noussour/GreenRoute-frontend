"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function RoutesMap() {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <motion.div
      key="map"
      className="h-[500px] rounded-lg overflow-hidden shadow-lg border border-primary"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div id="map" style={{ height: "100%", width: "100%" }} />;
    </motion.div>
  );
}
