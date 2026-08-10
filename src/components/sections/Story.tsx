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
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img
                  src="/products/my_figure.png"
                  alt="Custom 3D Figur Service"
                  className="w-full h-full object-cover"
                />
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
            <span className="inline-block badge bg-primary/10 text-primary mb-6">
              Layanan Unggulan
            </span>
            <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-6">
              Custom 3D Figur Dari Foto Asli Anda
            </h2>
            <div className="space-y-4 text-body text-foreground/70 leading-relaxed">
              <p>
                Layanan unggulan kami adalah mengubah foto Anda menjadi patung 3D berkualitas tinggi! Cukup kirimkan foto Anda, dan kami akan buat figur 3D yang realistis dan detail.
              </p>
              <p>
                Pilih style sesuai keinginan Anda: model <strong>Real</strong> yang fotorealistik, model <strong>Anime</strong> yang colorful dan playful, atau <strong>Custom</strong> sesuai kreativitas Anda. Setiap figur dibuat dengan teknologi 3D printing terbaik dan di-finish dengan tangan untuk hasil premium.
              </p>
              <p>
                Sempurna untuk hadiah ulang tahun, anniversary, dekorasi rumah, atau koleksi pribadi. Buat momen spesial Anda jadi abadi dalam bentuk 3D!
              </p>
            </div>
            <motion.a
              href="/products"
              whileHover={{ x: 4 }}
              className="btn-primary inline-flex items-center gap-2 mt-8"
            >
              Lihat Contoh Karya
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
