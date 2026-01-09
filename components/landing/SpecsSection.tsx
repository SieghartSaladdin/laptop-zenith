"use client";

import { motion } from "framer-motion";

const specs = [
    { label: "Processor", value: "Intel® Core™ Ultra 9 185H" },
    { label: "Graphics", value: "NVIDIA® GeForce RTX™ 5090 (16GB GDDR7)" },
    { label: "Memory", value: "64GB LPDDR5X 7467MHz" },
    { label: "Storage", value: "4TB PCIe® 4.0 NVMe™ M.2 SSD" },
    { label: "Display", value: "16” 4K OLED 240Hz 0.2ms" },
    { label: "Battery", value: "99.9Whr, 240W GaN Adapter" },
    { label: "Connectivity", value: "Wi-Fi 7 (802.11be), Bluetooth® 5.4" },
    { label: "Ports", value: "2x Thunderbolt™ 4, 2x USB 3.2 Gen 2, HDMI 2.1" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="relative z-10 bg-zinc-950 py-32 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">TECHNICAL SPECIFICATIONS</h2>
            <p className="text-zinc-500 font-mono">MODEL: ZN-X50-PRO</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
            {specs.map((spec, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col md:flex-row bg-zinc-950/80 p-6 hover:bg-zinc-950 transition-colors"
                >
                    <div className="md:w-1/3 text-cyan-500 font-mono text-sm uppercase tracking-wider mb-2 md:mb-0">
                        {spec.label}
                    </div>
                    <div className="md:w-2/3 text-zinc-300 font-light">
                        {spec.value}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
