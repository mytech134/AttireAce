import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function QualityPage() {
  const points = [
    "GOAT Certified high-quality cotton",
    "Multi-stage quality control before shipment",
    "Premium stitching and finishing standards",
    "Color-fast and shrink-resistant fabrics",
    "Export-grade packaging and labeling",
    "Compliance with international standards",
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
          Quality Assurance
        </span>
        <h1 className="font-serif text-4xl font-bold text-[#0a1a38] sm:text-5xl">
          Unmatched Quality, Every Time
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gray-600">
          At Attire Ace Apparels, quality is at the core of everything we do. 
          With GOAT certification for high-quality cotton and strict multi-stage 
          quality control, we ensure every garment meets international standards.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d4a017]" />
              <span className="text-sm text-gray-700">{point}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0a1a38] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#142a52]"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}