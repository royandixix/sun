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
// import Produk from "./home/components/conten/Produk";
import Prodak from "./home/components/conten/Prodak";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tentangRef = useRef<HTMLDivElement>(null);
  const produkRef = useRef<HTMLDivElement>(null);
  const prdakRef = useRef<HTMLDivElement>(null);
  const portofolioRef = useRef<HTMLDivElement>(null);
  const strukturRef = useRef<HTMLDivElement>(null);
  const lokasiRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);

  // Scroll functions
  const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToTentangKami = () => tentangRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProduk = () => produkRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProdak = () => prdakRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPortofolio = () => portofolioRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToStrukturJob = () => strukturRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToLokasi = () => lokasiRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToBlog = () => blogRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToKontak = () => kontakRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar
        onHomeClick={scrollToHero}
        onTentangClick={scrollToTentangKami}
        onProdakClick={scrollToProdak} // ✅ Navbar scroll ke Prodak
        onPortofolioClick={scrollToPortofolio}
        onStrukturJobClick={scrollToStrukturJob}
        onLokasiClick={scrollToLokasi}
        onBlogClick={scrollToBlog}
        onKontakClick={scrollToKontak}
      />

      <main className="overflow-x-hidden">
        <div ref={heroRef}><Example /></div>
        <div ref={tentangRef}><TentangKami /></div>

        <div ref={portofolioRef}>
          <Portofolio2 />
          <Portofolio />
        </div>

        {/* <div ref={produkRef}><Produk /></div> */}
        <div ref={prdakRef}><Prodak /></div> {/* ✅ Section Prodak */}
        <div ref={strukturRef}><StrukturJob /></div>
        <div ref={lokasiRef}><Lokasi /></div>
        <div ref={blogRef}><BlogSection /></div>
        <div ref={kontakRef}><Footer /></div>
      </main>
    </>
  );
}
