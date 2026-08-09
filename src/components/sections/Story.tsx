'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Story() {
  return (
    <section id="about" className="section-padding bg-soft-cream">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-terracotta/20 to-warm-clay/20 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-white/80 rounded-2xl flex items-center justify-center shadow-card">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <p className="font-heading font-semibold text-heading-md text-foreground">
                      Workshop & Studio
                    </p>
                    <p className="text-body-sm text-foreground/60 mt-2">
                      Tempat kreativitas bertemu teknologi
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block badge bg-terracotta/10 text-terracotta mb-6">
              Cerita Kami
            </span>
            <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-6">
              Tempat Kerajinan Tradisional Bertemu Teknologi Modern
            </h2>
            <div className="space-y-4 text-body text-foreground/70 leading-relaxed">
              <p>
                Kreasik lahir dari kecintaan kita menggabungkan kehangatan kerajinan tangan dengan presisi teknologi 3D printing. Setiap produk di koleksi kami punya cerita unik masing-masing.
              </p>
              <p>
                Kami percaya kalau kreativitas bisa ubah barang biasa jadi sesuatu yang luar biasa. Dari vas geometris sampai apparel custom, setiap produk didesain dengan care dan dibuat dengan tujuan.
              </p>
              <p>
                Workshop kami adalah tempat dimana imajinasi jadi bentuk fisik — menggabungkan teknik artisan tradisional dengan fabrikasi digital mutakhir.
              </p>
            </div>
            <motion.a
              href="#full-story"
              whileHover={{ x: 4 }}
              className="btn-primary inline-flex items-center gap-2 mt-8"
            >
              Baca Cerita Lengkap
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
