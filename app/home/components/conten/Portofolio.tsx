"use client";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

export default function Portofolio() {
  const items = [
    {
      icon: CloudArrowUpIcon,
      title: "Integrasi Digital.",
      desc: "Menghubungkan layanan dan aplikasi dengan cepat, aman, dan efisien."
    },
    {
      icon: LockClosedIcon,
      title: "Keamanan Data.",
      desc: "Melindungi informasi penting dengan sistem enkripsi dan sertifikasi global."
    },
    {
      icon: ServerIcon,
      title: "Infrastruktur Andal.",
      desc: "Menyediakan jaringan dan server yang siap mendukung kebutuhan bisnis modern."
    }
  ];

  // Variants untuk list dan list item
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Pola Latar Belakang */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-1/2 h-[64rem] w-[128rem] -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <rect width="100%" height="100%" fill="url(#pattern-bg)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:px-8">
        {/* Kiri: Judul + Gambar */}
        <motion.div
          className="relative lg:col-start-1 lg:overflow-visible"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wide">
              Synergy Utility Network
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Membangun Masa Depan Digital
              </span>
            </h1>
          </div>

          {/* Gambar dengan hover animasi */}
          <motion.div
            className="relative group rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Border Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-700"></div>

            <img
              alt="Ilustrasi SUN Network"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              className="relative w-full rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Kanan: Penjelasan */}
        <motion.div
          className="mt-16 lg:mt-0 lg:col-start-2 lg:max-w-lg lg:ml-12"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-lg leading-8 text-gray-600">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              SUN Network – Synergy Utility Network
            </span>{" "}
            adalah platform terintegrasi yang menghadirkan solusi digital, energi, dan utilitas
            modern untuk perusahaan maupun individu. Kami berfokus pada{" "}
            <span className="text-indigo-600 font-medium">inovasi</span>,{" "}
            <span className="text-purple-600 font-medium">kolaborasi</span>, dan{" "}
            <span className="text-blue-600 font-medium">keberlanjutan</span>{" "}
            agar setiap mitra dapat berkembang di era transformasi digital.
          </p>

          {/* List dengan staggered animation */}
          <motion.ul
            role="list"
            className="mt-10 space-y-6 text-gray-700"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-x-3 items-start group"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <item.icon className="mt-1 size-6 flex-none text-yellow-500 group-hover:scale-125 transition-transform duration-300" />
                <span>
                  <strong className="font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    {item.title}
                  </strong>{" "}
                  {item.desc}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Penjelasan tambahan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          >
            <p className="mt-10 text-gray-600">
              Melalui jaringan sinergi ini,{" "}
              <span className="text-indigo-600 font-semibold">SUN Network</span>{" "}
              membantu menciptakan ekosistem digital yang mendukung{" "}
              <span className="text-purple-600 font-medium">produktivitas</span>,{" "}
              <span className="text-blue-600 font-medium">kreativitas</span>, serta{" "}
              <span className="text-pink-600 font-medium">konektivitas tanpa batas</span>.  
              Semua infrastruktur dirancang untuk memberi nilai tambah nyata bagi mitra dan pengguna.
            </p>

            <h2 className="mt-14 text-2xl font-bold tracking-tight text-gray-900">
              Komitmen Kami
            </h2>
            <p className="mt-4 text-gray-600">
              Kami percaya bahwa teknologi harus{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-semibold">
                memudahkan kehidupan
              </span>{" "}
              dan mendukung keberlanjutan. Dengan{" "}
              <span className="text-indigo-600 font-semibold">SUN Network</span>,  
              Anda mendapatkan solusi modern yang siap menghadapi tantangan global.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
