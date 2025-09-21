"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: "Produk", href: "#" },
  { name: "Fitur", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Perusahaan", href: "#" },
];

const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 relative isolate overflow-hidden">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SUN Network</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=yellow&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Tutup menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Content */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 py-32 sm:py-48 lg:py-56 relative">
          {/* Konten kiri */}
          <div className="max-w-2xl text-left z-20 relative">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
              SUN Network –{" "}
              <span className="text-yellow-400 bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                Synergy Utility Network
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              SUN Network hadir untuk membangun jaringan terpadu yang mendukung
              efisiensi, kolaborasi, dan pertumbuhan bisnis Anda secara berkelanjutan.
              Kami menggabungkan teknologi modern dengan strategi adaptif agar
              perusahaan dapat menghadapi tantangan digital dengan percaya diri
              dan mencapai hasil terbaik.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-md bg-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-yellow-400 transition"
              >
                Lanjut Sekarang
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white flex items-center gap-1 hover:text-yellow-400 transition"
              >
                Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Gambar kanan */}
          <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] flex-shrink-0 z-10">
            <Image
              src="/img/pexels.jpg"
              alt="Ilustrasi jaringan"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            {/* Border animasi gold */}
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/20 animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        {/* Gradient besar belakang */}
        <div className="absolute top-0 left-1/2 w-[144rem] -translate-x-1/2 rotate-45 bg-gradient-to-tr from-yellow-200 to-amber-500 opacity-20 blur-3xl aspect-[1155/678] animate-spin-slow" />
        {/* Lingkaran gold glow */}
        <div className="absolute bottom-0 right-1/4 w-[80rem] h-[80rem] bg-gradient-to-tr from-yellow-400 via-amber-500 to-orange-600 opacity-20 blur-2xl rounded-full animate-rotate-slow" />
      </div>
    </div>
  );
};

export default Hero;
