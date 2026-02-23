# DW Company - Landing Page

Professional Painting & Carpentry Services Landing Page with modern animations, gallery, and booking system.

## 🎯 Overview

This is a modern, high-performance landing page for DW Company, a painting and carpentry service provider. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

### Key Features

- ✅ **Mobile-First Design** - Optimized for all devices
- ✅ **3D Animations** - Smooth parallax and Framer Motion effects
- ✅ **Before/After Gallery** - Interactive slider for project showcase
- ✅ **Booking System** - Form with Zod validation and error handling
- ✅ **WhatsApp Integration** - Direct contact via WhatsApp
- ✅ **Performance Optimized** - Lighthouse score 95+
- ✅ **Responsive Components** - Works perfectly on mobile, tablet, desktop
- ✅ **Dark Mode Ready** - CSS custom properties for easy theming

## 🛠️ Technology Stack

```
Frontend Framework: Next.js 15.1+
Language: TypeScript (strict mode)
Styling: Tailwind CSS 4
Animations: Framer Motion 11+
Form Handling: React Hook Form + Zod
Icons: Lucide React
Image Optimization: Sharp
Carousel: Swiper 11+
```

## 📁 Project Structure

```
dw-company/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero/
│   │   └── Hero.tsx        # Hero section with video background
│   ├── Services/
│   │   ├── ServicesGrid.tsx    # Services showcase
│   │   ├── Testimonials.tsx    # Testimonials carousel
│   │   └── Footer.tsx          # Contact & footer
│   ├── Gallery/
│   │   └── ImageGallery.tsx    # Before/after gallery
│   ├── ContactForm/
│   │   └── BookingForm.tsx     # Booking form with validation
│   ├── WhatsAppButton/
│   │   └── FloatingButton.tsx  # WhatsApp floating button
│   └── UI/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── LoadingSpinner.tsx
├── lib/
│   ├── constants.ts        # App-wide constants
│   ├── animations.ts       # Framer Motion variants
│   └── utils.ts           # Utility functions
├── public/
│   ├── images/
│   │   ├── chao/          # Floor images
│   │   ├── escada/        # Staircase images
│   │   ├── pintura/       # Painting images
│   │   └── logo/          # Logo
│   └── videos/
│       └── chao/          # Background video
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd dw-company
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_xxx
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Customization

Edit `lib/constants.ts` to update:
- Company info (name, phone, email, address)
- Color palette
- Services and features
- Testimonials
- Navigation links

### Styling

- Global styles: `app/globals.css`
- Component-specific styles: Tailwind classes within components
- Design tokens: CSS custom properties in `globals.css`

## 🎨 Design System

### Colors
```css
Primary: #2563eb (Blue)
Secondary: #f59e0b (Amber)
Accent: #10b981 (Green)
Dark: #1e293b
Light: #f8fafc
```

### Typography
- **Body**: Inter (300, 400, 500, 600, 700)
- **Headings**: Montserrat (600, 700, 800, 900)

### Spacing
- Mobile: 16px padding, 24px gap
- Desktop: 32px padding, 48px gap

## 🎬 Animations

### Built-in Variants
- `fadeInUp` - Fade in with upward movement
- `slideInLeft/Right` - Slide from sides
- `scaleIn` - Scale from center
- `staggerContainer` - Stagger children
- And more in `lib/animations.ts`

## ✅ Performance

### Lighthouse Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimizations Implemented
- ✅ Image optimization (AVIF, WebP)
- ✅ Font optimization (display: swap)
- ✅ Code splitting (dynamic imports)
- ✅ Lazy loading (images, components)
- ✅ CSS minification
- ✅ Zero layout shift (CLS < 0.1)

## 📱 Mobile-First Development

- Responsive grid layouts
- Touch-friendly buttons (min 44px)
- Optimized video/images
- Mobile-optimized navigation
- Smooth scrolling
- Swipe gestures support

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔨 Build & Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build project
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint
```

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS

### Animations & UI
- `framer-motion` - Animation library
- `lucide-react` - Icon library

### Forms
- `react-hook-form` - Form management
- `@hookform/resolvers` - Form validation resolvers
- `zod` - Schema validation

### Utilities
- `react-intersection-observer` - Scroll detection
- `emailjs-com` - Email service
- `react-confetti` - Confetti effects
- `swiper` - Touch slider

## 📞 Support

For issues or questions, please contact:
- Email: info@dwcompany.com
- Phone: +1 (555) 123-4567
- WhatsApp: Available via floating button

---

**Built with ❤️ for DW Company**
