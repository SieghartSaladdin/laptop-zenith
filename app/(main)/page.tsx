"use client";

import Features from "@/components/landing/Features";
import LaptopSequence from "@/components/landing/LaptopSequence";
import DesignSection from "@/components/landing/DesignSection";
import SpecsSection from "@/components/landing/SpecsSection";
import CTASection from "@/components/landing/CTASection";

export default function LandingPage() {
  
  return (
    <div className="w-full">
      <LaptopSequence />
      <Features />
      <DesignSection />
      <SpecsSection />
      <CTASection />
      
      <footer className="w-full py-12 bg-black border-t border-zinc-900 text-center">
        <p className="text-zinc-600 font-mono text-sm">
            &copy; {new Date().getFullYear()} ZENITH SYSTEMS. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
