"use client";

import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <section id="design" className="relative z-10 bg-black py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
                    AEROSPACE <br/>
                    <span className="text-zinc-600">GRADE BODY</span>
                </h2>
                <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>
            
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
                Forged from a single block of CNC-milled 6000-series aluminum. 
                The Zenith chassis achieves the impossible: immense rigidity at just 
                <span className="text-white font-bold mx-2">14.9mm</span>
                thickness.
            </p>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="text-3xl font-bold text-white">1.4<span className="text-sm font-normal text-zinc-500">kg</span></div>
                    <div className="text-sm text-zinc-600 tracking-widest uppercase">Ultra Light</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white">CNX<span className="text-sm font-normal text-zinc-500">Milled</span></div>
                    <div className="text-sm text-zinc-600 tracking-widest uppercase">Precision</div>
                </div>
            </div>
        </motion.div>

        {/* Visual Element (Abstract Shape) */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[400px] w-full flex items-center justify-center"
        >
            {/* Artistic representation of layers/chassis */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-zinc-900/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-full h-[60%] bg-zinc-900 border border-white/10 rounded-xl transform -skew-x-12 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="text-zinc-800 text-9xl font-black tracking-tighter opacity-50">ZENITH</div>
                
                {/* Shine effect */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 animate-[shimmer_3s_infinite]"></div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
