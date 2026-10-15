import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const categories = [
  { slug: "knitwear", name: "Knitwear", desc: "Premium knitted garments for global markets." },
  { slug: "denim", name: "Denim", desc: "High-quality denim and jeans manufacturing." },
  { slug: "activewear", name: "Activewear", desc: "Performance sportswear and gym apparel." },
  { slug: "home-textiles", name: "Home Textiles", desc: "Bedding, towels, and home fabrics." },
  { slug: "womens-wear", name: "Women's Wear", desc: "Fashion-forward women's apparel." },
  { slug: "mens-wear", name: "Men's Wear", desc: "Classic and modern men's clothing." },
];

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };
  return { title: cat.name, description: cat.desc };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#d4a017]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Collections
        </Link>

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-[#0a1a38]">
          {category.name}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">{category.desc}</p>

        <div className="mt-12 p-12 rounded-2xl bg-[#f0f4fa] border border-gray-200 text-center">
          <p className="text-gray-600">
            Products for <strong>{category.name}</strong> will be listed here soon.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-8 py-3 rounded-full bg-[#d4a017] text-[#0a1a38] font-semibold uppercase tracking-wider hover:bg-[#e9be33] transition"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}