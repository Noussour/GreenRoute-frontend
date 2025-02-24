"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Leaf,
  TrendingUp,
  Star,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function RewardsPage() {
  const rewards = [
    {
      id: 1,
      name: "$10 Gift Card",
      points: 1000,
      icon: Gift,
      description: "Redeem for a $10 gift card at eco-friendly stores",
      category: "Shopping",
    },
    {
      id: 2,
      name: "Free Bus Pass",
      points: 2000,
      icon: Leaf,
      description: "One month of unlimited bus rides in your city",
      category: "Transport",
    },
    {
      id: 3,
      name: "Eco-friendly Water Bottle",
      points: 500,
      icon: TrendingUp,
      description:
        "Sustainable reusable water bottle made from recycled materials",
      category: "Lifestyle",
    },
  ];

  const userPoints = 750;
  const nextMilestone = 1000;
  const userLevel = "Green Explorer";

  // const getProgressColor = (value: number) => {
  //   if (value >= 80) return "bg-green-500";
  //   if (value >= 40) return "bg-yellow-500";
  //   return "bg-blue-500";
  // };

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
        <Card className="relative overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      {userLevel}
                      <Badge variant="secondary" className="bg-primary/10">
                        <Star className="h-3 w-3 mr-1" />
                        Level 3
                      </Badge>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {userPoints} points • {nextMilestone - userPoints} points
                      to next reward
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View History
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <Progress
                    value={(userPoints / nextMilestone) * 100}
                    className="h-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0</span>
                    <span>{nextMilestone} points</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {reward.name}
                      </CardTitle>
                      <Badge variant="outline">{reward.category}</Badge>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full">
                      <reward.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {reward.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        {reward.points} points
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {Math.round((userPoints / reward.points) * 100)}%
                        achieved
                      </span>
                    </div>
                    <Progress
                      value={(userPoints / reward.points) * 100}
                      className="h-2"
                    />
                    <Button
                      variant="outline"
                      className="w-full mt-2"
                      disabled={userPoints < reward.points}
                    >
                      {userPoints >= reward.points
                        ? "Redeem Reward"
                        : `${reward.points - userPoints} points needed`}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
