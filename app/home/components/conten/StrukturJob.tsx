"use client";

import { motion } from "framer-motion";

export default function Page() {
  const anggota = [
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f7f43d1d4f1f?auto=format&fit=crop&w=200&q=80",
      nama: "Direktur Utama",
      jabatan: "Memimpin perusahaan dan mengambil keputusan strategis.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?auto=format&fit=crop&w=200&q=80",
      nama: "Manajer Operasional",
      jabatan: "Mengatur operasional harian dan memastikan target tercapai.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=80",
      nama: "Manajer Keuangan",
      jabatan: "Mengelola anggaran, laporan keuangan, dan audit internal.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614281548774-8a38b1d2c7bb?auto=format&fit=crop&w=200&q=80",
      nama: "Manajer SDM",
      jabatan: "Mengatur perekrutan, pelatihan, dan kesejahteraan karyawan.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      nama: "Tim IT & Pengembangan",
      jabatan: "Mengelola infrastruktur IT dan mengembangkan sistem digital.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581091215366-0aa1c4e2f0b1?auto=format&fit=crop&w=200&q=80",
      nama: "Tim Pemasaran",
      jabatan: "Merancang strategi pemasaran dan membangun brand perusahaan.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <div className="relative isolate bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      {/* Background decorative glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 w-[1400px] h-[800px] -translate-x-1/2 bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 opacity-20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="max-w-3xl text-center mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm uppercase tracking-widest text-sky-400 font-semibold">
            Struktur Organisasi
          </h2>
          <p className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-lg">
            Tim Profesional Kami
          </p>
          <p className="mt-6 max-w-2xl text-lg text-blue-200 sm:text-xl mx-auto leading-relaxed">
            Setiap anggota tim berperan penting dalam menciptakan inovasi dan
            layanan berkualitas tinggi bagi perusahaan dan pelanggan.
          </p>
        </motion.div>

        {/* Grid anggota */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {anggota.map((a, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl bg-white/10 backdrop-blur-xl p-8 ring-1 ring-white/20 hover:ring-sky-400 transition-all duration-500 shadow-lg hover:shadow-sky-400/40 cursor-pointer"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-blue-400 group-hover:border-sky-300 transition-all duration-500 shadow-md">
                  <img
                    src={a.image}
                    alt={a.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Nama */}
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow">
                  {a.nama}
                </h3>
                {/* Jabatan */}
                <p className="text-blue-200 text-sm leading-relaxed">
                  {a.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Selengkapnya */}
        <motion.div
          className="mt-20 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-300 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-all duration-500"
          >
            Selengkapnya
          </a>
        </motion.div>
      </div>
    </div>
  );
}
