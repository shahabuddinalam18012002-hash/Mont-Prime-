import { Product } from '../types';

import heroImg from '../assets/images/wallet_collection_black_boxes_1791696448128.jpg';
import walletsBlackImg from '../assets/images/wallet_black_trifold_podium_1791696411554.jpg';
import walletsTanImg from '../assets/images/wallet_tan_bifold_podium_1791696423859.jpg';
import walletsQuadImg from '../assets/images/wallet_quad_colors_giftbox_1791696437186.jpg';
import pursesImg from '../assets/images/category_mens_purses_1791690557809.jpg';
import cardHoldersImg from '../assets/images/category_card_holders_1791690571420.jpg';
import craftsmanshipImg from '../assets/images/craftsmanship_stitching_1791690581516.jpg';

// Image assets for MONT PRIME (bundled by Vite for 100% production reliability on Netlify, Vercel, and CDN)
export const IMAGES = {
  hero: heroImg,
  wallets: walletsBlackImg,
  walletsTan: walletsTanImg,
  walletsQuad: walletsQuadImg,
  walletsBlackBoxes: heroImg,
  purses: pursesImg,
  cardHolders: cardHoldersImg,
  craftsmanship: craftsmanshipImg,
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
    name: 'The Sovereign Trifold Executive Wallet',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Full-Profile Trifold with Center Mesh ID Window & Snap Coin Pocket',
    description:
      'Crafted in textured pebble-grain leather with a secure metallic snap button clasp. Features an ergonomic trifold interior layout with a center breathable mesh ID window, precision card slots, an enclosed snap-flap coin pocket, and full-length cash chambers.',
    image: IMAGES.wallets,
    dimensions: '11.8 cm x 9.6 cm x 1.8 cm',
    material: 'Full-Grain Pebble Texture with Burnished Reinforced Seams',
    compartments: '6 Card Slots, Center ID Window, 1 Snap Coin Flap, 2 Currency Dividers',
    availableColors: ['Classic Jet Black'],
    features: [
      'Snap button closure for secure pocket carry',
      'Center transparent mesh ID window for rapid badge presentation',
      'Dedicated flap coin purse with brass snap button',
      'Full-depth dual currency divider',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-w02',
    name: 'The Heritage Tan Coin-Pocket Bifold',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Classic Bifold in Cognac Tan with Striped Lining & Snap Coin Flap',
    description:
      'A refined warm cognac tan wallet featuring authentic micro-grain texture, elegant striped interior lining, a dedicated photo/ID bay, quick-entry card slots, and an expandable snap-closure coin compartment.',
    image: IMAGES.walletsTan,
    dimensions: '11.5 cm x 9.4 cm x 1.6 cm',
    material: 'Supple Textured Tan Leather with Pinstripe Micro-Twill Interior',
    compartments: '5 Card Slots, 1 Clear ID Window, 1 Flap Coin Pocket, 2 Note Bays',
    availableColors: ['Cognac Tan Brown'],
    features: [
      'Distinctive nautical pinstripe currency lining',
      'Ergonomic thumb-slide card extraction slot',
      'Gently contoured coin flap with secure snap fastener',
      'Double-stitched structural spine',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-w03',
    name: 'The Signature Quad Multi-Tone Gift Set',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Four Signature Colorways with Metallic Plaque & Gold Gift Boxes',
    description:
      'Presented in rigid gold gift boxes with satin ribbon detailing. Includes four versatile palette choices: Dark Chocolate Brown, Deep Navy Blue, Charcoal Slate, and Camel Tan, each accented with a polished rectangular MP MONT PRIME brass brand plaque.',
    image: IMAGES.walletsQuad,
    dimensions: '11.2 cm x 9.0 cm x 1.4 cm',
    material: 'Saffiano Cross-Grain Scratch-Resistant Finish',
    compartments: '6 Card Slots, 1 Currency Section, Interior Slip Pockets',
    availableColors: ['Dark Brown', 'Navy Blue', 'Charcoal Slate', 'Camel Tan'],
    features: [
      'Solid brass rectangular MP MONT PRIME logo plaque',
      'Includes premium rigid gold gift boxes ready for counter display',
      'Scratch-resistant cross-grain exterior treatment',
      'Optimal slim profile designed for suit jackets and trouser pockets',
    ],
    isFeatured: true,
  },
  {
    id: 'mp-w04',
    name: 'The Star Edition Executive Bifold Set',
    category: 'wallets',
    categoryLabel: "Men's Wallets",
    subtitle: 'Minimalist Debossed Star Mark in Matte Black Luxury Packaging',
    description:
      'Features a debossed geometric star insignia and gold-stamped interior card chambers. Packaged in matte black luxury boxes with gold ribbon closures, offered in rich espresso brown and jet black finishes.',
    image: IMAGES.walletsBlackBoxes,
    dimensions: '11.0 cm x 8.8 cm x 1.2 cm',
    material: 'Silky Fine-Grain Matte Leatherette with Subtle Sheen',
    compartments: '8 Card Slots, Dual Billfold, 2 Hidden Receipts Pockets',
    availableColors: ['Jet Black', 'Rich Espresso Brown', 'Deep Charcoal'],
    features: [
      'Debossed four-pointed star emblem and MONT PRIME wordmark',
      'Matte black gift boxes with gold foil typography',
      'Ultra-thin fold profile minimizing pocket protrusion',
      'Tested for repetitive opening cycles with bonded nylon threading',
    ],
    isFeatured: true,
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
