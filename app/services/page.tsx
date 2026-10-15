import Link from "next/link";
import { ArrowRight, Package, Award, Ship, Globe } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: "Private Label Customization",
      desc: "Your brand, our manufacturing — complete private label solutions.",
    },
    {
      icon: Award,
      title: "Retail & Custom Packaging",
      desc: "Custom packaging options tailored to your retail needs.",
    },
    {
      icon: Ship,
      title: "Fast Delivery",
      desc: "10–15 days production time with reliable worldwide shipping.",
    },
    {
      icon: Globe,
      title: "Small MOQ Accepted",
      desc: "We support startups and small businesses with low MOQs.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
            Our Services
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#0a1a38] sm:text-5xl">
            What We Offer
          </h1>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
            >
              <item.icon className="mb-4 h-10 w-10 text-[#d4a017]" />
              <h3 className="font-serif text-lg font-bold text-[#0a1a38]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a1a38] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#142a52]"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}