import React from "react";
import { motion } from "framer-motion";

const Lokasi: React.FC = () => {
  const location = {
    name: "Kantor Pusat",
    address: "Jl. Jend. Sudirman No.45, Makassar",
    hours: "Senin - Jumat, 08:00 - 17:00",
    description:
      "Kantor pusat kami berada di jantung kota Makassar, memudahkan Anda untuk mengakses layanan kami dengan cepat dan efisien. " +
      "Dengan lokasi strategis dan fasilitas yang nyaman, kami siap menyambut setiap kunjungan, baik untuk konsultasi bisnis, " +
      "kolaborasi, maupun layanan pelanggan.",
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Info lokasi */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center space-y-6 bg-white/80 lg:bg-transparent p-6 lg:p-0 rounded-3xl shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            Lokasi Kami di Makassar
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal"
            variants={itemVariants}
          >
            {location.description}
          </motion.p>

          <motion.div className="space-y-1" variants={itemVariants}>
            <p className="text-3xl sm:text-4xl md:text-5xl text-indigo-600 font-light">
              {location.name}
            </p>
            <p className="text-gray-700 text-base sm:text-lg font-normal">
              {location.address}
            </p>
            <p className="text-gray-500 text-sm sm:text-base font-normal">
              {location.hours}
            </p>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          className="lg:w-1/2 w-full h-96 sm:h-[500px] md:h-[600px] lg:h-screen rounded-3xl overflow-hidden shadow-2xl"
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126918.123456789!2d119.3832!3d-5.1477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1a123456789ab%3A0xabcdef123456789!2sMakassar!5e0!3m2!1sen!2sid!4v1234567890"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Background map overlay untuk mobile */}
      <div className="absolute top-0 left-0 w-full h-full lg:hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126918.123456789!2d119.3832!3d-5.1477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1a123456789ab%3A0xabcdef123456789!2sMakassar!5e0!3m2!1sen!2sid!4v1234567890"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Lokasi;
