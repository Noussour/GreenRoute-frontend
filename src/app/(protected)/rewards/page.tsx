"use client";

import { motion, AnimatePresence } from "motion/react";
import { rewards } from "@/features/rewards/constants";
import UserPointsCard from "@/features/rewards/components/UserPointsCard";
import RewardCard from "@/features/rewards/components/RewardCard";

export default function RewardsPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Your Eco Rewards</h1>
        <p className="text-muted-foreground">
          Turn your green choices into amazing rewards
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <UserPointsCard />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AnimatePresence>
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <RewardCard reward={reward} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
