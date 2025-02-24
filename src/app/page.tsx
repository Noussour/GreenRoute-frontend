"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Award,
  UserCircle,
  ChevronRight,
  Bike,
  Bus,
  TreePine,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Routes",
      description:
        "Find the most sustainable travel options for your daily commute and adventures.",
      stat: "50% less CO2",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Award,
      title: "Earn Green Rewards",
      description:
        "Get rewarded with eco-friendly products and services for making sustainable choices.",
      stat: "2000+ rewards",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: UserCircle,
      title: "Track Your Impact",
      description:
        "Monitor your environmental contribution and see how you're helping the planet.",
      stat: "Track daily",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const transportModes = [Bike, Bus, TreePine];

  return (
    <div className="flex-grow container mx-auto px-4 py-12 min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-base bg-primary/10 text-primary mx-auto"
          >
            <Globe className="h-4 w-4 mr-2 inline" />
            Join 10,000+ eco-conscious travelers
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Travel Smart, <span className="text-primary">Travel Green</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community of environmental champions and discover smarter,
            cleaner ways to travel while earning rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/login" passHref>
              <Button size="lg" className="text-lg">
                Start Your Green Journey
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            {transportModes.map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center"
              >
                <Icon className="h-8 w-8 text-primary" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className={`${feature.bgColor} ${feature.color}`}
                      >
                        {feature.stat}
                      </Badge>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary">
            <TrendingUp className="h-5 w-5" />
            <span className="font-medium">Join the green movement today</span>
          </div>

          <div className="mt-4 flex gap-8 justify-center text-muted-foreground">
            <div>
              <div className="text-3xl font-bold">10k+</div>
              <div>Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50k+</div>
              <div>Green Trips</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100t+</div>
              <div>CO2 Saved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
