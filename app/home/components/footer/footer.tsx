"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Your Company",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="relative bg-white text-gray-900 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-20" />

      {/* Background aurora shapes */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[100rem] h-[50rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 blur-3xl animate-spin-slow" />
        <div className="absolute bottom-0 right-1/4 w-[60rem] h-[60rem] bg-gradient-to-tr from-[#00f0ff] via-[#0055ff] to-[#0000ff] opacity-20 blur-2xl rounded-full animate-rotate-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{companyName}</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Kami berkomitmen memberikan layanan terbaik, inovasi tanpa batas,
              dan solusi digital modern untuk mendukung bisnis Anda tumbuh lebih
              cepat.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, color: "hover:text-blue-500", label: "Facebook" },
                { icon: <FaTwitter />, color: "hover:text-sky-400", label: "Twitter" },
                { icon: <FaInstagram />, color: "hover:text-pink-500", label: "Instagram" },
                { icon: <FaLinkedinIn />, color: "hover:text-blue-600", label: "LinkedIn" },
                { icon: <FaYoutube />, color: "hover:text-red-500", label: "YouTube" },
                { icon: <FaGithub />, color: "hover:text-gray-900", label: "GitHub" },
                { icon: <FaWhatsapp />, color: "hover:text-green-500", label: "WhatsApp" },
                { icon: <MdEmail />, color: "hover:text-yellow-400", label: "Email" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={item.label}
                  className={`transition transform hover:scale-110 ${item.color}`}
                >
                  {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-900 transition">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-gray-900 transition">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition">Layanan</Link></li>
              <li><Link href="/portfolio" className="hover:text-gray-900 transition">Portofolio</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition">Kontak</Link></li>
              <li><Link href="/blog" className="hover:text-gray-900 transition">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-gray-900 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Dapatkan update terbaru, promo, dan artikel menarik langsung di email Anda.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {year} {companyName}. Semua hak dilindungi undang-undang.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">Dibuat dengan ❤️ di Indonesia</span>
            <span className="bg-gray-100 text-xs text-gray-900 px-2 py-1 rounded-full">
              v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
