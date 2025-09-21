"use client";

import React from "react";

export default function StrukturOrganisasiModern() {
  const features = [
    {
      image: "https://via.placeholder.com/100x100.png?text=Direksi",
      title: "Direksi",
      description: "Dipimpin oleh direksi berpengalaman lintas sektor.",
    },
    {
      image: "https://via.placeholder.com/100x100.png?text=Manajemen",
      title: "Manajemen",
      description: "Manajemen inovatif dengan strategi modern.",
    },
    {
      image: "https://via.placeholder.com/100x100.png?text=Global",
      title: "Global",
      description: "Jaringan global untuk memperluas kolaborasi.",
    },
    {
      image: "https://via.placeholder.com/100x100.png?text=Support",
      title: "Support",
      description: "Tim pendukung yang siap membantu kapan saja.",
    },
  ];

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

      {/* Container utama */}
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-base text-blue-300">
            Struktur Organisasi
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Meet Our Team
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-lg font-medium text-blue-200 sm:text-xl">
          Tim kami mendukung transparansi, kolaborasi, dan pertumbuhan
          berkelanjutan.
        </p>

        {/* Grid anggota organisasi */}
        <div className="mt-16 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-400">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-blue-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button Selengkapnya */}
        <div className="mt-12 flex justify-start">
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}
