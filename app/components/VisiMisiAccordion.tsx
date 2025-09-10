"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function VisiMisiAccordion() {
  return (
    <div className="mt-16 max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
        Visi & Misi
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full border rounded-xl shadow-sm bg-white/70 backdrop-blur-md"
        defaultValue="visi"
      >
        {/* Visi */}
        <AccordionItem value="visi">
          <AccordionTrigger className="text-lg font-semibold">
            Visi Kami
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-600 leading-relaxed">
            <p>
              Menjadi jaringan utilitas terpadu yang inovatif dan berkelanjutan,
              menghadirkan solusi energi, teknologi, dan layanan publik yang
              mendukung kehidupan masyarakat modern.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Misi */}
        <AccordionItem value="misi">
          <AccordionTrigger className="text-lg font-semibold">
            Misi Kami
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-600 leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Memberikan layanan utilitas dengan kualitas tinggi, terjangkau,
                dan ramah lingkungan.
              </li>
              <li>
                Mengintegrasikan teknologi cerdas untuk meningkatkan efisiensi
                dan kenyamanan pengguna.
              </li>
              <li>
                Membangun ekosistem energi bersih yang mendukung keberlanjutan
                jangka panjang.
              </li>
              <li>
                Berkolaborasi dengan berbagai pihak demi kemajuan masyarakat dan
                lingkungan.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
