"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  // Variants untuk teks utama
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.8, ease: "easeOut" },
    }),
  };

  // Variants untuk list item
  const listVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Variants untuk tombol
  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } },
  };

  // Variants untuk gambar
  const imageVariant = {
    hidden: { opacity: 0, y: 50, rotate: -5, scale: 0.95 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative isolate overflow-hidden bg-gray-950 px-6 py-20 sm:py-28 lg:px-0">
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-16">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.h1
            variants={textVariant}
            custom={0}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
          >
            Bangun Bisnis Anda <br /> Dengan Solusi Cerdas
          </motion.h1>

          <motion.p
            variants={textVariant}
            custom={0.2}
            className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            SUN Network membantu tim Anda lebih produktif dengan project digital siap pakai, performa tinggi, desain profesional, dan keamanan lengkap.
          </motion.p>

          <motion.ul
            role="list"
            className="mt-6 space-y-4 text-gray-300"
          >
            {[
              { title: "Deploy instan", desc: "Jalankan project langsung online tanpa menunggu lama." },
              { title: "Keamanan menyeluruh", desc: "Proteksi otomatis, SSL aktif, dan perlindungan data." },
              { title: "Backup & restore cepat", desc: "Data tersimpan aman dan bisa restore instan." },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={listVariant}
                custom={0.4 + i * 0.2}
              >
                <strong className="text-yellow-400">{item.title}:</strong> {item.desc}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-3xl bg-yellow-500 px-8 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Mulai Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-3xl border border-yellow-400 px-8 py-3 text-base font-semibold text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300"
            >
              Lihat Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="w-[400px] sm:w-[500px] md:w-[600px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500"
          >
            <Image
              alt="Team working"
              src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 rounded-3xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
