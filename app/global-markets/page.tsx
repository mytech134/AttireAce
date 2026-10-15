import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export default function GlobalMarketsPage() {
  const markets = [
    { region: "North America", countries: "USA, Canada, Mexico" },
    { region: "Europe", countries: "UK, Germany, France, Spain, Italy" },
    { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
    { region: "Australia & NZ", countries: "Australia, New Zealand" },
    { region: "Asia", countries: "Japan, Singapore, Malaysia" },
    { region: "Africa", countries: "South Africa, Egypt, Nigeria" },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
            Global Reach
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#0a1a38] sm:text-5xl">
            Serving Buyers Worldwide
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
            Attire Ace Apparels serves apparel buyers across multiple continents 
            with reliable logistics and on-time delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <div
              key={m.region}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
            >
              <Globe className="mb-4 h-8 w-8 text-[#d4a017]" />
              <h3 className="font-serif text-lg font-bold text-[#0a1a38]">
                {m.region}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{m.countries}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a1a38] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#142a52]"
          >
            Become a Partner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}