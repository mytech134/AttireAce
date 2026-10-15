import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export const metadata = {
  title: "Products",
  description: "Browse our full catalogue of export-ready products.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1a38] py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
            Catalogue
          </span>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            Our <span className="text-[#d4a017]">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Wholesale-ready products across all our export categories. Every
            product is customizable and quote-based.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              return (
                <div
                  key={p.slug}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017]">
                      
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold text-[#0a1a38]">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{p.short}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      MOQ: {p.moq}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <Link
                        href={`/products/${p.slug}`}
                        className="flex-1 rounded-full border border-[#0a1a38] py-2 text-center text-xs font-semibold uppercase tracking-wider text-[#0a1a38] transition hover:bg-[#0a1a38] hover:text-white"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 rounded-full bg-[#d4a017] py-2 text-center text-xs font-semibold uppercase tracking-wider text-[#0a1a38] transition hover:bg-[#e9be33]"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}