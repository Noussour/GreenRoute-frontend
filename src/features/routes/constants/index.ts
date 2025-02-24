import { Bike, Bus, Car, Train, FootprintsIcon as Walk } from "lucide-react";
import { Route } from "../types";

export const mockRoutes: Route[] = [
  {
    id: 1,
    mode: "Walk",
    icon: Walk,
    duration: "30 mins",
    distance: "2 km",
    ecoScore: 100,
  },
  {
    id: 2,
    mode: "Bike",
    icon: Bike,
    duration: "15 mins",
    distance: "3 km",
    ecoScore: 90,
  },
  {
    id: 3,
    mode: "Bus",
    icon: Bus,
    duration: "20 mins",
    distance: "5 km",
    ecoScore: 70,
  },
  {
    id: 4,
    mode: "Train",
    icon: Train,
    duration: "10 mins",
    distance: "8 km",
    ecoScore: 80,
  },
  {
    id: 5,
    mode: "Car",
    icon: Car,
    duration: "12 mins",
    distance: "7 km",
    ecoScore: 30,
  },
].sort((a, b) => b.ecoScore - a.ecoScore);
