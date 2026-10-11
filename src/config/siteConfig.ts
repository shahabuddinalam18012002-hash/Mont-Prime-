import { Product } from '../types';

// Image assets generated for MONT PRIME
export const IMAGES = {
  hero: '/src/assets/images/hero_wallets_collection_1791690533917.jpg',
  wallets: '/src/assets/images/category_mens_wallets_1791690548262.jpg',
  purses: '/src/assets/images/category_mens_purses_1791690557809.jpg',
  cardHolders: '/src/assets/images/category_card_holders_1791690571420.jpg',
  craftsmanship: '/src/assets/images/craftsmanship_stitching_1791690581516.jpg',
};

export const SITE_CONFIG = {
  brandName: 'MONT PRIME',
  tagline: 'Crafted for Everyday Elegance.',
  supportingMessage: 'Premium Style. Timeless Confidence.',
  description:
    "Discover a refined collection of men's wallets, purses, and card holders designed for everyday style and presented with a premium brand experience.",

  // Central contact configuration (Easily editable by business owner)
  contact: {
    // Official WhatsApp number in pure international format without '+' or spaces (e.g., 919973986235)
    whatsAppNumber: '919973986235',
    displayWhatsApp: '+91 99739 86235',

    // Official Mobile / Phone
    phone: '+91 99739 86235',

    // Official Email
    email: 'montprimesupport@gmail.com',
    enquiryEmail: 'montprimesupport@gmail.com',

    // Physical / Commercial Address
    address: 'At Kotwa Near Ramjanki math, Plot 3585, Pin 845437, Bihar, India',
    city: 'Kotwa',
    state: 'Bihar',
    country: 'India',
    pincode: '845437',

    // Operating hours
    businessHours: 'Monday – Saturday: 10:00 AM – 7:00 PM IST',

    // Social Links
    instagram: 'https://instagram.com/montprime.official',
    linkedin: 'https://linkedin.com/company/montprime',

    // Maps embed / link
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Kotwa+Near+Ramjanki+math+Plot+3585+845437&t=&z=14&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectLink: 'https://maps.google.com/?q=Kotwa+Near+Ramjanki+math+Plot+3585+845437',
  },
};

/**
 * Builds an official WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = SITE_CONFIG.contact.whatsAppNumber.replace(/[^0-9]/g, '');
  const defaultMsg = `Hello MONT PRIME, I am interested in discussing wholesale and retail opportunities for your collection.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Builds a product-specific WhatsApp enquiry message
 */
export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hello MONT PRIME, I would like to enquire about ${productName}. Please share the product details and wholesale availability.`;
  return getWhatsAppUrl(message);
}

export const PRODUCTS_CATALOG: Product[] = [
  // --- MEN'S WALLETS ---
  {
    id: 'mp-w01',
    name: 'The Sovereign Classic Bifold',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Full-Profile Bifold with Dual Currency Section',
    description:
      'A timeless classic engineered for everyday utility. Features reinforced perimeter stitching, eight precision-cut card slots, two concealed receipt slip pockets, and dual full-length currency dividers.',
    image: IMAGES.wallets,
    dimensions: '11.5 cm x 9.2 cm x 1.4 cm',
    material: 'Full-Grain Textured Finish with Subtle Matte Sheen',
    compartments: '8 Card Slots, 2 Cash Dividers, 2 Slip Pockets',
    availableColors: ['Classic Jet Black', 'Deep Espresso Brown'],
    features: [
      'Precision edge burnishing and sealed wax edges',
      'Dual currency compartment accommodating international notes',
      'Integrated RFID protective lining',
      'Ultra-flat fold profile designed for suit or trouser pocket',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-w02',
    name: 'The Ambassador Slim Fold',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Streamlined Bifold for Modern Professionals',
    description:
      'Designed for individuals who value compact dimensions without compromising capacity. Features quick-access thumb slots for primary cards and an optimized slim spine.',
    image: IMAGES.hero,
    dimensions: '10.8 cm x 8.8 cm x 1.1 cm',
    material: 'Supple Micro-Grain Leatherette / Fine Grain Finish',
    compartments: '6 Card Slots, 1 Currency Pocket, 2 Hidden Pockets',
    availableColors: ['Obsidian Black', 'Cognac Tan'],
    features: [
      'Ergonomic chamfered card entry angles',
      'Single-layer fold spine for minimal pocket bulk',
      'High-tensile nylon bonded thread',
      'Discreet embossed interior wordmark',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-w03',
    name: 'The Executive Coin-Pocket Wallet',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Functional Bifold with Concealed Snap Coin Section',
    description:
      'Engineered for comprehensive daily organization. Combines five dedicated card slots with an expandable snap-closure coin pocket and deep billfold.',
    image: IMAGES.wallets,
    dimensions: '11.8 cm x 9.5 cm x 1.8 cm',
    material: 'Textured Pebble Finish with Reinforced Interior Lining',
    compartments: '5 Card Slots, 1 Snap Coin Pocket, 2 Currency Bays',
    availableColors: ['Satin Black', 'Deep Charcoal'],
    features: [
      'Gently curved flap for coin pocket with secure brass press-snap',
      'Reinforced gusset prevents coin spillage',
      'Smooth micro-twill currency lining',
      'Edge-folded perimeter seams',
    ],
  },

  // --- MEN'S PURSES / TRAVEL ORGANIZERS ---
  {
    id: 'mp-p01',
    name: 'The Continental Zip-Around Travel Purse',
    category: 'purses',
    categoryLabel: "Men's Purses",
    subtitle: 'Full Zip Continental Organizer for Travel & Documents',
    description:
      'A prestigious long-format organizer designed to secure boarding passes, currency notes, multiple cards, passport, and executive smartphone in one seamless case.',
    image: IMAGES.purses,
    dimensions: '20.5 cm x 11.2 cm x 2.4 cm',
    material: 'Burnished Pull-Up Grain Texture with Antique Brass Hardware',
    compartments: '12 Card Slots, 1 Center Zip Coin Compartment, 3 Full-Length Note Bays',
    availableColors: ['Deep Chocolate Brown', 'Matte Black'],
    features: [
      'Heavy-duty smooth glide metallic zipper with leather pull',
      'Full 180-degree flat opening for effortless airport and business access',
      'Dedicated central zip partition for keys, coins, or SIM cards',
      'Removable wrist strap loop for versatile carrying',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-p02',
    name: 'The Meridian Slim Clutch Organizer',
    category: 'purses',
    categoryLabel: "Men's Purses",
    subtitle: 'Minimalist Hand Purse for Currency and Documents',
    description:
      'Tailored for the contemporary business traveler. Streamlined silhouette with two zippered chambers and rapid-access magnetic closure pocket.',
    image: IMAGES.purses,
    dimensions: '19.8 cm x 10.5 cm x 2.0 cm',
    material: 'Cross-Hatch Textured Durable Finish',
    compartments: '8 Card Slots, Dual Main Compartments, Pen Holder Loop',
    availableColors: ['Jet Black', 'Rich Mahogany'],
    features: [
      'Reinforced corner structure prevents deformation under daily handling',
      'Discreet integrated pen sleeve for executive signing',
      'RFID protective shield across all internal chambers',
      'Refined gunmetal alloy zip sliders',
    ],
  },

  // --- CARD HOLDERS ---
  {
    id: 'mp-c01',
    name: 'The Apex Minimalist Card Case',
    category: 'card_holders',
    categoryLabel: 'Card Holders',
    subtitle: 'Ultra-Slim Front Pocket Card Sleeve with Center Slot',
    description:
      'The definitive minimalist profile. Designed to carry 4–6 vital cards and folded currency notes with zero front-pocket imprint.',
    image: IMAGES.cardHolders,
    dimensions: '10.2 cm x 7.6 cm x 0.4 cm',
    material: 'Matte Fine-Grain Finish with Smooth Polished Edges',
    compartments: '4 Exterior Card Slots, 1 Center Multi-Use Slip Pocket',
    availableColors: ['Matte Obsidian Black', 'Espresso Brown'],
    features: [
      'Curved ergonomic thumb cutout for instant top card release',
      'Featherweight build (under 28 grams unloaded)',
      'Triple-sealed painted edge finish for maximum longevity',
      'Full RFID blocking lining protects cards against electronic skimmers',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-c02',
    name: 'The Vanguard Accordion Card Wallet',
    category: 'card_holders',
    categoryLabel: 'Card Holders',
    subtitle: 'Expandable Multi-Card Organizer with Zip Closure',
    description:
      'Compact footprint with an expandable concertina structure. Stores up to 12 cards neatly sorted with instant visibility upon unzipping.',
    image: IMAGES.cardHolders,
    dimensions: '11.0 cm x 8.0 cm x 2.2 cm',
    material: 'Deep Textured Grain with Scratch-Resistant Coating',
    compartments: '9 Fan-Fold Card Slots, 2 Peripheral Folded-Cash Slots',
    availableColors: ['Midnight Black', 'Vintage Saddle Tan'],
    features: [
      'Accordion-fold architecture for rapid card indexing and retrieval',
      'Perimeter brass zip keeps all cards securely enclosed',
      'Compact palm-sized ergonomic form factor',
      'Reinforced gusset seams tested for repetitive opening cycles',
    ],
  },
];

export const BRAND_VALUES = [
  {
    id: 'v1',
    title: 'Thoughtful Design',
    description:
      'Every wallet and accessory is conceived with ergonomic intent—proportions calibrated for comfort, pocket balance, and rapid card access.',
  },
  {
    id: 'v2',
    title: 'Everyday Practicality',
    description:
      'We prioritize durability in daily rotation. Finishes, interior partitions, and hardware are selected to maintain shape and aesthetic refinement through regular use.',
  },
  {
    id: 'v3',
    title: 'Attention to Detail',
    description:
      'From uniform stitch alignment to triple-sealed burnished edge coats, each seam reflects deliberate finishing and exacting quality expectations.',
  },
  {
    id: 'v4',
    title: 'Business-Focused Service',
    description:
      'We treat retail partners, distributors, and bulk purchasers as long-term collaborators with transparent communication, sample evaluation, and responsive wholesale terms.',
  },
];
