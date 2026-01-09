"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // 🆕 NEW

export default function LaptopSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const frameCount = 40;

  // ==========================
  // LOAD IMAGE SEQUENCE
  // ==========================
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          const filename = `ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
          img.src = `/laptop-sequence/${filename}`;

          img.onload = () => {
            loadedImages[i - 1] = img;
            resolve();
          };
          img.onerror = reject;
        });

        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // ==========================
  // GSAP + CANVAS ANIMATION
  // ==========================
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    canvas.width = images[0].width;
    canvas.height = images[0].height;

    const render = (index: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[index], 0, 0);
    };

    const frameObj = { frame: 0 };
    render(0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // ==========================
      // TEXT 1 (SUDAH ADA) → HILANG
      // ==========================
      tl.to(".intro-text-1", {
        opacity: 0,
        y: -50,
        duration: 0.6,
        ease: "power3.inOut",
      }); // 🔧 CHANGED

      // JEDA
      tl.to({}, { duration: 0.3 }); // 🆕 NEW

      tl.to(frameObj, {
        frame: frameCount - 1,
        ease: "none",
        onUpdate: () => {
          render(Math.round(frameObj.frame));
        },
      });

      // ==========================
      // TEXT 2 → MUNCUL
      // ==========================
      tl.to(".intro-text-2", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }); // 🔧 CHANGED

      // TAHAN
      tl.to({}, { duration: 0.5 }); // 🆕 NEW

      // ==========================
      // TEXT 2 → HILANG
      // ==========================
      tl.to(".intro-text-2", {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power3.in",
      }); // 🆕 NEW

      // ==========================
      // FRAME SEQUENCE
      // ==========================
      
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, images]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-zinc-950 overflow-hidden flex items-center justify-center"
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-cyan-500 font-mono animate-pulse">
          INITIALIZING ZENITH SYSTEM...
        </div>
      )}

      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-fit"
      />

      {/* ==========================
          OVERLAY TEXT
      ========================== */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">

        {/* TEXT 1 (VISIBLE FROM START) */}
        <h1 className="intro-text-1 text-6xl md:text-9xl tracking-[0.1em] font-black text-white">
          ZENITH X
        </h1>
        {/* 🔧 CHANGED: no opacity-0 */}

        {/* TEXT 2 (HIDDEN INITIALLY) */}
        <p className="intro-text-2 text-xl md:text-3xl mt-4 tracking-[0.5em] text-white font-bold opacity-0 translate-y-20">
          NVIDIA RTX 50 • INTEL CORE ULTRA SERIES
        </p>
        {/* 🔧 CHANGED */}

      </div>

      <div className="absolute bottom-10 z-30 text-white/50 text-sm font-mono animate-bounce">
        SCROLL TO INITIALIZE
      </div>
    </section>
  );
}