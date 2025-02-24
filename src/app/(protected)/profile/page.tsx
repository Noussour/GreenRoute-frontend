"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  TrendingUp,
  Award,
  Bike,
  Bus,
  FootprintsIcon as Walk,
  Leaf,
  Trophy,
  Star,
  CircleEllipsis,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const userStats = {
    name: "Jane Doe",
    joinDate: "May 2023",
    totalTrips: 42,
    co2Saved: 156,
    level: "Eco Warrior",
    progress: 75,
    nextLevel: "Green Champion",
    pointsToNext: 250,
  };

  const achievements = [
    { title: "First Green Trip", date: "May 2023", icon: Leaf },
    { title: "10 Bus Rides", date: "June 2023", icon: Bus },
    { title: "Carbon Reducer", date: "July 2023", icon: TrendingUp },
  ];

  const travelHistory = [
    {
      id: 1,
      date: "2023-05-01",
      route: "Home to Work",
      mode: "Bicycle",
      icon: Bike,
      impact: "-2kg CO2",
      duration: "25 mins",
    },
    {
      id: 2,
      date: "2023-05-02",
      route: "Home to Park",
      mode: "Walking",
      icon: Walk,
      impact: "-0kg CO2",
      duration: "15 mins",
    },
    {
      id: 3,
      date: "2023-05-03",
      route: "Home to Store",
      mode: "Electric Bus",
      icon: Bus,
      impact: "-1.5kg CO2",
      duration: "20 mins",
    },
  ];

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
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>

              <div className="flex-grow space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      {userStats.name}
                      <Badge variant="secondary" className="bg-primary/10">
                        <Trophy className="h-3 w-3 mr-1" />
                        {userStats.level}
                      </Badge>
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Joined {userStats.joinDate}
                      </span>
                      <span>•</span>
                      <span>{userStats.totalTrips} Green Trips</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Profile
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress to {userStats.nextLevel}</span>
                    <span>{userStats.pointsToNext} points needed</span>
                  </div>
                  <Progress value={userStats.progress} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Environmental Impact
                </CardTitle>
                <Button variant="ghost" size="icon">
                  <CircleEllipsis className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">
                    {userStats.totalTrips}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Green Trips
                  </div>
                </div>
                <div className="p-4 bg-green-500/5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-500">
                    {userStats.co2Saved}kg
                  </div>
                  <div className="text-sm text-muted-foreground">CO2 Saved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Recent Achievements
                </CardTitle>
                <Button variant="ghost" size="icon">
                  <CircleEllipsis className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <achievement.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.date}
                      </div>
                    </div>
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Travel History</CardTitle>
              <Button variant="outline" size="sm">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {travelHistory.map((trip) => (
                <div
                  key={trip.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-full">
                    <trip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium">{trip.route}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{trip.date}</span>
                      <span>•</span>
                      <span>{trip.duration}</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {trip.impact}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
