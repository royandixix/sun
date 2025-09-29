"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// ------------------------------------------------
// TypographyH1: pastikan menerima children
interface TypographyH1Props {
  className?: string;
  children: ReactNode;
}

export function TypographyH1({ className, children }: TypographyH1Props) {
  return <h1 className={className}>{children}</h1>;
}

// ------------------------------------------------
// Utilities
const splitText = (text: string) => text.split("");

// Konten slide
const slide = {
  title: "Bertumbuh Bersama SUN Synergy Utility Network",
  subtitle:
    "Platform terdepan untuk solusi utilitas berkelanjutan, menghubungkan pengguna dan penyedia layanan dengan teknologi inovatif.",
  description:
    "Kami menyediakan solusi digital modern untuk bisnis Anda dengan fokus pada efisiensi, keberlanjutan, dan pertumbuhan yang optimal. SUN Network mendukung setiap langkah perusahaan dalam menghadapi tantangan digital secara percaya diri dan berorientasi hasil.",
  image: "/img/keyword-seo-content-website-tags-search.jpg",
};

// Animated Title per huruf
const AnimatedTitle = ({
  text,
  speed = 0.002,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) => (
  <span className={`inline-block ${className} tracking-tight`}>
    {splitText(text).map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * speed, duration: 0.04 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </span>
);

// Animated Paragraph
const AnimatedParagraph = ({ text }: { text: string }) => (
  <motion.p
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify"
  >
    {text}
  </motion.p>
);

// ------------------------------------------------
// Komponen Utama
export default function VisiMisi() {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -120]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center 
                 px-4 sm:px-6 lg:px-16 py-16 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(150,120,255,0.12),transparent_70%)]" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center w-full max-w-7xl">
        {/* TEKS */}
        <motion.div style={{ opacity: textOpacity, y: textY }} className="w-full lg:w-1/2 space-y-6 max-w-2xl lg:pr-16">
          <TypographyH1 className="text-3xl sm:text-4xl lg:text-6xl leading-tight text-center lg:text-left">
            <AnimatedTitle
              text={slide.title}
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
            />
          </TypographyH1>

          <AnimatedParagraph text={slide.subtitle} />

          {/* Description toggle */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isExpanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                  {isExpanded ? slide.description : slide.description.slice(0, 130) + "..."}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center justify-center lg:justify-start gap-2 
                         text-white px-6 py-3 rounded-full
                         bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
                         shadow-lg hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? "Tutup" : "Selengkapnya"}</span>
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDownIcon className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* GAMBAR */}
        <motion.div
          style={{ opacity: imgOpacity, y: imgY }}
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-8 lg:mt-0 w-full lg:w-[65vw] h-[clamp(500px,60vh,680px)] 
                     lg:absolute lg:right-[-28vw] lg:top-1/2 lg:-translate-y-1/2 
                     overflow-hidden rounded-l-2xl shadow-xl"
        >
          <img src={slide.image} alt={slide.title} loading="lazy" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 via-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
