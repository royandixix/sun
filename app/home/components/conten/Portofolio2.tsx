'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Portofolio2() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        
        {/* Kiri: konten detail */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="mt-10 lg:mt-0"
        >
         
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Temukan
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Kami bekerja sama dengan klien untuk memahami{' '}
            <span className="font-semibold text-indigo-600">kebutuhan</span> dan tujuan mereka,
            serta ikut terlibat dalam operasional harian untuk melihat
            apa yang benar-benar mendorong bisnis mereka.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Tim kami melakukan observasi langsung, mewawancarai pimpinan, dan menganalisis sistem yang ada untuk menemukan peluang pertumbuhan. 
            Setelah evaluasi selesai, kami menyusun rencana komprehensif beserta anggaran.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            <span className="font-semibold text-indigo-600">Sinergi Utility Network</span> adalah konsep yang kami terapkan untuk mengintegrasikan berbagai layanan utilitas dan jaringan perusahaan. 
            Dengan pendekatan ini, setiap bagian saling terhubung dan bekerja bersama secara efisien, menciptakan kolaborasi optimal dan mendukung pertumbuhan berkelanjutan.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
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

        {/* Kanan: gambar dengan overlay teks */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }}
          className="relative mt-10 lg:mt-0"
        >
          <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
              alt="Workshop meeting"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            {/* Overlay teks penjelasan di atas gambar */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8">
              <p className="text-sm font-semibold tracking-wide text-indigo-400">
                STEP 01
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white drop-shadow-lg">
                Temukan & Riset
              </h3>
              <p className="mt-3 text-base text-gray-200 max-w-md leading-relaxed">
                Mengamati, mewawancarai, dan memahami proses bisnis Anda secara langsung untuk menemukan peluang sejati.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
