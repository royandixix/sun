"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Lightbulb, Globe, ChevronRight } from "lucide-react";

const features = Array.from({ length: 10 }).map((_, idx) => {
  const icons = [
    <Users className="w-10 h-10 text-yellow-500" />,
    <Lightbulb className="w-10 h-10 text-yellow-500" />,
    <Globe className="w-10 h-10 text-yellow-500" />
  ];
  const titles = ["Profesional", "Inovatif", "Global"];
  const descriptions = [
    "Tim kami terdiri dari profesional berpengalaman di berbagai bidang industri dengan track record terpercaya.",
    "Kami selalu menghadirkan solusi modern dan kreatif untuk setiap tantangan bisnis klien.",
    "Layanan kami mampu menjangkau klien dari berbagai lokasi dan skala bisnis di seluruh dunia.",
  ];
  const details = [
    "Lebih dari 50+ ahli berpengalaman dengan sertifikasi internasional",
    "Teknologi terdepan dengan pendekatan yang disesuaikan untuk setiap industri",
    "Melayani 100+ perusahaan di 15+ negara dengan standar kualitas internasional",
  ];

  const i = idx % 3;
  return { icon: icons[i], title: titles[i], description: descriptions[i], details: details[i] };
});

export default function ProfilPerusahaan() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-slide tiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % features.length);
      setExpandedCard(null);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll otomatis ke slide saat index berubah
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const slideWidth = container.children[0]?.clientWidth ?? 0;
      container.scrollTo({
        left: currentIndex * (slideWidth + 24),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-left">
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Profil
            </span>
            <span className="text-gray-900"> Perusahaan</span>
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-4xl mb-8 leading-relaxed text-left">
            Kami adalah mitra strategis yang menghadirkan solusi inovatif dan berkelanjutan untuk mengakselerasi pertumbuhan bisnis Anda di era digital.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth pb-6 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-100"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-80 relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl ${
                expandedCard === idx ? 'shadow-2xl' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
            >
              <div className="relative p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">{feature.description}</p>

                {expandedCard === idx && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-yellow-500 font-medium mb-2">Detail Layanan:</p>
                    <p className="text-gray-600 text-sm md:text-base">{feature.details}</p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400">{expandedCard === idx ? 'Tutup detail' : 'Lihat detail'}</span>
                  <ChevronRight className={`w-4 h-4 text-yellow-500 ${expandedCard === idx ? 'rotate-90' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            <span>Mulai Kerjasama dengan Kami</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
