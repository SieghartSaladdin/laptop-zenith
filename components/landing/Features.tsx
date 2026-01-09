"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "RTX 50 SERIES",
    description: "Next-gen Blackwell architecture with AI-driven DLSS 4.0 and real-time path tracing.",
    icon: "ri-cpu-line",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    fullWidth: true,
    detail: "Offering 50% more CUDA cores and 2x ray tracing performance.",
  },
  {
    title: "INTEL CORE ULTRA",
    description: "Dedicated NPU for AI workloads, unlocking new levels of productivity and creativity.",
    icon: "ri-microchip-line",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    fullWidth: false,
  },
  {
    title: "OLED DISPLAY",
    description: "16-inch 4K OLED panel with 240Hz refresh rate and 100% DCI-P3 coverage.",
    icon: "ri-computer-line",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    fullWidth: false,
  },
  {
    title: "VAPOR CHAMBER",
    description: "Advanced cooling system with liquid metal thermal compound and quiet fans.",
    icon: "ri-windy-line",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    fullWidth: true,
    detail: "Keeps temperatures 15°C lower under heavy load compared to previous gen.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-zinc-950 py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                SYSTEM CORE
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                Engineered with the most advanced components ever put into a portable machine.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={cn(
                        "relative group overflow-hidden rounded-3xl border p-8 space-y-6 transition-all duration-500 hover:border-white/20",
                        "bg-zinc-900/30 backdrop-blur-sm",
                        feature.fullWidth ? "md:col-span-2" : "md:col-span-1",
                        feature.border
                    )}
                >
                    <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                        feature.bg
                    )} />
                    
                    <div className="flex items-start justify-between">
                        <div className={cn("p-3 rounded-full bg-zinc-900 border border-zinc-700", feature.color)}>
                            <i className={cn(feature.icon, "text-2xl")}></i>
                        </div>
                        <i className="ri-arrow-right-up-line text-zinc-600 group-hover:text-white transition-colors duration-300"></i>
                    </div>

                    <div className="space-y-2 relative z-10">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                            {feature.description}
                        </p>
                        {feature.detail && (
                             <p className="pt-4 text-sm font-mono text-zinc-500 border-t border-white/5 mt-4">
                                {feature.detail}
                             </p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
