"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Home, User, Briefcase, Settings, Users, Mail, BookOpen } from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: SubMenuItem[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/", icon: <Home size={16} /> },
    { label: "About", href: "/about", icon: <User size={16} /> },
    { label: "Portfolio", href: "/portfolio", icon: <Briefcase size={16} /> },
    {
      label: "Services",
      href: "/services",
      icon: <Settings size={16} />,
      submenu: [
        { label: "Web Development", href: "/services/web" },
        { label: "Mobile Development", href: "/services/mobile" },
        { label: "UI/UX Design", href: "/services/uiux" },
      ],
    },
    { label: "Team", href: "/team", icon: <Users size={16} /> },
    { label: "Blog", href: "/blog", icon: <BookOpen size={16} /> },
    { label: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  // Scroll effect: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 100) setScrollDir("down");
      else setScrollDir("up");

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll for mobile menu
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  // Animation variants
  const dropdownVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.25, staggerChildren: 0.05 } },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", transition: { duration: 0.3 } },
  };

  const mobileSubmenuVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full z-50 font-sans transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
        animate={{ y: scrollDir === "down" ? -120 : 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-md" />
              <span className="font-bold text-lg bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                SUN Synergy
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setHoverMenu(link.label)}
                  onMouseLeave={() => setHoverMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.icon}
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        size={14}
                        className={`ml-1 transition-transform duration-300 ${
                          hoverMenu === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  {link.submenu && hoverMenu === link.label && (
                    <AnimatePresence>
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-white shadow-lg border border-gray-200 overflow-hidden z-50"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md text-gray-700">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-full w-full bg-white/95 backdrop-blur-xl z-50 p-8 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md text-gray-900 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </div>

                {navLinks.map((link) => (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() =>
                        link.submenu
                          ? setOpenSubmenu(openSubmenu === link.label ? null : link.label)
                          : setMobileOpen(false)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 rounded-md font-medium text-gray-900 hover:bg-gray-50 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        {link.icon}
                        {link.label}
                      </span>
                      {link.submenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${openSubmenu === link.label ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>

                    {link.submenu && (
                      <AnimatePresence>
                        {openSubmenu === link.label && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileSubmenuVariants}
                            className="ml-6 mt-2 overflow-hidden rounded-md bg-gray-100/60"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
