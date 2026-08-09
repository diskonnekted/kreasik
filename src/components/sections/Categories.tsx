'use client'

import { motion } from 'framer-motion'
import { Box, Shirt, Wrench, Gem, ArrowRight } from 'lucide-react'

const categories = [
  {
    name: '3D Print',
    description: 'Desain geometris unik & seni fungsional',
    icon: Box,
    gradient: 'from-primary/10 to-secondary/10',
    hoverGradient: 'from-primary/20 to-secondary/20',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    name: 'Apparel',
    description: 'Kaos custom & fashion kreatif',
    icon: Shirt,
    gradient: 'from-accent/10 to-blue-300/10',
    hoverGradient: 'from-accent/20 to-blue-300/20',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    name: 'DIY Crafts',
    description: 'Kerajinan tangan & kit proyek kreatif',
    icon: Wrench,
    gradient: 'from-terracotta/10 to-warm-clay/10',
    hoverGradient: 'from-terracotta/20 to-warm-clay/20',
    iconBg: 'bg-terracotta/10',
    iconColor: 'text-terracotta',
  },
  {
    name: 'Unik Items',
    description: 'Produk limited edition & kreasi spesial',
    icon: Gem,
    gradient: 'from-purple-500/10 to-pink-500/10',
    hoverGradient: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">
            Belanja Berdasarkan Kategori
          </h2>
          <p className="text-body text-foreground/60 max-w-md mx-auto">
            Jelajahi koleksi produk kreatif kami dari berbagai kategori
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.name}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${cat.gradient} 
                  hover:${cat.hoverGradient} transition-all duration-300 
                  border border-transparent hover:border-primary/20 h-full`}
                >
                  <div className={`${cat.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className={cat.iconColor} />
                  </div>
                  <h3 className="font-heading font-semibold text-heading-md mb-2 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-body-sm text-foreground/60 mb-4">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-heading font-semibold text-body-sm
                    group-hover:gap-2 transition-all">
                    Lihat Produk
                    <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
