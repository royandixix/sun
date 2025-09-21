"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Lightbulb, Globe, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Profesional",
    description:
      "Tim kami terdiri dari profesional berpengalaman di berbagai bidang industri dengan track record terpercaya.",
    details:
      "Lebih dari 50+ ahli berpengalaman dengan sertifikasi internasional.",
    image: "/img/teamwork.jpg",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
    title: "Inovatif",
    description:
      "Kami selalu menghadirkan solusi modern dan kreatif untuk setiap tantangan bisnis klien.",
    details:
      "Teknologi terdepan dengan pendekatan yang disesuaikan untuk setiap industri.",
    image: "/img/innovation.jpg",
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: "Global",
    description:
      "Layanan kami mampu menjangkau klien dari berbagai lokasi dan skala bisnis di seluruh dunia.",
    details:
      "Melayani 100+ perusahaan di 15+ negara dengan standar kualitas internasional.",
    image: "/img/global.jpg",
  },
];

export default function ProfilPerusahaan() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Solusi
            </span>{" "}
            <span className="text-gray-900">untuk segala kebutuhan Anda.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed text-left">
            Kami adalah mitra strategis yang menghadirkan solusi inovatif dan
            berkelanjutan untuk mengakselerasi pertumbuhan bisnis Anda di era
            digital.
          </p>
        </div>

        {/* Grid Card Zigzag */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-500 cursor-pointer ${
                idx % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-6"
              }`}
              onClick={() =>
                setExpandedCard(expandedCard === idx ? null : idx)
              }
            >
              {/* Gambar */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute -bottom-6 left-6 flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Konten */}
              <div className="p-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  {feature.description}
                </p>

                {expandedCard === idx && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-indigo-600 font-medium mb-1">
                      Detail Layanan:
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      {feature.details}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 text-sm text-indigo-600 font-medium">
                  <span>
                    {expandedCard === idx ? "Tutup detail" : "Lihat detail"}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      expandedCard === idx ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            <span>Mulai Kerjasama dengan Kami</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
