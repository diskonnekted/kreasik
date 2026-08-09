# KREASIK — Online Shop Concept Design

> A creative e-commerce platform for 3D printed products, apparel, and unique DIY crafts.

---

## 1. Project Overview

| Aspect | Detail |
|--------|--------|
| **Brand** | Kreasik |
| **Type** | Creative E-commerce / Online Shop |
| **Products** | 3D Printing, T-shirts & Apparel, DIY Crafts, Unique Products |
| **Tech Stack** | React (Next.js) + Tailwind CSS |
| **Hosting** | Vercel |
| **Database** | Dev: SQLite → Prod: Supabase / Neon / Sanity |
| **Payment** | QRIS (Indonesian Quick Response Code Standard) |
| **Dashboard** | Admin panel for sales management |

---

## 2. Design System

### 2.1 Style: Creative Workshop + Vibrant Block

A fusion of **handmade artisan warmth** with **modern energetic vibrancy** — reflecting the creative, crafty nature of DIY and 3D printed products.

| Attribute | Value |
|-----------|-------|
| **Mood** | Bold, energetic, playful, creative, artisan, authentic |
| **Layout** | Block-based with asymmetric grids |
| **Shapes** | Geometric shapes with organic variations |
| **Contrast** | High color contrast, duotone accents |
| **Best For** | Creative agencies, handmade products, youth-focused brands |

### 2.2 Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| **Primary** | `#E11D48` (Rose Red) | Brand identity, primary CTAs, accents |
| **On Primary** | `#FFFFFF` | Text/icons on primary background |
| **Secondary** | `#FB7185` (Soft Rose) | Secondary elements, hover states |
| **Accent/CTA** | `#2563EB` (Engagement Blue) | Primary action buttons, links |
| **Background** | `#FFF1F2` (Warm Rose) | Page background |
| **Foreground** | `#881337` (Deep Rose) | Primary text |
| **Muted** | `#F0ECF2` (Lavender Gray) | Cards, subtle backgrounds |
| **Border** | `#FECDD3` (Light Rose) | Dividers, borders |
| **Destructive** | `#DC2626` (Red) | Error states, delete actions |
| **Success** | `#16A34A` (Green) | Payment success, order confirmation |

**Supplementary Earth Tones (for artisan section):**
| Role | Hex | Usage |
|------|-----|-------|
| Terracotta | `#C67B5C` | DIY product category, artisan sections |
| Sand Beige | `#D4C4A8` | Backgrounds, cards |
| Warm Clay | `#B5651D` | Highlights, badges |
| Soft Cream | `#F5F0E1` | Light backgrounds |

### 2.3 Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Headings** | **Syne** | 400, 500, 600, 700 | Page titles, product names, hero text |
| **Body** | **Manrope** | 300, 400, 500, 600, 700 | Descriptions, navigation, UI text |

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700&display=swap');
```

**Typography Scale:**
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 48px (3rem) | 700 | 1.1 | Hero headline |
| H2 | 36px (2.25rem) | 600 | 1.2 | Section titles |
| H3 | 24px (1.5rem) | 600 | 1.3 | Card titles, product names |
| H4 | 20px (1.25rem) | 500 | 1.4 | Subsections |
| Body L | 18px (1.125rem) | 400 | 1.6 | Long descriptions |
| Body | 16px (1rem) | 400 | 1.5 | Default text |
| Body S | 14px (0.875rem) | 400 | 1.5 | Captions, metadata |
| Caption | 12px (0.75rem) | 500 | 1.4 | Labels, badges |

### 2.4 Effects & Animation

| Effect | Value |
|--------|-------|
| **Section Gaps** | 48px+ between major sections |
| **Hover Transitions** | 150-300ms color shift + scale |
| **Scroll Behavior** | Snap scrolling for product showcases |
| **Card Hover** | `scale(1.02)` + shadow elevation |
| **Button Press** | `scale(0.98)` with 100ms transition |
| **Loading** | Skeleton screens with `animate-pulse` |
| **Patterns** | Animated geometric patterns in hero/background |

### 2.5 Icon System

- **Library:** Heroicons (`@heroicons/react`) or Lucide React
- **Size Tokens:** `icon-sm (20px)`, `icon-md (24px)`, `icon-lg (32px)`
- **Style:** Consistent stroke width (1.5px outline style)
- **No Emojis** as structural icons

---

## 3. Frontpage Structure

### 3.1 Section Order

```
1. NAVIGATION BAR (Sticky)
2. HERO SECTION
3. CATEGORY SHOWCASE
4. FEATURED PRODUCTS
5. NEW ARRIVALS / TRENDING
6. CRAFTSPERSON STORY / ABOUT
7. TESTIMONIALS / REVIEWS
8. NEWSLETTER SIGNUP
9. FOOTER
```

### 3.2 Detailed Section Breakdown

#### SECTION 1: Navigation Bar (Sticky)

```
┌──────────────────────────────────────────────────────────────┐
│  [KREASIK LOGO]    [Shop] [3D Print] [Apparel] [DIY] [About] │  [Search] [Cart(0)] [Account] │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Position** | Sticky top, glassmorphism on scroll |
| **Logo** | Bold "KREASIK" in Syne 700, Primary color |
| **Nav Items** | Syne 500, hover: color shift to Accent |
| **Search** | Icon → expands to search bar |
| **Cart** | Shopping bag icon with badge count |
| **Mobile** | Hamburger menu with slide-in drawer |

#### SECTION 2: Hero Section

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   CREATIVE HANDMADE                                          │
│   3D PRINTED & DIY CRAFTS                                    │
│                                                              │
│   [Discover Unique Products] ← Primary CTA (Accent Blue)    │
│   [View Collection] ← Secondary CTA (Outline)                │
│                                                              │
│   [Product showcase: 3D printed items + apparel collage]     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Layout** | Two-column: text left, visual right |
| **Headline** | H1: "Creative Handmade 3D Printed & DIY Crafts" |
| **Subheadline** | Body L: "Discover unique, handcrafted products made with passion and technology" |
| **CTA Primary** | "Discover Unique Products" — Accent Blue (#2563EB), rounded-lg |
| **CTA Secondary** | "View Collection" — Outlined, transparent bg |
| **Visual** | Rotating product carousel / collage of 3D prints + apparel |
| **Animation** | Staggered fade-in on scroll, subtle parallax on visual |

#### SECTION 3: Category Showcase

```
┌──────────────────────────────────────────────────────────────┐
│  SHOP BY CATEGORY                                            │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │          │  │          │  │          │  │          │    │
│  │  3D      │  │  T-SHIRT │  │  DIY     │  │  UNIQUE  │    │
│  │  PRINT   │  │  & APP   │  │  CRAFTS  │  │  ITEMS   │    │
│  │          │  │          │  │          │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Grid** | 2x2 on mobile → 4-column on desktop |
| **Cards** | Full-bleed images with gradient overlay |
| **Hover** | Scale 1.05 + text slide-up |
| **Images** | High-quality category photography |
| **Labels** | Syne 600, white text on gradient overlay |

#### SECTION 4: Featured Products

```
┌──────────────────────────────────────────────────────────────┐
│  FEATURED PRODUCTS                              [View All →]  │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │  │ [Image]  │    │
│  │ ♥  Add   │  │ ♥  Add   │  │ ♥  Add   │  │ ♥  Add   │    │
│  │ Product  │  │ Product  │  │ Product  │  │ Product  │    │
│  │ Rp XXXK  │  │ Rp XXXK  │  │ Rp XXXK  │  │ Rp XXXK  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Grid** | 2-column mobile → 4-column desktop |
| **Card** | White bg, rounded-xl, shadow-sm |
| **Image** | Square aspect ratio, hover: swap to alternate view |
| **Quick Add** | Hover reveals "Add to Cart" button |
| **Wishlist** | Heart icon (outline → filled) |
| **Price** | Primary color, bold |
| **Hover** | Elevated shadow + scale 1.02 |

#### SECTION 5: New Arrivals / Trending

```
┌──────────────────────────────────────────────────────────────┐
│  NEW ARRIVALS                              [View All →]      │
│  ─────────────────────────  [All] [3D Print] [Apparel] [DIY]│
│                                                              │
│  [Tab-based horizontal scroll on mobile, grid on desktop]    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Filter Tabs** | Pill-shaped, active state = Primary bg |
| **Layout** | Grid (2/3/4 columns responsive) |
| **New Badge** | "NEW" badge on recent products |
| **Animation** | Fade-in on tab change |

#### SECTION 6: Craftsperson Story

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ┌─────────────┐  Every piece is crafted with              │
│   │             │  passion, combining traditional           │
│   │  [Creator   │  craft with modern 3D printing            │
│   │   Photo]    │  technology. Each product tells           │
│   │             │  a unique story.                          │
│   └─────────────┘                                          │
│   [Our Story →]                                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Layout** | Two-column: image left, text right |
| **Image** | Creator/workshop photography |
| **Typography** | Syne heading + Manrope body |
| **Background** | Soft Cream (#F5F0E1) for warmth |
| **CTA** | "Our Story →" text link |

#### SECTION 7: Testimonials

```
┌──────────────────────────────────────────────────────────────┐
│  WHAT OUR CUSTOMERS SAY                                      │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  ★★★★★  "Amazing quality! The 3D printed model was     ││
│  │         perfect. Fast shipping too!"                     ││
│  │         — @customer_name                                ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │  ★★★★★  "Love my custom t-shirt. The design and       ││
│  │         material quality exceeded expectations."         ││
│  │         — @customer_name                                ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Cards** | Muted background, rounded-xl |
| **Stars** | ★★★★★ in Primary color |
| **Carousel** | Horizontal scroll on mobile, visible on desktop |
| **Avatar** | Circular customer photos |

#### SECTION 8: Newsletter Signup

```
┌──────────────────────────────────────────────────────────────┐
│  STAY IN THE LOOP                                            │
│  Get updates on new products, exclusive drops, and          │
│  creative inspiration.                                       │
│                                                              │
│  [──────────── email ────────────] [Subscribe →]             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Element | Details |
|---------|---------|
| **Background** | Primary color (#E11D48) |
| **Text** | White |
| **Input** | White bg, rounded-lg |
| **Button** | White bg + Primary text (reverse of normal CTA) |

#### SECTION 9: Footer

```
┌──────────────────────────────────────────────────────────────┐
│  KREASIK           SHOP          SUPPORT         FOLLOW      │
│  ──────────────    ─────────     ──────────       ────────   │
│  About Us   │    All Products│    Contact Us    │  Instagram  │
│  Our Story  │    Categories│    FAQ             │  TikTok     │
│  Shipping   │    Custom Orders│    Order Track   │  YouTube    │
│  Returns    │    Sale        │    Payment Info  │  Pinterest  │
│  Privacy    │    Gift Cards  │    Shipping Info │             │
│  Terms      │    Wholesale   │    Refund Policy │             │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. Product Detail Page

```
┌──────────────────────────────────────────────────────────────┐
│  [← Back]  /  3D Prints  /  Geometric Vase                    │
│                                                              │
│  ┌──────────────┐  GEOMETRIC VASE                             │
│  │              │  Rp 185.000                                 │
│  │  [Main Image │  ★★★★☆ (24 reviews)                        │
│  │   Gallery]   │                                              │
│  │              │  Select Color:  ● Black  ⚪ White  🔵 Blue  │
│  │              │                                              │
│  │              │  Select Size:  [S] [M] [L] [XL]             │
│  │              │                                              │
│  │              │  A unique hand-designed geometric vase      │
│  │              │  perfect for modern home decor. Printed     │
│  │              │  with premium PLA filament.                 │
│  │              │                                              │
│  │              │  [-]  1  [+]                               │
│  │              │                                              │
│  │              │  [ADD TO CART]          [BUY NOW]           │
│  │              │                                              │
│  │              │  • Free shipping over Rp 200K               │
│  │              │  • QRIS Payment Available                   │
│  │              │  • 7-day return policy                      │
│  └──────────────┘                                              │
│                                                              │
│  ── Product Details ──                                       │
│  [Tabs: Details | Reviews | Shipping]                        │
│                                                              │
│  ── You May Also Like ──                                     │
│  [Related product carousel]                                  │
└──────────────────────────────────────────────────────────────┘
```

---

## 5. Shopping Cart & Checkout

### Cart Sidebar/Drawer

```
┌────────────────────────────────────────┐
│  CART (2)                      [✕]     │
├────────────────────────────────────────┤
│  ┌──────────────────────────────────┐  │
│  │ [Image]  Geometric Vase × 1      │  │
│  │          Rp 185.000     [✕]      │  │
│  ├──────────────────────────────────┤  │
│  │ [Image]  Custom T-Shirt × 1      │  │
│  │          Rp 125.000     [✕]      │  │
│  └──────────────────────────────────┘  │
│                                        │
│  Subtotal       Rp 310.000             │
│  Shipping       Rp 15.000              │
│  ──────────────────────────            │
│  Total          Rp 325.000             │
│                                        │
│  [PROCEED TO CHECKOUT]                 │
└────────────────────────────────────────┘
```

### Checkout Page

```
┌──────────────────────────────────────────────────────────────┐
│  CHECKOUT                                                    │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────────────┐ │
│  │ 1. SHIPPING INFO     │  │ ORDER SUMMARY                │ │
│  │                      │  │                              │ │
│  │ First Name: [____]   │  │ Geometric Vase × 1 Rp 185K   │ │
│  │ Last Name:  [____]   │  │ Custom T-Shirt × 1 Rp 125K   │ │
│  │ Email:     [____]   │  │                              │ │
│  │ Phone:     [____]   │  │ Subtotal    Rp 310.000        │ │
│  │ Address:   [____]   │  │ Shipping    Rp  15.000        │ │
│  │ City:      [____]   │  │ Tax           Rp  0.00        │ │
│  │ Postal Code: [____]│  │ ──────────────────────         │ │
│  │                      │  │ Total       Rp 325.000        │ │
│  │ Shipping Method:     │  │                              │ │
│  │ ○ Regular (3-5d)    │  │ [PAY WITH QRIS]              │ │
│  │ ○ Express (1-2d)    │  │                              │ │
│  └──────────────────────┘  └──────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### QRIS Payment Flow

```
┌──────────────────────────────────────────┐
│  PAYMENT SUCCESSFUL                      │
│                                          │
│         ✓                                │
│                                          │
│  Your order has been confirmed!          │
│  Order #KR-20250809-XXXX                 │
│                                          │
│  A confirmation email has been sent.     │
│                                          │
│  [Track Order]   [Continue Shopping]     │
│                                          │
└──────────────────────────────────────────┘
```

**QRIS Payment Flow:**
1. User clicks "PAY WITH QRIS"
2. System generates QRIS code via payment gateway (e.g., Midtrans, Xendit)
3. QR displayed on screen with countdown timer
4. User scans with e-wallet (GoPay, OVO, Dana, ShopeePay)
5. Payment confirmation via webhook
6. Redirect to success page

---

## 6. Admin Dashboard

### Dashboard Overview

```
┌──────────────────────────────────────────────────────────────┐
│  DASHBOARD        [Search] [Notifications] [Admin Profile]   │
├─────────────┬────────────────────────────────────────────────┤
│             │                                                │
│  NAVIGATION │  Welcome back, Admin                           │
│  ────────   │                                                │
│             │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  📊 Overview│  │Revenue │ │Orders  │ │Products│ │Customers│ │
│  │           │  │ Rp 5.2M│ │  142  │ │  48   │ │  89    │  │
│  📦 Products│  │ +12%  │ │ +8%   │ │ -2    │ │ +23%  │  │
│  🛒 Orders  │  └────────┘ └────────┘ └────────┘ └────────┘  │
│  👥 Customers│                                               │
│  💰 Payments│  ── Recent Orders ──                          │
│  📈 Analytics│                                               │
│  🎨 Content │  Order #123  │ Geometric Vase  │ Rp 185K │ ✓  │
│  ⚙️ Settings │  Order #122  │ Custom Tee      │ Rp 125K │ ⏳  │
│             │  Order #121  │ DIY Kit         │ Rp 95K  │ ✓  │
│             │                                                │
└─────────────┴────────────────────────────────────────────────┘
```

### Dashboard Sections

| Page | Features |
|------|----------|
| **Overview** | Revenue charts, order stats, top products, recent orders table |
| **Products** | CRUD products, inventory management, category tags, image upload |
| **Orders** | Order list, status management (Pending → Processing → Shipped → Delivered), print invoice |
| **Customers** | Customer list, purchase history, segments |
| **Payments** | Payment reconciliation, QRIS transaction log, refund management |
| **Analytics** | Sales reports, traffic sources, conversion rates, popular products |
| **Content** | Banner management, testimonial moderation, newsletter control |

---

## 7. Technology Architecture

### Frontend (React + Next.js on Vercel)

```
src/
├── app/                    # Next.js App Router
│   ├── (shop)/             # Customer-facing routes
│   │   ├── page.tsx        # Homepage
│   │   ├── products/
│   │   │   ├── page.tsx    # Product listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Product detail
│   │   ├── cart/
│   │   │   └── page.tsx    # Cart & checkout
│   │   └── checkout/
│   │       └── page.tsx    # Checkout & payment
│   └── (admin)/            # Admin dashboard
│       ├── page.tsx        # Dashboard overview
│       ├── products/
│       ├── orders/
│       └── analytics/
├── components/
│   ├── ui/                 # Base UI (buttons, cards, inputs)
│   ├── layout/             # Header, Footer, Sidebar
│   ├── products/           # ProductCard, ProductGrid
│   ├── cart/               # CartDrawer, CartItem
│   └── admin/              # Dashboard widgets
├── lib/
│   ├── supabase.ts         # Supabase client
│   ├── payment.ts          # QRIS payment logic
│   └── utils.ts            # Helper functions
├── hooks/
│   ├── use-cart.ts         # Cart state management
│   └── use-products.ts     # Product data fetching
└── styles/
    └── globals.css         # Tailwind + design tokens
```

### Database Schema (Supabase/Neon PostgreSQL)

```sql
-- Users
users (id, email, password_hash, name, role, created_at)

-- Products
products (
  id, name, slug, description,
  price, stock, category,
  images JSONB, options JSONB,
  is_featured, is_active,
  created_at, updated_at
)

-- Orders
orders (
  id, user_id,
  status, subtotal, shipping, tax, total,
  shipping_address JSONB,
  payment_method, payment_status,
  qris_ref, created_at, updated_at
)

-- Order Items
order_items (
  id, order_id, product_id,
  quantity, price, total
)

-- Categories
categories (id, name, slug, image, parent_id)

-- Reviews
reviews (
  id, user_id, product_id,
  rating, comment, created_at
)
```

### Payment Integration (QRIS)

```
Recommended Payment Gateways for Indonesia:
├── Midtrans (Snap QRIS)
├── Xendit (QRIS API)
├── Doku (QRIS)
└── Tripay (QRIS)

Flow:
1. Checkout → Create Order
2. Generate QRIS via Payment Gateway API
3. Display QR code to customer
4. Webhook receives payment confirmation
5. Update order status → "Paid"
6. Send confirmation email
```

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Target | Layout Adjustments |
|------------|-------|--------|-------------------|
| **sm** | 640px | Small phones | Single column, stacked CTA |
| **md** | 768px | Tablets | 2-column grids, hamburger nav |
| **lg** | 1024px | Small laptops | 3-4 column grids, full nav |
| **xl** | 1280px | Desktop | Full layout, sidebar dashboard |
| **2xl** | 1536px | Large screens | Max-width containers, centered |

---

## 9. UX Best Practices

### Performance
- [ ] **Lazy load** below-fold images (`loading="lazy"`)
- [ ] **Image optimization** with Next.js `next/image`
- [ ] **Code splitting** per route
- [ ] **Skeleton screens** for loading states
- [ ] **Debounced search** (300ms)

### Accessibility
- [ ] Text contrast ≥ 4.5:1 (WCAG AA)
- [ ] Focus states visible for keyboard navigation
- [ ] `aria-label` on icon buttons
- [ ] Semantic HTML (`<nav>`, `<main>`, `<article>`, `<footer>`)
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets ≥ 44×44px

### Animation Guidelines
- [ ] Micro-interactions: 150-300ms
- [ ] Button press: 100ms (faster)
- [ ] Page transitions: 200-300ms
- [ ] Use `ease-out` for enter, `ease-in` for exit
- [ ] Skeleton screens > spinners for content loading

### E-commerce Specific
- [ ] Guest checkout (no mandatory account)
- [ ] Persistent cart (localStorage + synced to account)
- [ ] Image hover: alternate view
- [ ] Quick add-to-cart from product grid
- [ ] Clear error states with actionable messages
- [ ] Order confirmation with tracking number

---

## 10. Recommended Packages

### Frontend Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "@supabase/supabase-js": "^2.39.0",
    "@heroicons/react": "^2.1.0",
    "lucide-react": "^0.310.0",
    "zustand": "^4.4.0",
    "sonner": "^1.0.0",
    "framer-motion": "^10.16.0",
    "zustand-persist": "^0.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### Optional
```json
{
  "dependencies": {
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0",
    "@tanstack/react-query": "^5.17.0",
    "react-dropzone": "^14.2.0",
    "recharts": "^2.10.0"
  }
}
```

---

## 11. Environment Variables

```env
# Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Payment Gateway (e.g., Midtrans)
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_IS_PRODUCTION=false

# Vercel
NEXT_PUBLIC_BASE_URL=https://kreasik.vercel.app

# Email (for order confirmations)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

---

## 12. Deployment to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add MIDTRANS_SERVER_KEY

# 5. Production deploy
vercel --prod
```

**Vercel Configuration (`vercel.json`):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ]
}
```

---

## Appendix: Design Rationale

| Decision | Rationale |
|----------|-----------|
| **Rose Red Primary** | Warm, creative, energetic — fits handmade + 3D printing vibe |
| **Blue Accent** | Trustworthy, professional for payment/CTA buttons |
| **Syne + Manrope** | Syne's unique personality for headlines, Manrope's readability for product info |
| **Block Layout** | Showcases product variety with bold, gallery-like presentation |
| **QRIS Payment** | Standardized Indonesian payment — works with all e-wallets |
| **Supabase over Neon** | Built-in auth, real-time, storage — ideal for e-commerce |
| **Sanity for CMS** | If you need rich content (blog, creator stories), Sanity complements Supabase |
| **Next.js App Router** | Server components for SEO, Vercel-native deployment |
