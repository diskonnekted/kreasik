'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star, ArrowRight, Check } from 'lucide-react'

interface Product {
  id: number
  name: string
  basePrice: number
  category: string
  badge?: string
  image: string
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 13,
    name: 'Resin Angel Girl',
    basePrice: 350000,
    category: 'Resin',
    badge: 'NEW',
    image: '/products/resin angel girl.png',
    rating: 5,
    reviews: 12,
  },
  {
    id: 14,
    name: 'Resin Angel Girl In Ground',
    basePrice: 380000,
    category: 'Resin',
    badge: 'NEW',
    image: '/products/resin angel girl in ground.png',
    rating: 5,
    reviews: 8,
  },
  {
    id: 16,
    name: 'Resin Girl In White Dress',
    basePrice: 365000,
    category: 'Resin',
    badge: 'NEW',
    image: '/products/resin girl in white dress.png',
    rating: 5,
    reviews: 20,
  },
  {
    id: 15,
    name: 'Resin General Figure',
    basePrice: 320000,
    category: 'Resin',
    badge: 'NEW',
    image: '/products/resin general figure.png',
    rating: 5,
    reviews: 15,
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

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false)

  return (
    <motion.div variants={item} className="group">
      <div className="card relative">
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 ${
              product.badge === 'NEW' ? 'badge-new' : 'badge-sale'
            }`}>
              {product.badge}
            </span>
          )}
          {/* Quick Actions */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2.5 rounded-full bg-white shadow-md transition-colors ${
                liked ? 'bg-primary text-white' : 'hover:bg-gray-100'
              }`}
              aria-label="Add to wishlist"
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
            </button>
            <button
              className="p-2.5 rounded-full bg-white shadow-md hover:bg-accent hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-caption text-foreground/50 mb-1">{product.category}</p>
          <h3 className="font-heading font-semibold text-body mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-caption text-foreground/50">({product.reviews})</span>
          </div>
          <p className="font-heading font-bold text-primary">
                          {formatCurrency(product.basePrice)}
                        </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-2">
              Produk Pilihan
            </h2>
            <p className="text-body text-foreground/60">
              Barang-barang paling laris dari kami
            </p>
          </motion.div>
          <motion.a
            href="/products"
            className="btn-secondary inline-flex items-center gap-2 w-fit"
          >
            Lihat Semua
            <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Free Shipping Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full">
            <Check size={16} />
            <span className="text-body-sm font-semibold">Gratis Ongkir untuk pesanan di atas Rp 200.000</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}