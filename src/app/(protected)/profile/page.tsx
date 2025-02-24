"use client";

import { motion } from "motion/react";
import InfosCard from "@/features/profile/components/InfosCard";
import ImpactCard from "@/features/profile/components/ImpactCard";
import AchivementsCard from "@/features/profile/components/AchievementsCard";
import HistoryCard from "@/features/profile/components/HistoryCard";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Your Green Profile</h1>
        <p className="text-muted-foreground">
          Track your environmental impact and progress
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto grid gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <InfosCard />

        <div className="grid md:grid-cols-2 gap-6">
          <ImpactCard />
          <AchivementsCard />
        </div>

        <HistoryCard />
      </motion.div>
    </div>
  );
}
