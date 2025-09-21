"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Github,
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
  Building2,
  User,
  Award,
  Users,
  Briefcase,
  Zap,
  Layers,
  Shield,
  Book,
  MessageSquare,
  Package,
  Globe,
  Sparkles,
} from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  badge?: string;
  isNew?: boolean;
}

interface NavLink {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}

export default function ProfessionalNavbarClient() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tentang Kami",
      href: "#",
      submenu: [
        { label: "Profil Perusahaan", href: "/tentang", description: "Sejarah, visi, misi dan nilai-nilai perusahaan", icon: <Building2 size={18} /> },
        { label: "Tim Management", href: "/tim", description: "Kenali para pemimpin dan profesional kami", icon: <User size={18} /> },
        { label: "Sertifikasi & Penghargaan", href: "/penghargaan", description: "Pencapaian dan pengakuan industri", icon: <Award size={18} />, badge: "ISO Certified" },
        { label: "Karir", href: "/karir", description: "Bergabunglah dengan tim profesional kami", icon: <Users size={18} />, isNew: true },
      ],
    },
    {
      label: "Produk",
      href: "#",
      submenu: [
        { label: "Konsultasi Bisnis", href: "/konsultasi", description: "Solusi strategis untuk pertumbuhan bisnis", icon: <Briefcase size={18} /> },
        { label: "Teknologi & IT", href: "/teknologi", description: "Solusi digital dan transformasi teknologi", icon: <Zap size={18} /> },
        { label: "Manajemen Proyek", href: "/proyek", description: "Pengelolaan proyek dengan standar internasional", icon: <Layers size={18} /> },
        { label: "Audit & Compliance", href: "/audit", description: "Layanan audit dan kepatuhan regulasi", icon: <Shield size={18} /> },
      ],
    },
    {
      label: "Portofolio",
      href: "#",
      submenu: [
        { label: "Studi Kasus", href: "/studi-kasus", description: "Analisis mendalam proyek-proyek sukses", icon: <Book size={18} /> },
        { label: "Klien & Partner", href: "/klien", description: "Perusahaan-perusahaan yang mempercayai kami", icon: <Users size={18} /> },
        { label: "Testimoni", href: "/testimoni", description: "Pengalaman dan feedback dari klien", icon: <MessageSquare size={18} /> },
      ],
    },
    {
      label: "Struktur Job",
      href: "#",
      submenu: [
        { label: "Blog & Artikel", href: "/blog", description: "Insight industri dan tren teknologi terkini", icon: <Book size={18} /> },
        { label: "Whitepaper", href: "/whitepaper", description: "Penelitian dan analisis mendalam", icon: <Package size={18} />, badge: "Premium" },
        { label: "Webinar & Event", href: "/event", description: "Seminar dan workshop untuk profesional", icon: <Globe size={18} />, isNew: true },
        { label: "Documentation", href: "/docs", description: "Panduan teknis dan best practices", icon: <Zap size={18} /> },
      ],
    },
    {
      label: "Kontak",
      href: "#",
      submenu: [
        { label: "Blog & Artikel", href: "/blog", description: "Insight industri dan tren teknologi terkini", icon: <Book size={18} /> },
        { label: "Whitepaper", href: "/whitepaper", description: "Penelitian dan analisis mendalam", icon: <Package size={18} />, badge: "Premium" },
        { label: "Webinar & Event", href: "/event", description: "Seminar dan workshop untuk profesional", icon: <Globe size={18} />, isNew: true },
        { label: "Documentation", href: "/docs", description: "Panduan teknis dan best practices", icon: <Zap size={18} /> },
      ],
    },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const dropdownVariants = {
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.08, delayChildren: 0.05 } },
    closed: { opacity: 0, y: -15, scale: 0.95, transition: { duration: 0.2, ease: "easeInOut", staggerChildren: 0.03, staggerDirection: -1 } },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
    closed: { opacity: 0, x: -15 },
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-xl" : "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-md"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-4 cursor-pointer group">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <Image src="/img/SUNLOGO.png" alt="SUN Logo" width={28} height={28} className="rounded-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles size={8} className="text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">SUN Network</span>
                  <span className="text-sm text-blue-600 font-medium -mt-1">Synergy Utility Network</span>
                </div>
              </div>
              <span className="sm:hidden text-xl font-bold text-gray-900">SUN</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" onMouseEnter={() => link.submenu && setHoverMenu(link.label)} onMouseLeave={() => setHoverMenu(null)}>
                  <motion.div whileHover={{ y: -2 }} className="cursor-pointer">
                    <div className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50/80 group">
                      {link.label}
                      {link.submenu && <ChevronDown size={14} className={`transition-all duration-400 ${hoverMenu === link.label ? "rotate-180 text-blue-500" : "text-gray-400 group-hover:text-blue-500"}`} />}
                    </div>
                  </motion.div>

                  {/* Dropdown */}
                  {link.submenu && (
                    <AnimatePresence>
                      {hoverMenu === link.label && (
                        <motion.div initial="closed" animate="open" exit="closed" variants={dropdownVariants} className="absolute top-full left-0 mt-4 w-96 z-20">
                          <div className="bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/60 rounded-2xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100/80">
                              <h3 className="font-bold text-gray-900 text-lg">{link.label}</h3>
                              <p className="text-sm text-gray-500 mt-1">Pilih layanan yang Anda butuhkan</p>
                            </div>
                            <div className="py-3">
                              {link.submenu.map((sub) => (
                                <motion.a key={sub.label} href={sub.href} variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "rgba(59,130,246,0.05)" }} className="flex items-start gap-4 px-6 py-4 cursor-pointer transition-all duration-300 group relative">
                                  <div className="mt-1 p-2 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">{sub.icon}</div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1">
                                      <span className="font-semibold text-gray-900 group-hover:text-blue-900">{sub.label}</span>
                                      {sub.isNew && <span className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">NEW</span>}
                                      {sub.badge && <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">{sub.badge}</span>}
                                    </div>
                                    {sub.description && <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">{sub.description}</p>}
                                  </div>
                                  <ArrowRight size={16} className="mt-2 text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1" />
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300">
                <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/50 backdrop-blur-md z-40" onClick={() => setMobileOpen(false)} />

            <motion.div initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 200, opacity: { duration: 0.25 } }} className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl">
              <div className="flex flex-col h-full p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-0.5">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <img src="/img/SUNLOGO.png" alt="Logo" className="w-6 h-6 rounded-lg" />
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">SUN Network</span>
                      <div className="text-xs text-blue-600 -mt-1">Professional Services</div>
                    </div>
                  </div>
                  <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setMobileOpen(false)} className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
                    <X size={22} />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto space-y-3">
                  {navLinks.map((link) => (
                    <div key={link.label} className="border border-gray-200 rounded-xl overflow-hidden bg-gradient-to-r from-white to-gray-50/50">
                      <button onClick={() => link.submenu ? setOpenSubmenu(openSubmenu === link.label ? null : link.label) : setMobileOpen(false)} className="flex items-center justify-between w-full px-5 py-4 text-left font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group">
                        <span className="text-base">{link.label}</span>
                        {link.submenu && <ChevronDown size={18} className={`transition-all duration-400 text-gray-500 group-hover:text-blue-500 ${openSubmenu === link.label ? "rotate-180" : ""}`} />}
                      </button>
                      {link.submenu && openSubmenu === link.label && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
                          {link.submenu.map((sub) => (
                            <button key={sub.label} onClick={() => setMobileOpen(false)} className="flex items-start gap-4 w-full px-5 py-4 text-left hover:bg-white transition-all duration-200 group">
                              <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200">{sub.icon}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-gray-900 text-sm">{sub.label}</span>
                                  {sub.isNew && <span className="px-1.5 py-0.5 bg-green-500 text-white text-xs font-bold rounded">NEW</span>}
                                  {sub.badge && <span className="px-1.5 py-0.5 bg-amber-500 text-white text-xs font-bold rounded">{sub.badge}</span>}
                                </div>
                                {sub.description && <p className="text-xs text-gray-600 leading-relaxed">{sub.description}</p>}
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
