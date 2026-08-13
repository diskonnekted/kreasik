import { Instagram, Youtube, Music, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  shop: [
    { label: 'Semua Produk', href: '/products' },
    { label: '3D Print', href: '/products?category=3d-print' },
    { label: 'DIY Crafts', href: '/products?category=diy' },
    { label: 'Gift Card', href: '/gift-card' },
  ],
  support: [
    { label: 'Hubungi Kami', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Info Pengiriman', href: '/shipping' },
    { label: 'Pengembalian', href: '/returns' },
    { label: 'Lacak Pesanan', href: '/track-order' },
  ],
  company: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Cerita Kami', href: '/about' },
    { label: 'Karir', href: '/about' },
    { label: 'Wholesale', href: '/contact' },
    { label: 'Pers', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">KREASIK</h3>
            <p className="text-body-sm leading-relaxed mb-4">
              Jasa percetakan, digital printing, dan sablon di Banjarnegara.
            </p>
            <div className="space-y-2 text-body-sm mb-4">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-white/60" />
                <span>Jl. S. Parman, Parakancanggah, Banjarnegara 53412</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0 text-white/60" />
                <a href="tel:085137525599" className="hover:text-white transition-colors">0851-3752-5599</a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="TikTok">
                <Music size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-body-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption">
            &copy; 2025 Kreasik. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-caption hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-caption hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
