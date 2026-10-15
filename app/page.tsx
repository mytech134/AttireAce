import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Package, Award, Ship } from "lucide-react";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80"
            alt="Attire Ace Apparels - Sportswear Manufacturing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a38]/95 via-[#0a1a38]/80 to-[#0a1a38]/60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-[#d4a017]/40 bg-[#d4a017]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
              Manufacturer & Exporter of Sportswear
            </span>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Premium Sportswear &{" "}
              <span className="text-[#d4a017]">Custom Apparel Solutions</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Attire Ace Apparels is a trusted manufacturer of sports wear, 
              cotton wear, and custom apparel. With GOAT certification for 
              high-quality cotton, we deliver unmatched quality at competitive prices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a017] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1a38] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9be33] hover:shadow-xl"
              >
                Explore Collections <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0a1a38]"
              >
                Our Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-[#0a1a38] py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-[#d4a017] sm:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-white/70 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY INTRO ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#0a1a38] sm:text-4xl lg:text-5xl">
              Trusted Manufacturer of Sportswear & Custom Apparel
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Attire Ace Apparels has been a trusted name in premium sportswear 
              manufacturing. We specialize in Soccer Ball Wear, Basketball Wear, 
              Training Wear, Cotton Wear, Sport Apparel, Football Ball Wear, 
              Rugby Wear, GAA Wear, Hoodies & Casual Wear, and Sports Bags.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Whether you&apos;re outfitting a team, launching your brand, or 
              scaling your retail business — we offer Private Label Customization, 
              Retail & Custom Packaging, Fast Delivery (10–15 Days Production Time), 
              Small MOQ Acceptance, and Unmatched Quality at Competitive Prices.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#0a1a38] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1a38] transition-all hover:bg-[#0a1a38] hover:text-white"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
              alt="Attire Ace Apparels warehouse and logistics"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="bg-[#f0f4fa] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
              Our Categories
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0a1a38] sm:text-4xl lg:text-5xl">
              Explore Our Apparel Range
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="group relative h-64 overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a38] via-[#0a1a38]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{c.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#d4a017]">
                    View Collection <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
              Featured Products
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0a1a38] sm:text-4xl lg:text-5xl">
              Best of Our Catalogue
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
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
                  <h3 className="font-serif text-lg font-bold text-[#0a1a38]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{p.short}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#d4a017]">
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-full bg-[#0a1a38] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#142a52]"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#0a1a38] py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Built for Global Apparel Buyers
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe,
                title: "GOAT Certified Cotton",
                desc: "Certified high-quality cotton ensuring premium comfort and durability.",
              },
              {
                icon: Package,
                title: "Small MOQ Accepted",
                desc: "We support startups and small businesses with low minimum order quantities.",
              },
              {
                icon: Award,
                title: "Private Label & Custom",
                desc: "Complete customization with retail and custom packaging options.",
              },
              {
                icon: Ship,
                title: "Fast Delivery",
                desc: "10–15 days production time with reliable worldwide shipping.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-[#d4a017]/40 hover:bg-white/10"
              >
                <item.icon className="mb-4 h-10 w-10 text-[#d4a017]" />
                <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#d4a017] py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:px-12 lg:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#0a1a38] sm:text-3xl">
              Ready to Start Your Custom Apparel Order?
            </h2>
            <p className="mt-2 text-[#0a1a38]/80">
              Get in touch for a quote tailored to your requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a1a38] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#142a52]"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}