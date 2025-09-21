"use client";

import { useState, useRef, useEffect, JSX } from "react";
import { ChevronRight } from "lucide-react";

export default function Penjelasan(): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0px");

  // Update height setiap  expanded berubah
  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [expanded]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 via-amber-50 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Teks di kiri */}
        <div className="hidden lg:block lg:w-1/3 text-left">
          <p className="text-yellow-600 text-lg font-semibold mb-6">
            Menghubungkan dunia digital dan bisnis nyata
          </p>
          <h3 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
            SUN Network membawa solusi jaringan terpadu ke level berikutnya
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Dengan pendekatan inovatif dan teknologi mutakhir, kami menghadirkan
            layanan yang membantu perusahaan mengoptimalkan efisiensi,
            meningkatkan kolaborasi, dan mencapai pertumbuhan berkelanjutan.
          </p>
        </div>

        {/* Kontainer kanan */}
        <div className="w-full lg:w-2/3 text-left">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                SUN Network
              </span>
              <span className="text-gray-900"> – Synergy Utility Network</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {expanded
                ? `SUN Network merupakan platform inovatif yang menghadirkan solusi jaringan terpadu dan menyeluruh, dirancang untuk membantu perusahaan meningkatkan efisiensi operasional, memperkuat kolaborasi antar tim, serta mendorong pertumbuhan bisnis secara berkelanjutan. Dengan memanfaatkan teknologi modern dan pendekatan strategis yang adaptif, kami hadir sebagai mitra andal bagi perusahaan yang ingin menghadapi tantangan digital saat ini dengan percaya diri dan hasil yang optimal.`
                : `SUN Network merupakan platform inovatif yang menghadirkan solusi jaringan terpadu dan menyeluruh...`}
            </p>
          </div>

          {/* Penjelasan Tambahan dengan animasi buka/tutup */}
          <div
            ref={contentRef}
            style={{ maxHeight: height }}
            className="overflow-hidden transition-all duration-500 ease-in-out text-gray-700 space-y-6 opacity-100"
          >
            <div
              className={`transition-opacity duration-500 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <p>
                Dalam setiap proyek yang kami tangani, SUN Network mengedepankan
                layanan profesional yang mencakup integrasi sistem yang
                komprehensif, analisis data mendalam, serta solusi inovatif yang
                disesuaikan dengan kebutuhan spesifik industri masing-masing
                klien. Hal ini memastikan setiap solusi yang diberikan tidak
                hanya efektif tetapi juga relevan dan berorientasi pada hasil
                jangka panjang.
              </p>
              <p>
                Dengan jaringan global yang luas dan tim ahli berpengalaman dari
                berbagai disiplin ilmu, SUN Network mampu menjangkau klien di
                berbagai negara sekaligus mempertahankan standar kualitas
                internasional yang tinggi. Pendekatan ini menjadikan setiap
                proyek yang kami tangani aman, terukur, dan dapat diandalkan,
                sehingga perusahaan klien dapat fokus pada pengembangan bisnis
                inti mereka.
              </p>
              <p>
                Visi kami adalah menjadi penggerak transformasi digital yang
                membantu perusahaan mencapai efisiensi maksimal, memaksimalkan
                potensi kolaborasi internal maupun eksternal, serta mendukung
                pertumbuhan yang berkelanjutan. Melalui kombinasi inovasi,
                keahlian, dan komitmen terhadap kualitas, SUN Network bertujuan
                untuk memberikan nilai tambah nyata bagi setiap mitra yang
                mempercayakan solusi jaringan mereka kepada kami.
              </p>
            </div>
          </div>

          {/* Tombol Expand / Collapse */}
          <div className="mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-500 transition"
            >
              {expanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya"}
              <ChevronRight
                className={`w-5 h-5 transition-transform ${
                  expanded ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
