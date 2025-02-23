"use client";

import { motion } from "framer-motion";
import { User, Calendar, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProfilePage() {
  const userStats = {
    name: "Jane Doe",
    joinDate: "May 2023",
    totalTrips: 42,
    co2Saved: 156,
    level: "Eco Warrior",
    progress: 75,
  };

  const travelHistory = [
    {
      id: 1,
      date: "2023-05-01",
      route: "Home to Work",
      mode: "Bicycle",
      impact: "-2kg CO2",
    },
    {
      id: 2,
      date: "2023-05-02",
      route: "Home to Park",
      mode: "Walking",
      impact: "-0kg CO2",
    },
    {
      id: 3,
      date: "2023-05-03",
      route: "Home to Store",
      mode: "Electric Bus",
      impact: "-1.5kg CO2",
    },
  ];

  return (
    <div className="space-y-4">
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Green Profile
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{userStats.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Joined: {userStats.joinDate}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Environmental Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>{userStats.totalTrips} Green Trips</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4" />
              <span>{userStats.co2Saved}kg CO2 Saved</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Eco Level: {userStats.level}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={userStats.progress} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Travel History</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {travelHistory.map((trip) => (
                <li key={trip.id} className="flex justify-between items-center">
                  <span>
                    {trip.date}: {trip.route}
                  </span>
                  <span className="text-green-500">{trip.impact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
