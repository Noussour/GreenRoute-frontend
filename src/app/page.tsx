import * as motion from "motion/react-client";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { LetterPullUp } from "@/components/StaggeredLetterPullUp";
import { BlurIn } from "@/components/BlurIn";

export default function HomePage() {
  return (
    <div className="flex justify-center pt-20 max-w-screen-lg">
      <div>
        <div className="text-center">
          <LetterPullUp words="Welcome to GreenRoute" />
          <BlurIn
            text="
            A production-ready template for scalable, modular apps. Packed with
            features like authentication, state management, and a rich ecosystem
            of tools for modern development.
"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/login" passHref>
              <Button>
                Start Building
                <LogIn className="h-3 w-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
