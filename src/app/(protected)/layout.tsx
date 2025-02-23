import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}

export default ProtectedLayout;
