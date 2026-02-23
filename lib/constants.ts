/**
 * Application Constants and Configuration
 */

export const COMPANY_INFO = {
  name: "DW Company",
  tagline: "Transform Your Space Into Your Dream Home",
  phone: "+1 (860) 709-7832",
  whatsapp: "+18607097832",
  email: "ace.silva64@gmail.com",
  address: "310 Newington Rd, West Hartford, CT 06110",
  instagram: "@DWPROBUILDERS",
  instagramUrl: "https://instagram.com/DWPROBUILDERS",
  yearsExperience: 6,
  description:
    "Professional Painting & Carpentry Services for Residential and Commercial Spaces in West Hartford, CT",
};

export const COLOR_PALETTE = {
  primary: "#059669", // green carpenter
  secondary: "#f59e0b", // amber/gold
  accent: "#059669", // green - action/WhatsApp
  dark: "#1e293b",
  light: "#f8fafc",
  glass: "rgba(255, 255, 255, 0.1)",
};

export const SERVICES = {
  interiorPainting: {
    title: "Interior Painting",
    description: "Professional interior painting for homes and offices",
    features: ["High-quality finishes", "Color consultation", "Clean workspace"],
    icon: "Palette",
  },
  exteriorPainting: {
    title: "Exterior Painting",
    description: "Weather-resistant exterior painting",
    features: ["Enhance curb appeal", "Weather protection", "Premium materials"],
    icon: "Palette",
  },
  commercialPainting: {
    title: "Commercial Painting",
    description: "Professional painting services for businesses",
    features: ["Minimal disruption", "Expert finish", "Timely completion"],
    icon: "Palette",
  },
  customCarpentry: {
    title: "Custom Carpentry",
    description: "Tailored woodwork solutions for your space",
    features: ["Built-ins", "Shelving", "Custom furniture"],
    icon: "Hammer",
  },
  deckInstallation: {
    title: "Deck Installation & Repair",
    description: "Beautiful outdoor decks built to last",
    features: ["Expert design", "Quality materials", "Professional installation"],
    icon: "Hammer",
  },
  floorInstallation: {
    title: "Floor Installation",
    description: "Professional hardwood and laminate flooring",
    features: ["Precise installation", "Attention to detail", "Quality materials"],
    icon: "Hammer",
  },
  bathroomRemodeling: {
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovations",
    features: ["Modern designs", "Quality craftsmanship", "Professional finish"],
    icon: "Hammer",
  },
  kitchenRemodeling: {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into your dream space",
    features: ["Custom cabinets", "Quality countertops", "Expert design"],
    icon: "Hammer",
  },
  drywallRepair: {
    title: "Drywall Repair",
    description: "Expert drywall installation and repair",
    features: ["Seamless finish", "Professional installation", "Expert repair"],
    icon: "Hammer",
  },
};

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "West Hartford",
    rating: 5,
    text: "DW Company transformed our kitchen completely. The custom carpentry work is outstanding and the attention to detail is impressive. Highly recommend!",
    avatar: "https://ui-avatars.com/api/?name=Sarah+M&background=2563eb&color=fff",
  },
  {
    name: "Michael R.",
    location: "Hartford",
    rating: 5,
    text: "Professional, punctual, and the quality of their painting work exceeded our expectations. Our home looks brand new!",
    avatar:
      "https://ui-avatars.com/api/?name=Michael+R&background=f59e0b&color=fff",
  },
  {
    name: "Jennifer L.",
    location: "West Hartford",
    rating: 5,
    text: "They installed our deck and it's absolutely beautiful. The team was respectful, clean, and the final result is amazing.",
    avatar:
      "https://ui-avatars.com/api/?name=Jennifer+L&background=10b981&color=fff",
  },
];

export const FORM_CONFIG = {
  minNameLength: 2,
  maxNameLength: 100,
  minAddressLength: 10,
  phoneFormat: /^\+?1?\d{9,15}$/,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const ANIMATION_DELAYS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};

export const NAVIGATION = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
