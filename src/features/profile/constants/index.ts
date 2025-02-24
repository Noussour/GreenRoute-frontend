import {
  Bike,
  Bus,
  FootprintsIcon as Walk,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { Achievement, Trip, UserStats } from "../types";

export const userStats: UserStats = {
  name: "Hamid",
  joinDate: "May 2025",
  totalTrips: 42,
  co2Saved: 156,
  level: "Eco Warrior",
  progress: 75,
  nextLevel: "Green Champion",
  pointsToNext: 250,
};

export const achievements: Achievement[] = [
  { title: "First Green Trip", date: "May 2025", icon: Leaf },
  { title: "10 Bus Rides", date: "June 2025", icon: Bus },
  { title: "Carbon Reducer", date: "July 2025", icon: TrendingUp },
];

export const travelHistory: Trip[] = [
  {
    id: 1,
    date: "2025-05-01",
    route: "Home to Work",
    mode: "Bicycle",
    icon: Bike,
    impact: "-2kg CO2",
    duration: "25 mins",
  },
  {
    id: 2,
    date: "2025-05-02",
    route: "Home to Park",
    mode: "Walking",
    icon: Walk,
    impact: "-0kg CO2",
    duration: "15 mins",
  },
  {
    id: 3,
    date: "2025-05-03",
    route: "Home to Store",
    mode: "Electric Bus",
    icon: Bus,
    impact: "-1.5kg CO2",
    duration: "20 mins",
  },
];
