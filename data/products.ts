export type Product = {
  slug: string;
  name: string;
  category: string;
  short: string;
  image: string;
  moq: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ===== Soccer Ball Wear =====
  {
    slug: "custom-soccer-jerseys",
    name: "Custom Soccer Jerseys",
    category: "soccer-ball-wear",
    short: "Sublimated team jerseys with full branding options.",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
    moq: "300 pcs",
    featured: true,
  },
  {
    slug: "soccer-match-kits",
    name: "Soccer Match Kits",
    category: "soccer-ball-wear",
    short: "Complete jersey + shorts sets for teams.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
    moq: "300 sets",
  },
  {
    slug: "soccer-training-bibs",
    name: "Soccer Training Bibs",
    category: "soccer-ball-wear",
    short: "Lightweight mesh training bibs in bulk.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80",
    moq: "500 pcs",
  },

  // ===== Basketball Wear =====
  {
    slug: "basketball-jerseys-shorts",
    name: "Basketball Jerseys & Shorts",
    category: "basketball-wear",
    short: "Breathable performance kits for teams.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
    moq: "300 sets",
    featured: true,
  },
  {
    slug: "basketball-warmups",
    name: "Basketball Warm-Up Suits",
    category: "basketball-wear",
    short: "Full-zip warm-ups with custom team logos.",
    image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=1200&q=80",
    moq: "200 sets",
  },

  // ===== Training Wear =====
  {
    slug: "performance-training-kit",
    name: "Performance Training Kit",
    category: "training-wear",
    short: "Moisture-wicking polyester-elastane sets.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    moq: "500 sets",
    featured: true,
  },
  {
    slug: "gym-compression-wear",
    name: "Gym Compression Wear",
    category: "training-wear",
    short: "Four-way stretch compression tops & tights.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    moq: "500 pcs",
  },
  {
    slug: "training-shorts",
    name: "Training Shorts",
    category: "training-wear",
    short: "Lightweight quick-dry athletic shorts.",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80",
    moq: "600 pcs",
  },

  // ===== Cotton Wear =====
  {
    slug: "goat-certified-cotton-tshirts",
    name: "GOAT Certified Cotton T-Shirts",
    category: "cotton-wear",
    short: "Premium 180gsm GOAT-certified cotton tees.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
    moq: "1,000 pcs",
    featured: true,
  },
  {
    slug: "cotton-polo-shirts",
    name: "Cotton Polo Shirts",
    category: "cotton-wear",
    short: "Pique cotton polos with custom embroidery.",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1200&q=80",
    moq: "500 pcs",
  },
  {
    slug: "cotton-tank-tops",
    name: "Cotton Tank Tops",
    category: "cotton-wear",
    short: "Soft combed cotton tank tops in bulk.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=80",
    moq: "800 pcs",
  },

  // ===== Sport Apparel =====
  {
    slug: "all-sport-team-uniforms",
    name: "All-Sport Team Uniforms",
    category: "sport-apparel",
    short: "Custom uniforms for any sport, any team.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
    moq: "300 sets",
    featured: true,
  },
  {
    slug: "sports-track-suits",
    name: "Sports Track Suits",
    category: "sport-apparel",
    short: "Full tracksuits with sublimated designs.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
    moq: "300 sets",
  },

  // ===== Football Ball Wear =====
  {
    slug: "american-football-jerseys",
    name: "American Football Jerseys",
    category: "football-ball-wear",
    short: "Heavy-duty padded football jerseys.",
     image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&q=80",
    moq: "200 pcs",
    featured: true,
  },
  {
    slug: "football-pants-pads",
    name: "Football Pants & Pads",
    category: "football-ball-wear",
    short: "Integrated pad pockets, durable stitching.",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&q=80",
    moq: "200 pcs",
  },

  // ===== Rugby Wear =====
  {
    slug: "rugby-team-jerseys",
    name: "Rugby Team Jerseys",
    category: "rugby-wear",
    short: "Heavyweight rugby jerseys built to last.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80",
    moq: "300 pcs",
    featured: true,
  },
  {
    slug: "rugby-shorts",
    name: "Rugby Shorts",
    category: "rugby-wear",
    short: "Reinforced rugby shorts for match play.",
    image: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=1200&q=80",
    moq: "300 pcs",
  },

  // ===== GAA Wear =====
  {
    slug: "gaa-jerseys",
    name: "GAA Jerseys",
    category: "gaa-wear",
    short: "Official-style Gaelic jerseys, custom colors.",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=1200&q=80",
    moq: "300 pcs",
    featured: true,
  },
  {
    slug: "gaa-shorts",
    name: "GAA Shorts",
    category: "gaa-wear",
    short: "Lightweight GAA match shorts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    moq: "300 pcs",
  },

  // ===== Hoodies & Casual Wear =====
  {
    slug: "custom-printed-hoodies",
    name: "Custom Printed Hoodies",
    category: "hoodies-casual-wear",
    short: "Screen print, DTG, or embroidered hoodies.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80",
    moq: "500 pcs",
    featured: true,
  },
  {
    slug: "zip-up-hoodies",
    name: "Zip-Up Hoodies",
    category: "hoodies-casual-wear",
    short: "Full-zip fleece hoodies in bulk.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=80",
    moq: "500 pcs",
  },
  {
    slug: "casual-sweatshirts",
    name: "Casual Sweatshirts",
    category: "hoodies-casual-wear",
    short: "Soft fleece crewneck sweatshirts.",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200&q=80",
    moq: "500 pcs",
  },

  // ===== Sports Bags =====
  {
    slug: "custom-sports-duffel-bags",
    name: "Custom Sports Duffel Bags",
    category: "sports-bags",
    short: "Heavy-duty duffel bags with team branding.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
    moq: "300 pcs",
    featured: true,
  },
  {
    slug: "sports-backpacks",
    name: "Sports Backpacks",
    category: "sports-bags",
    short: "Athletic backpacks with custom logos.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
    moq: "300 pcs",
  },
  {
    slug: "gym-drawstring-bags",
    name: "Gym Drawstring Bags",
    category: "sports-bags",
    short: "Lightweight drawstring gym sacks.",
    image: "https://images.unsplash.com/photo-1591290619762-c58831e6c5f0?w=1200&q=80",
    moq: "1,000 pcs",
  },
];