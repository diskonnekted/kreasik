'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-soft-cream">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, -5, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32 pt-24 pb-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              custom={0}
              variants={heroVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="inline-flex items-center gap-2 badge-new mb-6">
              <Sparkles size={14} />
              Percetakan & Digital Printing Banjarnegara
            </span>
          </motion.div>

          <motion.h1
              custom={1}
              variants={heroVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="font-heading font-bold text-heading-xl md:text-[56px] lg:text-heading-xl leading-tight md:leading-tight text-foreground mb-6"
            >
              Cetak & Sablon Berkualitas di{' '}
              <span className="text-gradient">Banjarnegara</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={heroVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="text-body-lg md:text-body text-foreground/70 max-w-lg mb-10 leading-relaxed"
            >
              Jasa percetakan, digital printing, dan sablon untuk kebutuhan dokumen, banner, spanduk, dan produk custom seperti mug, tumbler, dan merchandise.
            </motion.p>

            <motion.div
              custom={3}
              variants={heroVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-wrap gap-4"
            >
              <a href="/products" className="btn-primary inline-flex items-center gap-2">
                Lihat Koleksi
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-secondary">
                Pelajari Lebih
              </a>
            </motion.div>
          </div>

          {/* Right: Product Showcase */}
          <motion.div
            custom={4}
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main showcase card - Featured Product */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/products/siswi_figur_resin.JPG"
                  alt="Siswi Figur Resin - Featured Product"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card px-4 py-3"
              >
                <p className="font-heading font-semibold text-sm text-foreground">Premium Quality</p>
                <p className="text-caption text-foreground/50">Handmade Resin Art</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card px-4 py-3"
              >
                <p className="font-heading font-semibold text-sm text-foreground">Premium Quality</p>
                <p className="text-caption text-foreground/50">Hand-painted Detail</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
