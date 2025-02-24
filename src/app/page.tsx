"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Award, UserCircle, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Routes",
      description: "Find sustainable travel options",
    },
    {
      icon: Award,
      title: "Earn Rewards",
      description: "Get points for green choices",
    },
    {
      icon: UserCircle,
      title: "Track Impact",
      description: "See your environmental impact",
    },
  ];

  return (
    <div className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to GreenRoute
        </h1>
        <p className="text-lg md:text-xl mb-6 text-muted-foreground">
          Discover eco-friendly travel routes and make a positive impact!
        </p>
        <Link href="/login" passHref>
          <Button>
            Start Your Green Journey
            <LogIn className="h-3 w-3" />{" "}
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-card text-card-foreground p-4 rounded-lg shadow-md"
          >
            <feature.icon className="h-8 w-8 mb-2 text-primary" />
            <h2 className="text-lg font-semibold mb-1">{feature.title}</h2>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
