"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TypographyH1 } from "../TypographyH1";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animasi interaktif
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -150]), { stiffness: 80, damping: 20 });
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [5, -5]), { stiffness: 80, damping: 20 });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]), { stiffness: 80, damping: 20 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1.05]), { stiffness: 80, damping: 20 });
  const textX = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 50]), { stiffness: 80, damping: 20 });
  const textOpacity = useSpring(useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]), { stiffness: 80, damping: 20 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-white text-gray-900"
    >
      {/* Overlay halus */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      {/* Floating gradient blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-gray-800/20 via-black/10 to-gray-900/20 rounded-full blur-3xl"
      />

<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12 sm:gap-16 pt-32 sm:pt-40 lg:pt-48">

        
        {/* Gambar */}
        <motion.div
          style={{ y, rotate, opacity, scale }}
          className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl relative"
        >
          <img
            src="/img/keyword-seo-content-website-tags-search.jpg"
            alt="Solusi Profesional"
            className="relative w-full h-auto rounded-xl shadow-xl object-cover z-10"
          />
        </motion.div>

        {/* Teks */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="flex-1 w-full max-w-xl text-left"
        >
          <TypographyH1>Solusi Profesional</TypographyH1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-700 max-w-full">
            Desain modern untuk perusahaan Anda.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center"
      >
        <span className="text-xs sm:text-sm mb-1">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
