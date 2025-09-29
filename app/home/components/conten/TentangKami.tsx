'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TentangKami() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient gelap lebih soft */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-blue-950 to-blue-900" />

      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        
        {/* Kiri: gambar dengan overlay teks */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
              alt="Workshop meeting"
              className="w-full h-[600px] lg:h-[700px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8">
              <p className="text-sm font-semibold tracking-wide text-gray-300">
                STEP 01
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white drop-shadow-md">
                Discover & Research
              </h3>
              <p className="mt-3 text-base text-gray-200 max-w-md leading-relaxed">
                Observing, interviewing, and understanding your business
                process directly on-site to uncover true opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Kanan: konten detail SUN Network */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }}
          className="mt-10 lg:mt-0"
        >
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">SUN Network</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-300 bg-clip-text text-transparent">
              Menghubungkan Dunia Digital
            </span>{' '}
            dan{' '}
            <span className="text-white">Bisnis Nyata</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            <span className="font-semibold text-white">SUN Network</span> membawa solusi jaringan terpadu
            ke level berikutnya. Dengan pendekatan inovatif dan teknologi mutakhir, kami membantu
            perusahaan <span className="text-white font-medium">mengoptimalkan efisiensi</span>,
            meningkatkan kolaborasi, dan mencapai pertumbuhan berkelanjutan.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-200">
            Platform ini dirancang untuk membantu perusahaan meningkatkan
            <span className="text-white font-semibold"> efisiensi operasional</span>, memperkuat
            kolaborasi antar tim, serta mendorong <span className="text-white font-semibold">pertumbuhan bisnis</span> secara berkelanjutan.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-200">
            Dengan <span className="text-white font-semibold">jaringan global</span> dan tim ahli berpengalaman,
            SUN Network mampu menjangkau klien di berbagai negara sekaligus
            mempertahankan <span className="text-white font-medium">standar kualitas internasional tinggi</span>.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-200">
            Visi kami adalah menjadi <span className="text-white font-semibold">penggerak transformasi digital</span>
            yang mendukung pertumbuhan berkelanjutan dan memberikan nilai tambah nyata
            bagi setiap mitra.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span>Lihat Portofolio Selengkapnya</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
