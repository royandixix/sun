"use client";

import { motion } from "framer-motion";

export default function Produk() {
  const produk = [
    {
      id: 1,
      nama: "Asus ZenBook 14",
      deskripsi: "Laptop tipis dan ringan dengan performa tinggi.",
      harga: "Rp 14.500.000",
      gambar:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      type: "dark",
    },
    {
      id: 2,
      nama: "MacBook Air M2",
      deskripsi: "Chip M2, desain premium, baterai super awet.",
      harga: "Rp 18.999.000",
    },
    {
      id: 3,
      nama: "Lenovo ThinkPad X1 Carbon",
      deskripsi: "Laptop bisnis tangguh dengan build kokoh.",
      harga: "Rp 22.500.000",
    },
    {
      id: 4,
      nama: "Dell XPS 13",
      deskripsi: "Desain tipis, layar tajam, ideal untuk profesional.",
      harga: "Rp 20.200.000",
    },
    {
      id: 5,
      nama: "HP Spectre x360",
      deskripsi: "Laptop premium 2-in-1 dengan layar sentuh fleksibel.",
      harga: "Rp 19.800.000",
    },
    {
      id: 6,
      nama: "Acer Swift 3",
      deskripsi: "Laptop tipis terjangkau, cocok untuk pelajar.",
      harga: "Rp 9.900.000",
      gambar:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
      type: "blue",
    },
  ];

  // Variants untuk teks header
  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  // Variants untuk staggered grid
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20 max-w-2xl ml-auto text-left lg:text-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-8 flex justify-start lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent text-5xl font-normal">
                Produk Kami
              </span>
            </motion.div>
          </div>

          <motion.p
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Pilihan laptop terbaik dari{" "}
            <span className="text-indigo-600">SUN Network</span> untuk kerja,
            belajar, dan hiburan Anda.
          </motion.p>
          <motion.p
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Desain modern, performa handal, dan daya tahan kuat untuk mendukung
            gaya hidup digital Anda.
          </motion.p>
        </motion.div>

        {/* Grid Produk dengan staggered animation */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {produk.map((p) => (
            <motion.div
              key={p.id}
              className={`
                flex flex-col rounded-xl shadow-sm border overflow-hidden
                ${
                  p.type === "dark"
                    ? "bg-gray-900 text-white border-gray-800"
                    : ""
                }
                ${
                  p.type === "blue"
                    ? "bg-blue-600 text-white border-blue-600"
                    : ""
                }
                ${!p.type ? "bg-white text-gray-900 border-gray-200" : ""}
              `}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.6 }}
            >
              {/* Gambar Produk */}
              <div className="h-44 overflow-hidden">
                <img
                  src={p.gambar}
                  alt={p.nama}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Info Produk */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg mb-2">{p.nama}</h3>
                <p className="text-sm leading-relaxed mb-4">{p.deskripsi}</p>
                <p className="text-indigo-600 mt-auto">{p.harga}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Produk Selengkapnya */}
        <motion.div
          className="mt-14 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>Produk Selengkapnya</span>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
