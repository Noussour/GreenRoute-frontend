import { Gift, Leaf, TrendingUp } from "lucide-react";

export const rewards = [
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

export const userPoints = 750;
export const nextMilestone = 1000;
export const userLevel = "Green Explorer";
