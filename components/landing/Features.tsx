"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  return (
    <section className="relative z-10 bg-zinc-950 py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
            
            {/* RTX 50 Series Section */}
            <div className="flex flex-col md:flex-row items-center gap-16">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6"
                >
                    <div className="flex items-center gap-4 text-cyan-400">
                        <i className="ri-cpu-line text-3xl"></i>
                        <span className="font-mono tracking-widest uppercase text-sm">Graphics Architecture</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        NVIDIA <span className="text-green-500">RTX 50 SERIES</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                        Experience the quantum leap in performance with the all-new Blackwell architecture. 
                        Featuring fourth-gen Tensor Cores and Optical Flow Accelerator to power AI-generation frame rates.
                    </p>
                    <ul className="space-y-3 mt-4">
                        {["DLSS 4.0 Support", "Real-time Path Tracing", "AI-Powered Graphics"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-300">
                                <i className="ri-check-line text-green-500"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden">
                        {/* Placeholder for RTX Image */}
                        <div className="text-center group-hover:scale-105 transition duration-700">
                            <i className="ri-dashboard-3-line text-9xl text-zinc-800 group-hover:text-green-900/50 transition-colors"></i>
                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/10 uppercase tracking-widest">
                                RTX 5090
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Intel Core Ultra Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6"
                >
                    <div className="flex items-center gap-4 text-blue-400">
                         <i className="ri-microchip-line text-3xl"></i>
                        <span className="font-mono tracking-widest uppercase text-sm">Processing Power</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        INTEL <span className="text-blue-500">CORE ULTRA</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                        Unleash AI on your PC with Intel Core Ultra processors. A specialized NPU works alongside CPU and GPU to unlock new experiences.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg">
                            <div className="text-3xl font-bold text-white mb-1">5.8<span className="text-sm text-zinc-500 font-normal ml-1">GHz</span></div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wider">Max Turbo</div>
                        </div>
                        <div className="bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg">
                            <div className="text-3xl font-bold text-white mb-1">24<span className="text-sm text-zinc-500 font-normal ml-1">Cores</span></div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wider">Performance</div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                     <div className="relative aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden">
                        {/* Placeholder for CPU Image */}
                        <div className="text-center group-hover:scale-105 transition duration-700">
                             <i className="ri-cpu-line text-9xl text-zinc-800 group-hover:text-blue-900/50 transition-colors"></i>
                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/10 uppercase tracking-widest">
                                ULTRA 9
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
