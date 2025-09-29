"use client";

import React from "react";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "SUN Network",
  year = new Date().getFullYear(),
}) => {
  const socialItems = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaDiscord />, href: "#", label: "Discord" },
    { icon: <EnvelopeIcon className="w-5 h-5" />, href: "mailto:info@sunnetwork.id", label: "Email" },
  ];

  const companyLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Portofolio", href: "/portfolio" },
    { name: "Kontak", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  const discoverLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Karir", href: "/careers" },
    { name: "Komunitas", href: "/community" },
    { name: "Dokumentasi", href: "/docs" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email) {
      console.log("Newsletter subscription for:", email);
      alert("Terima kasih! Anda telah berlangganan newsletter kami.");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-tr from-blue-900 via-blue-950 to-gray-900 text-gray-300 py-20">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-800 via-indigo-900 to-blue-950 opacity-20 blur-3xl rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-700 via-blue-600 to-blue-900 opacity-20 blur-2xl rounded-full animate-spin"
          style={{ animationDuration: "30s", animationDirection: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Contact */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-white mb-4">{companyName}</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Menyediakan solusi digital modern, inovatif, dan profesional untuk
              bisnis Anda.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-blue-400" />
                <span>Jl. Sultan Hasanuddin No.123, Makassar</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                <span>info@sunnetwork.id</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-4">
              {socialItems.map((item, idx) => (
                <a
                  key={`social-${idx}`}
                  href={item.href}
                  aria-label={item.label}
                  className="text-2xl hover:text-white transition-all duration-200 transform hover:scale-125"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={`company-${idx}`}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Dapatkan update terbaru, promo, dan artikel menarik langsung ke
              email Anda.
            </p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Anda"
                required
                className="flex-1 px-4 py-3 bg-gray-800 text-gray-200 placeholder-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-r-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Discover / Additional Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-lg font-semibold text-white mb-4">Discover</h4>
            <ul className="space-y-3">
              {discoverLinks.map((link, idx) => (
                <li key={`discover-${idx}`}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="mb-4 md:mb-0">
            © {year} {companyName}. Semua hak cipta dilindungi.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/legal"
              className="hover:text-white transition-colors duration-200"
            >
              Legal
            </Link>
            <Link
              href="/trust"
              className="hover:text-white transition-colors duration-200"
            >
              Trust
            </Link>
            <Link
              href="/status"
              className="hover:text-white transition-colors duration-200"
            >
              Status
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
