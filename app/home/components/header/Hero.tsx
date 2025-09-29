"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 px-6 py-24 sm:py-32 lg:px-0">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-400/20 via-yellow-600/10 to-blue-700/30 blur-3xl" />

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl lg:max-w-lg"
        >
          
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Solusi Cerdas untuk Bisnis dan Tim Modern
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            SUN Network membantu Anda membangun, mengelola, dan mengembangkan project digital lebih cepat dan efisien. Infrastruktur siap pakai, desain profesional, performa tinggi, dan keamanan lengkap membuat tim Anda lebih produktif.
          </p>

          <ul role="list" className="mt-10 space-y-4 text-gray-300">
            <li>
              <strong>Deploy instan:</strong> Jalankan project dengan satu perintah, langsung online tanpa menunggu lama.
            </li>
            <li>
              <strong>Keamanan menyeluruh:</strong> Proteksi otomatis, SSL aktif, dan perlindungan data tanpa konfigurasi rumit.
            </li>
            <li>
              <strong>Backup & restore cepat:</strong> Data project tersimpan aman dengan opsi restore instan kapan saja.
            </li>
          </ul>

          <div className="mt-10 flex gap-4">
            <button className="rounded-2xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-gray-900 shadow-md hover:bg-yellow-400 transition">
              Mulai Sekarang
            </button>
            <button className="rounded-2xl border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-400 hover:bg-blue-900/40 transition">
              Lihat Demo
            </button>
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative -ml-6 lg:ml-0"
        >
         <Image
  alt="Company Screenshot"
  src="https://source.unsplash.com/1200x800/?office,team,business" 
  width={1200}
  height={800}
  className="w-full max-w-3xl rounded-2xl border border-white/10 shadow-2xl ring-1 ring-white/10"
/>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
