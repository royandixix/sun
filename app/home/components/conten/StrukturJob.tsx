"use client";

import { motion } from "framer-motion";

export default function StrukturJob() {
  const anggota = [
    {
      image: "https://images.unsplash.com/photo-1603415526960-f7f43d1d4f1f?auto=format&fit=crop&w=200&q=80",
      nama: "Direktur Utama",
      jabatan: "Memimpin perusahaan dan mengambil keputusan strategis.",
    },
    {
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?auto=format&fit=crop&w=200&q=80",
      nama: "Manajer Operasional",
      jabatan: "Mengatur operasional harian dan memastikan target tercapai.",
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=80",
      nama: "Manajer Keuangan",
      jabatan: "Mengelola anggaran, laporan keuangan, dan audit internal.",
    },
    {
      image: "https://images.unsplash.com/photo-1614281548774-8a38b1d2c7bb?auto=format&fit=crop&w=200&q=80",
      nama: "Manajer SDM",
      jabatan: "Mengatur perekrutan, pelatihan, dan kesejahteraan karyawan.",
    },
    {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      nama: "Tim IT & Pengembangan",
      jabatan: "Mengelola infrastruktur IT dan mengembangkan sistem digital.",
    },
    {
      image: "https://images.unsplash.com/photo-1581091215366-0aa1c4e2f0b1?auto=format&fit=crop&w=200&q=80",
      nama: "Tim Pemasaran",
      jabatan: "Merancang strategi pemasaran dan membangun brand perusahaan.",
    },
  ];

  // Variants untuk header
  const headerVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  // Variants untuk grid dan card
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <div className="relative isolate bg-blue-900 px-6 py-24 sm:py-32 lg:px-8">
      {/* Background blur polygon */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[1440px] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-base text-blue-300"
            variants={headerVariants}
            transition={{ duration: 0.6 }}
          >
            Struktur Organisasi
          </motion.h2>
          <motion.p
            className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl"
            variants={headerVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tim Profesional Kami
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl text-lg font-medium text-blue-200 sm:text-xl"
            variants={headerVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Setiap anggota tim berperan penting dalam menciptakan inovasi dan
            layanan berkualitas tinggi bagi perusahaan dan pelanggan.
          </motion.p>
        </motion.div>

        {/* Grid anggota */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {anggota.map((a, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-400">
                  <img
                    src={a.image}
                    alt={a.nama}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Nama */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {a.nama}
                </h3>
                {/* Jabatan */}
                <p className="text-blue-200">{a.jabatan}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Selengkapnya */}
        <motion.div
          className="mt-12 flex justify-start"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            Selengkapnya
          </a>
        </motion.div>
      </div>
    </div>
  );
}
