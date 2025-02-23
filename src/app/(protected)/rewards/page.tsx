"use client";

import { motion } from "framer-motion";
import { Gift, Leaf, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RewardsPage() {
  const rewards = [
    { id: 1, name: "$10 Gift Card", points: 1000, icon: Gift },
    { id: 2, name: "Free Bus Pass", points: 2000, icon: Leaf },
    { id: 3, name: "Eco-friendly Water Bottle", points: 500, icon: TrendingUp },
  ];

  const userPoints = 750;

  return (
    <div className="space-y-4">
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Eco Rewards
      </motion.h1>
      <motion.div
        className="max-w-sm mx-auto bg-card text-card-foreground p-4 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold mb-2">Your Points</h2>
        <Progress value={(userPoints / 2000) * 100} className="mb-2" />
        <p className="text-right text-sm">{userPoints} / 2000 points</p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {reward.name}
                </CardTitle>
                <reward.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">{reward.points} points</div>
                <Progress
                  value={(userPoints / reward.points) * 100}
                  className="mt-2"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
