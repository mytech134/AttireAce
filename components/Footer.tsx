import Link from "next/link";
import { Ship, Mail, Phone, MapPin} from "lucide-react";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/categories", label: "Categories" },
  { href: "/collections", label: "Collections" },
  { href: "/services", label: "Import & Export" },
  { href: "/quality", label: "Quality Assurance" },
  { href: "/global-markets", label: "Global Markets" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1a38] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Ship className="h-7 w-7 text-[#d4a017]" />
              <span className="text-xl font-bold">
                Attire<span className="text-[#d4a017]">Ace</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold uppercase transition hover:bg-[#d4a017] hover:text-[#0a1a38]"
              >
                in
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold uppercase transition hover:bg-[#d4a017] hover:text-[#0a1a38]"
              >
                fb
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold uppercase transition hover:bg-[#d4a017] hover:text-[#0a1a38]"
              >
                ig
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4a017]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition hover:text-[#d4a017]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4a017]">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="text-white/70 transition hover:text-[#d4a017]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4a017]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4a017]" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#d4a017]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#d4a017]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#d4a017]" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-[#d4a017]"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 {siteConfig.name}. Developed by Umaish.
        </div>
      </div>
    </footer>
  );
}