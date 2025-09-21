"use client";

type Post = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
};

const posts: Post[] = [
  {
    id: 1,
    title: "Membangun Jaringan Sinergi untuk Masa Depan",
    href: "#",
    description:
      "SUN Network berkomitmen menghadirkan solusi jaringan terpadu yang mendukung transformasi digital dan kolaborasi lintas industri.",
    date: "21 Sep 2025",
    datetime: "2025-09-21",
    category: { title: "Inovasi", href: "#" },
    author: {
      name: "Tim SUN Network",
      role: "Redaksi",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Digitalisasi Utility: Efisiensi dan Keberlanjutan",
    href: "#",
    description:
      "Dengan platform Synergy Utility Network, kami membantu perusahaan mengelola energi dan sumber daya secara lebih cerdas, efisien, dan berkelanjutan.",
    date: "15 Sep 2025",
    datetime: "2025-09-15",
    category: { title: "Teknologi", href: "#" },
    author: {
      name: "SUN Innovation Lab",
      role: "Divisi Riset",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Kolaborasi Global untuk Ekspansi SUN Network",
    href: "#",
    description:
      "SUN Network memperluas jangkauan layanan dengan bermitra bersama perusahaan internasional, menciptakan sinergi global yang bermanfaat untuk pelanggan.",
    date: "5 Sep 2025",
    datetime: "2025-09-05",
    category: { title: "Bisnis", href: "#" },
    author: {
      name: "Global Team SUN",
      role: "Partnership Division",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-50" />
      <div className="absolute inset-0 -z-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_20px)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl tracking-tight font-semibold">
            <span className="text-gray-900">Blog </span>
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              SUN Network
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-700 max-w-xl">
            Insight dan berita terbaru seputar Synergy Utility Network – inovasi, kolaborasi, dan transformasi digital di Indonesia maupun global.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="rounded-full bg-indigo-100/50 px-3 py-1.5 font-medium text-indigo-700 hover:bg-indigo-200"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative grow mt-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm text-gray-600">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-6 flex items-center gap-x-4">
                <img
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-200"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-gray-500">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
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
          </div>
        </div>
      </div>
    </div>
  );
}
