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
  // Textiles & Apparel
  {
    slug: "premium-cotton-bedlinen",
    name: "Premium Cotton Bedlinen Set",
    category: "textiles-apparel",
    short: "300TC combed cotton, sateen finish.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80",
    moq: "500 sets",
    featured: true,
  },
  {
    slug: "organic-cotton-tshirts",
    name: "Organic Cotton T-Shirts",
    category: "textiles-apparel",
    short: "180gsm organic cotton, custom prints.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
    moq: "1,000 pcs",
    featured: true,
  },
  {
    slug: "woven-cotton-fabric",
    name: "Woven Cotton Fabric Rolls",
    category: "textiles-apparel",
    short: "Export-grade cotton fabric in bulk rolls.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
    moq: "5,000 meters",
  },

  // Fashion & Garments
  {
    slug: "private-label-denim-jackets",
    name: "Private-Label Denim Jackets",
    category: "fashion-garments",
    short: "Heavyweight 12oz denim, custom washes.",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80",
    moq: "300 pcs",
    featured: true,
  },
  {
    slug: "designer-summer-dresses",
    name: "Designer Summer Dresses",
    category: "fashion-garments",
    short: "Lightweight fabrics, trend-led silhouettes.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
    moq: "500 pcs",
    featured: true,
  },
  {
    slug: "womens-blouses",
    name: "Women's Casual Blouses",
    category: "fashion-garments",
    short: "Viscose and cotton blends, custom sizing.",
    image: "https://images.unsplash.com/photo-1564257577054-58ab8e2c8e88?w=1200&q=80",
    moq: "800 pcs",
  },

  // Sportswear & Activewear
  {
    slug: "performance-training-kit",
    name: "Performance Training Kit",
    category: "sportswear-activewear",
    short: "Moisture-wicking polyester-elastane.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    moq: "500 sets",
    featured: true,
  },
  {
    slug: "team-jerseys",
    name: "Custom Team Jerseys",
    category: "sportswear-activewear",
    short: "Sublimated designs, full team branding.",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
    moq: "300 pcs",
  },
  {
    slug: "yoga-leggings",
    name: "Yoga & Gym Leggings",
    category: "sportswear-activewear",
    short: "Four-way stretch, high-waist fit.",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80",
    moq: "600 pcs",
  },

  // Leather Apparel
  {
    slug: "full-grain-leather-jacket",
    name: "Full-Grain Leather Jacket",
    category: "leather-apparel",
    short: "Hand-finished genuine cowhide.",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=1200&q=80",
    moq: "100 pcs",
    featured: true,
  },
  {
    slug: "leather-bomber-coat",
    name: "Leather Bomber Coat",
    category: "leather-apparel",
    short: "Quilted lining, premium YKK zippers.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80",
    moq: "150 pcs",
  },

  // Knitwear & Sweaters
  {
    slug: "cashmere-blend-sweaters",
    name: "Cashmere Blend Sweaters",
    category: "knitwear-sweaters",
    short: "Soft-touch cashmere-wool blend.",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=1200&q=80",
    moq: "400 pcs",
    featured: true,
  },
  {
    slug: "knitted-cardigans",
    name: "Knitted Cardigans",
    category: "knitwear-sweaters",
    short: "Classic and oversized styles.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80",
    moq: "500 pcs",
  },

  // Denim & Casual Wear
  {
    slug: "mens-slim-fit-jeans",
    name: "Men's Slim-Fit Jeans",
    category: "denim-casual-wear",
    short: "Stretch denim, custom washes.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80",
    moq: "600 pcs",
    featured: true,
  },
  {
    slug: "casual-chino-pants",
    name: "Casual Chino Pants",
    category: "denim-casual-wear",
    short: "Cotton-twill, multiple colourways.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80",
    moq: "500 pcs",
  },

  // Formal & Business Wear
  {
    slug: "mens-formal-suits",
    name: "Men's Formal Suits",
    category: "formal-business-wear",
    short: "Two-piece wool-blend suits.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
    moq: "200 sets",
    featured: true,
  },
  {
    slug: "corporate-uniform-shirts",
    name: "Corporate Uniform Shirts",
    category: "formal-business-wear",
    short: "Custom logo embroidery available.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80",
    moq: "1,000 pcs",
  },

  // Home Textiles
  {
    slug: "luxury-bath-towels",
    name: "Luxury Bath Towels",
    category: "home-textiles",
    short: "600gsm Egyptian cotton.",
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?w=1200&q=80",
    moq: "1,000 pcs",
    featured: true,
  },
  {
    slug: "cotton-throw-blankets",
    name: "Cotton Throw Blankets",
    category: "home-textiles",
    short: "Woven cotton, tasselled edges.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
    moq: "500 pcs",
  },

  // Kids & Baby
  {
    slug: "organic-baby-bodysuits",
    name: "Organic Baby Bodysuits",
    category: "kids-baby-clothing",
    short: "GOTS-certified organic cotton.",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=1200&q=80",
    moq: "1,000 pcs",
    featured: true,
  },
  {
    slug: "kids-play-sets",
    name: "Kids Play Sets",
    category: "kids-baby-clothing",
    short: "Comfortable, durable, bright colours.",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=1200&q=80",
    moq: "800 sets",
  },

  // Customized
  {
    slug: "oem-private-label-apparel",
    name: "OEM / Private-Label Apparel",
    category: "customized-products",
    short: "Your brand, our end-to-end sourcing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    moq: "Project-based",
    featured: true,
  },
  {
    slug: "custom-printed-hoodies",
    name: "Custom Printed Hoodies",
    category: "customized-products",
    short: "Screen print, DTG, or embroidered.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80",
    moq: "500 pcs",
  },
];