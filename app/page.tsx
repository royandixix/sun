"use client";

import HeroSection from "./components/header/HeroSection";
import { VisiMisiAccordion } from "./components/VisiMisiAccordion";
import { Profilperusahaan } from "./components/conten/Profilperusahaan";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <Profilperusahaan />
      <VisiMisiAccordion />
    </main>
  );
}
