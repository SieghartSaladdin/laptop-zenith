"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="buy" className="relative z-10 bg-black py-40 px-4 flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center space-y-8 max-w-3xl mx-auto"
        >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
                FUTURE IS NOW
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-xl mx-auto">
                Secure your unit today and be among the first to experience the Zenith X50.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <button className="group relative px-8 py-4 bg-white text-black font-bold tracking-wider hover:bg-cyan-400 transition-colors duration-300 w-full md:w-auto">
                    <span>       PRE-ORDER NOW       </span>
                    <div className="absolute inset-0 border border-white group-hover:border-cyan-400 p-1 -m-1 transition-all duration-300"></div>
                </button>
                <div className="text-zinc-500 font-mono text-sm">
                    STARTING AT $3,499
                </div>
            </div>
        </motion.div>
    </section>
  );
}
