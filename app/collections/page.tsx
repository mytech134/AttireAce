import Link from "next/link";

const collections = [
  { slug: "knitwear", name: "Knitwear" },
  { slug: "denim", name: "Denim" },
  { slug: "activewear", name: "Activewear" },
  { slug: "home-textiles", name: "Home Textiles" },
  { slug: "womens-wear", name: "Women's Wear" },
  { slug: "mens-wear", name: "Men's Wear" },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0a1a38]">Our Collections</h1>
        <p className="mt-4 text-gray-600">
          Explore our premium apparel collections, exported worldwide.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="block p-8 rounded-2xl border border-gray-200 hover:border-[#d4a017] hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-[#0a1a38]">{c.name}</h2>
              <p className="mt-2 text-sm text-gray-500">View collection →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}