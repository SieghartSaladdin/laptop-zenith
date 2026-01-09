"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SPECS", href: "#specs" },
    { name: "DESIGN", href: "#design" },
    { name: "PERFORMANCE", href: "#performance" },
    { name: "BUY NOW", href: "#buy", primary: true },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 border-white/10",
        isScrolled ? "bg-black/50 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
           <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black rounded-sm group-hover:bg-cyan-400 transition-colors">
             Z
           </div>
           <span className="font-bold tracking-widest text-lg text-white">ZENITH</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href}
                    className={cn(
                        "text-sm font-mono tracking-wider transition-all duration-200 hover:text-cyan-400",
                        link.primary 
                            ? "px-5 py-2 bg-white text-black hover:bg-cyan-400 hover:text-black rounded-sm font-bold" 
                            : "text-white/80"
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl"
            >
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "text-lg font-mono tracking-wider",
                            link.primary ? "text-cyan-400 font-bold" : "text-white"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
