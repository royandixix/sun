"use client";

import { useRef } from "react";
import Navbar from "./home/components/Navbar/Navbar";
import Example from "./home/components/header/Hero"; 
import StrukturJob from "./home/components/conten/StrukturJob";
import BlogSection from "./home/blog/BlogSection";
import Footer from "./home/components/footer/footer";
import TentangKami from "./home/components/conten/TentangKami";
import Portofolio2 from "./home/components/conten/Portofolio2";
import Portofolio from "./home/components/conten/Portofolio";
import Lokasi from "./home/components/conten/Lokasi";
import Produk from './home/components/conten/Produk';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tentangRef = useRef<HTMLDivElement>(null);
  const produkRef = useRef<HTMLDivElement>(null);
  const portofolioRef = useRef<HTMLDivElement>(null);
  const strukturRef = useRef<HTMLDivElement>(null);
  const lokasiRef = useRef<HTMLDivElement>(null);   // ✅ Lokasi
  const blogRef = useRef<HTMLDivElement>(null);     // ✅ Blog
  const kontakRef = useRef<HTMLDivElement>(null);

  // Fungsi scroll
  const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToTentangKami = () => tentangRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProduk = () => produkRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPortofolio = () => portofolioRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToStrukturJob = () => strukturRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToLokasi = () => lokasiRef.current?.scrollIntoView({ behavior: "smooth" });  // ✅ scroll Lokasi
  const scrollToBlog = () => blogRef.current?.scrollIntoView({ behavior: "smooth" });      // ✅ scroll Blog
  const scrollToKontak = () => kontakRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar
        onHomeClick={scrollToHero}
        onTentangClick={scrollToTentangKami}
        onProdukClick={scrollToProduk}
        onPortofolioClick={scrollToPortofolio}
        onStrukturJobClick={scrollToStrukturJob}
        onLokasiClick={scrollToLokasi}   // ✅ tambahkan Lokasi
        onBlogClick={scrollToBlog}       // ✅ Blog aktif
        onKontakClick={scrollToKontak}
      />

      <main className="overflow-x-hidden">
        <div ref={heroRef}><Example /></div>
        <div ref={tentangRef}><TentangKami /></div>

        {/* Portofolio */}
        <div ref={portofolioRef}>
        <Portofolio2 />
          <Portofolio />
          
        </div>

        <div ref={produkRef}><Produk /></div>
        <div ref={strukturRef}><StrukturJob /></div>

        <div ref={lokasiRef}><Lokasi /></div>          {/* ✅ Lokasi scroll */}
        <div ref={blogRef}><BlogSection /></div>      {/* ✅ Blog scroll */}

        <div ref={kontakRef}><Footer /></div>
      </main>
    </>
  );
}
