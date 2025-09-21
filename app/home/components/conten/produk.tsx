"use client";

import React from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureItem[] = [
  {
    title: "Mudah Diterapkan",
    description:
      "Produk kami dirancang agar mudah diintegrasikan ke sistem Anda dengan cepat.",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-indigo-500 flex-none mt-1"
      >
        <path
          d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Keamanan Terjamin",
    description:
      "Dilengkapi dengan sertifikat SSL dan standar keamanan tinggi.",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-indigo-500 flex-none mt-1"
      >
        <path
          d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Backup Otomatis",
    description:
      "Data Anda aman dengan backup otomatis yang berjalan setiap hari.",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-indigo-500 flex-none mt-1"
      >
        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
        <path
          d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
];

const ProductPage: React.FC = () => {
  const products = [
    { id: 1, name: "Produk A", image: "/img/product1.jpg" },
    { id: 2, name: "Produk B", image: "/img/product2.jpg" },
    { id: 3, name: "Produk C", image: "/img/product3.jpg" },
    { id: 4, name: "Produk D", image: "/img/product4.jpg" },
    { id: 5, name: "Produk E", image: "/img/product5.jpg" },
  ];

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <div className="mb-16 max-w-3xl relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 inline-block">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Produk
            </span>{" "}
            unggulan kami
          </h1>
          {/* Underline */}
          <span className="absolute -bottom-2 left-0 w-28 h-1 bg-indigo-500 rounded-full"></span>

          <p className="mt-6 text-lg text-gray-600">
            Temukan produk terbaik kami yang dirancang untuk mendukung bisnis
            Anda agar lebih efisien, aman, dan berkembang pesat.
          </p>
        </div>

        {/* Produk Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-900 font-semibold text-lg">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  {product.name} adalah solusi modern untuk mendukung kebutuhan
                  bisnis Anda.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button Selengkapnya */}
        <div className="mt-14 flex justify-center lg:justify-start mb-2">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <span>Baca Semua Artikel SUN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Feature List */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
            Kenapa memilih produk kami?
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <ul role="list" className="space-y-6 text-gray-600">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-x-3">
                {feature.icon}
                <span>
                  <strong className="font-semibold text-gray-900">
                    {feature.title}
                  </strong>{" "}
                  {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
