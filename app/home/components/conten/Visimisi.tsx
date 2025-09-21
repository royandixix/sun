"use client";

import { Users, Star, ShieldCheck } from "lucide-react";

export default function ProfilPerusahaan() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Kiri - Teks */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Profi
            </span>{" "}
            <span className="text-gray-900">Perusahaan</span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            Kami adalah mitra strategis yang menghadirkan solusi inovatif dan
            berkelanjutan untuk mengakselerasi pertumbuhan bisnis Anda di era
            digital.
          </p>

          <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
            Dengan pengalaman luas di berbagai sektor industri, kami tidak hanya
            menyediakan layanan konsultasi, tetapi juga mendampingi setiap langkah
            transformasi bisnis Anda. Fokus kami adalah membangun kemitraan jangka
            panjang yang berlandaskan kepercayaan, profesionalisme, dan hasil nyata
            yang bisa diukur.
          </p>

          {/* List Fitur */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Users className="w-7 h-7 text-indigo-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Tim Profesional</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Lebih dari 50+ ahli berpengalaman dengan sertifikasi internasional.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Star className="w-7 h-7 text-indigo-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Kualitas Terjamin</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Standar layanan tinggi yang berorientasi pada hasil terbaik.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-indigo-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Komitmen Jangka Panjang</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Kemitraan berlandaskan kepercayaan, keamanan, dan keberlanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan - Ilustrasi/Kartu */}
        <div className="relative flex items-center justify-center">
          <div className="w-full h-80 md:h-[28rem] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-xl flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-semibold text-center px-8">
              Inovasi • Profesional • Kepercayaan
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
