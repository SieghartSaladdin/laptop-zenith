"use client";

import Features from "@/components/landing/Features";
import LaptopSequence from "@/components/landing/LaptopSequence";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LandingPage() {
  
  // Basic Lenis setup is in MainLayout, but we can access it here if needed for specific controls
  
  return (
    <div className="w-full">
      <LaptopSequence />
      <Features />
      
      <footer className="w-full py-12 bg-zinc-950 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 font-mono text-sm">
            &copy; {new Date().getFullYear()} LAPTOP ZENITH. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
