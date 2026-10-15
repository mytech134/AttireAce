import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Product Categories",
  description:
    "Explore our full range of export categories — textiles, apparel, leather, agriculture, surgical instruments, and more.",
};

export default function CategoriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0a1a38] py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
            Our Categories
          </span>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            Product <span className="text-[#d4a017]">Categories</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Nine core verticals. One trusted export partner. Explore our
            full catalogue of wholesale-ready products.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-bold text-[#0a1a38]">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">{c.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#d4a017]">
                    View Collection <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}