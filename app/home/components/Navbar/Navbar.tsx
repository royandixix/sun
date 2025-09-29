"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onHomeClick?: () => void;
  onTentangClick?: () => void;
  onProdukClick?: () => void;
  onPortofolioClick?: () => void;
  onStrukturJobClick?: () => void;
  onBlogClick?: () => void;
  onLokasiClick?: () => void;   // ✅ Tambah Lokasi
  onKontakClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onHomeClick,
  onTentangClick,
  onProdukClick,
  onPortofolioClick,
  onStrukturJobClick,
  onBlogClick,
  onLokasiClick,    // ✅ Lokasi
  onKontakClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // ✅ Tambah Lokasi di navItems
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/produk", label: "Produk" },
    { href: "/portofolios", label: "Portofolios" },
    { href: "/struktur-job", label: "Struktur Job" },
    { href: "/lokasi", label: "Lokasi" },   // ✅ Lokasi
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (href: string) =>
    pathname === href || pathname === href + "/";

  // ✅ handleClick diperluas untuk Lokasi
  const handleClick = (href: string) => {
    if (href === "/" && onHomeClick) onHomeClick();
    else if (href === "/tentang-kami" && onTentangClick) onTentangClick();
    else if (href === "/produk" && onProdukClick) onProdukClick();
    else if (href === "/portofolios" && onPortofolioClick) onPortofolioClick();
    else if (href === "/struktur-job" && onStrukturJobClick) onStrukturJobClick();
    else if (href === "/lokasi" && onLokasiClick) onLokasiClick();  // ✅ Lokasi
    else if (href === "/blog" && onBlogClick) onBlogClick();
    else if (href === "/kontak" && onKontakClick) onKontakClick();
  };

  // ✅ Navbar hide/show dengan scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isHovering) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHovering]);

  return (
    <motion.nav
      ref={navRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: visible ? 0 : -80,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Logo SUN */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/img/SUNLOGO.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg shadow-lg group-hover:scale-105 transition-all duration-300"
              priority
            />
            <span className="ml-3 text-xl font-bold text-white">SUN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium text-white rounded-lg hover:text-yellow-400 hover:bg-gray-800/40 transition-all duration-300 ${
                  isActive(item.href) ? "text-yellow-400 bg-gray-800/60" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link
                href="/kontak"
                className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-gray-900 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-yellow-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden bg-gray-900/90 backdrop-blur-xl border-t border-gray-800/50 shadow-2xl mobile-menu"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    handleClick(item.href);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 text-base font-medium text-white rounded-xl hover:bg-gray-800/50 hover:text-yellow-400 transition-colors duration-300 ${
                    isActive(item.href) ? "text-yellow-400 bg-gray-800/60" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800/50">
                <Link
                  href="/kontak"
                  className="block w-full px-4 py-3 rounded-xl text-center font-semibold text-gray-900 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
