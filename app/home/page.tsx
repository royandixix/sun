"use client";

import HeroSection from "./components/conten/Visimis1";
import ProfilPerusahaan from "./components/conten/ProfilPerusahaan";
import Visimisi from "./components/conten/Visimisi";
import BlogSection from "./blog/BlogSection";
import Footer from "./components/footer/footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Header hero animasi */}
      <HeroSection />

      {/* Profil Perusahaan / Layanan */}
      <ProfilPerusahaan />

      {/* Visi & Misi */}
      <Visimisi />

      {/* Blog / Artikel */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
