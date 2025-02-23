"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Leaf, MapPin, Gift, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/routes", icon: MapPin, label: "Routes" },
    { path: "/rewards", icon: Gift, label: "Rewards" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="text-lg font-bold">GreenRoute</span>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link key={path} href={path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`relative ${pathname === path ? "text-secondary" : "text-primary-foreground"}`}
                >
                  {pathname === path && (
                    <motion.div
                      className="absolute inset-0 bg-primary-foreground rounded-md z-0"
                      layoutId="navbar-active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon className="h-4 w-4 mr-1" />
                  <span className="relative z-10 text-sm">{label}</span>
                </Button>
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-4 py-2 space-y-2"
        >
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link key={path} href={path}>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="h-4 w-4 mr-2" />
                <span className="text-sm">{label}</span>
              </Button>
            </Link>
          ))}
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
