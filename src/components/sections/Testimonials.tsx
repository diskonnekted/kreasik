'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Amelia',
    handle: '@sarahamelia',
    text: 'Kualitasnya gila! Vas 3D print yang aku pesen hasilnya keren banget. Pattern geometrisnya detail banget dan bahannya premium. Pengiriman juga cepet!',
    rating: 5,
    avatar: 'SA',
  },
  {
    name: 'Budi Santoso',
    handle: '@budisantoso',
    text: "Kaos custom aku keren abis! Desain dan kualitas bahannya di luar ekspektasi. Print-nya vibrant dan fit-nya pas. Bakal order lagi pasti.",
    rating: 5,
    avatar: 'BS',
  },
  {
    name: 'Diana Putri',
    handle: '@dianaputri',
    text: 'Kit DIY craft-nya pengalaman yang seru banget. Packagingnya rapi dan instruksinya jelas. Anak-anak pada seneng banget!',
    rating: 5,
    avatar: 'DP',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-card h-full">
      <Quote className="text-primary/10 mb-4" size={32} />
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-body text-foreground/70 leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-heading font-semibold text-primary text-sm">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <p className="font-heading font-semibold text-sm text-foreground">{testimonial.name}</p>
          <p className="text-caption text-foreground/50">{testimonial.handle}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">
            Kata Mereka yang Sudah Belanja
          </h2>
          <p className="text-body text-foreground/60 max-w-md mx-auto">
            Review asli dari customer happy kita
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
