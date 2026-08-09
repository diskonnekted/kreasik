import { Instagram, Youtube, Music, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  shop: ['Semua Produk', '3D Print', 'Apparel', 'DIY Crafts', 'Gift Card'],
  support: ['Hubungi Kami', 'FAQ', 'Info Pengiriman', 'Pengembalian', 'Lacak Pesanan'],
  company: ['Tentang Kami', 'Cerita Kami', 'Karir', 'Wholesale', 'Pers'],
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">KREASIK</h3>
            <p className="text-body-sm leading-relaxed mb-6">
              Produk kerajinan kreatif yang menggabungkan teknik tradisional dengan teknologi 3D printing modern.
            </p>
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
                  <li key={link}>
                    <a href="#" className="text-body-sm hover:text-white transition-colors">
                      {link}
                    </a>
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
            <a href="#" className="text-caption hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-caption hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
