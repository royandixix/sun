import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "./home/components/Navbar/Navbar"

// Geist font (asli dari kode kamu)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Tambahan: Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Synergy Utility Network",
  description: "Next.js App with Navbar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <head>
        {/* Vendor CSS */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* Custom CSS */}
        <link href="/assets/css/main.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        {/* Navbar tetap ada */}
        <Navbar />
        <main className="pt-16">{children}</main>

        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Preloader */}
        <div id="preloader"></div>

        {/* Vendor JS */}
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/php-email-form/validate.js"></script>
        <script src="/assets/vendor/aos/aos.js"></script>
        <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

        {/* Custom JS */}
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  )
}
