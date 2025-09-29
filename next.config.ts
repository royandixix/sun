const nextConfig = {
  images: {
    domains: ["tailwindcss.com", "images.pexels.com", "source.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        pathname: "/plus-assets/img/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
