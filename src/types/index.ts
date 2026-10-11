export type PageId =
  | 'home'
  | 'about'
  | 'collection'
  | 'manufacturing'
  | 'wholesale'
  | 'story'
  | 'contact';

export type ProductCategory = 'wallets' | 'purses' | 'card_holders';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  dimensions: string;
  material: string;
  compartments: string;
  availableColors: string[];
  features: string[];
  isFeatured?: boolean;
}

export type BusinessType =
  | 'Retailer'
  | 'Wholesaler'
  | 'Distributor'
  | 'Reseller'
  | 'Other';

export interface WholesaleEnquiryPayload {
  fullName: string;
  businessContact: string; // Email or Phone
  businessType: BusinessType;
  message: string;
  companyName?: string;
  city?: string;
  state?: string;
  country?: string;
  categories: string[];
  estimatedQuantity?: string;
  preferredContactMethod?: 'WhatsApp' | 'Phone Call' | 'Email';
  honeypot?: string; // Spam trap
  submittedAt: string;
}

export interface ContactPayload {
  name: string;
  contact: string; // Email or Phone
  subject: string;
  message: string;
  honeypot?: string;
  submittedAt: string;
}
