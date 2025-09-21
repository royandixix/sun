"use client";

// import HeroSection from "./home/components/header/HeroSection";
import Penjelasan from "./home/components/conten/penjelasan";
import ProfilPerusahaan from "./home/components/conten/ProfilPerusahaan";
import Visimisi from "./home/components/conten/Visimisi";
import Example from "./home/components/header/Hero";
import BlogSection from "./home/blog/BlogSection";
import Footer from "./home/components/footer/footer";
import FeatureSection from "./home/components/conten/produk";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Example />
      <Penjelasan />
      {/* <HeroSection /> */}
      <Visimisi />
      <ProfilPerusahaan />
      <FeatureSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
