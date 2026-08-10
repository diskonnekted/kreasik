'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, ShoppingBag, Star, Minus, Plus, Truck, Shield, RefreshCw, Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ShippingCalculator from '@/components/sections/ShippingCalculator'
import { useCart } from '@/context/CartContext'

interface Product {
  id: number
  name: string
  slug: string
  price: number
  category: string
  badge?: string
  images: string[]
  rating: number
  reviews: number
  description: string
  weight: number
  details: string[]
  hasVariants: boolean
  variants?: {
    scales: string[]
    scalesPrice: Record<string, number>
    finishes: string[]
    finishesPrice: Record<string, number>
  }
}

const resinVariants = {
  hasVariants: true,
  variants: {
    scales: ['1:64', '1:35', '1:12', '1:6'],
    scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
    finishes: ['Polos', 'Hand Painted'],
    finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 },
  },
}

const products: Product[] = [
  {
    id: 13,
    name: 'Resin Angel Girl',
    slug: 'resin-angel-girl',
    price: 250000,
    category: '3d-print',
    badge: 'NEW',
    images: ['/products/resin angel girl.png'],
    rating: 5,
    reviews: 12,
    description: 'Patung resin angel girl dengan detail halus. Karya seni resin berkualitas tinggi untuk para collector. Limited edition dengan finishing premium.',
    weight: 250,
    details: ['Material: Resin Premium', 'Height: ~20cm', 'Weight: 250gr', 'Hand-painted detail', 'Collector edition'],
    ...resinVariants,
  },
  {
    id: 14,
    name: 'Resin Angel Girl In Ground',
    slug: 'resin-angel-girl-in-ground',
    price: 280000,
    category: '3d-print',
    badge: 'NEW',
    images: ['/products/resin angel girl in ground.png'],
    rating: 5,
    reviews: 8,
    description: 'Resin angel girl dengan base landscape. Karya seni resin dengan detail landscape yang memukau.',
    weight: 350,
    details: ['Material: Resin Premium', 'Height: ~25cm dengan base', 'Weight: 350gr', 'Hand-painted detail', 'Landscape base included'],
    ...resinVariants,
  },
  {
    id: 15,
    name: 'Resin General Figure',
    slug: 'resin-general-figure',
    price: 220000,
    category: '3d-print',
    badge: 'NEW',
    images: ['/products/resin general figure.png'],
    rating: 5,
    reviews: 15,
    description: 'Figure general dengan armor detail. Perfect untuk display koleksi militer atau gaming.',
    weight: 300,
    details: ['Material: Resin Premium', 'Height: ~18cm', 'Weight: 300gr', 'Armor detail premium', 'Military grade finish'],
    ...resinVariants,
  },
  {
    id: 16,
    name: 'Resin Girl In White Dress',
    slug: 'resin-girl-in-white-dress',
    price: 265000,
    category: '3d-print',
    badge: 'NEW',
    images: ['/products/resin girl in white dress.png'],
    rating: 5,
    reviews: 20,
    description: 'Resin girl in white dress yang elegan. Detail pakaian dan rambut sangat halus.',
    weight: 280,
    details: ['Material: Resin Premium', 'Height: ~22cm', 'Weight: 280gr', 'Hand-painted dress detail', 'Hair detail premium'],
    ...resinVariants,
  },
  {
    id: 17,
    name: 'Resin Girl Sit',
    slug: 'resin-girl-sit',
    price: 240000,
    category: '3d-print',
    badge: 'NEW',
    images: ['/products/resin girl sit.png'],
    rating: 5,
    reviews: 10,
    description: 'Resin figure girl duduk dengan pose natural. Cocok untuk desk display.',
    weight: 220,
    details: ['Material: Resin Premium', 'Height: ~15cm', 'Weight: 220gr', 'Natural pose', 'Desk-friendly size'],
    ...resinVariants,
  },
  {
    id: 18,
    name: 'Resin Soldier Advancing',
    slug: 'resin-soldier-advancing',
    price: 230000,
    category: '3d-print',
    badge: 'NEW',
    images: ['/products/resin soldier advancing.png'],
    rating: 5,
    reviews: 18,
    description: 'Figure soldier advancing dengan pose dinamis. Detail uniform dan senjata sempurna.',
    weight: 270,
    details: ['Material: Resin Premium', 'Height: ~18cm', 'Weight: 270gr', 'Dynamic pose', 'Weapon detail included'],
    ...resinVariants,
  },
  {
    id: 100, name: 'Shirt Cant Slow Down', slug: 'shirt-cant-slow-down', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt cant slow down.png'], rating: 5, reviews: 0,
    description: 'T-shirt keren dengan desain "Cant Slow Down". Cotton combed 30s premium, nyaman dipakai sehari-hari.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 101, name: 'Shirt Diablos Route 666', slug: 'shirt-diablos-route-666', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt diablos route 666.png'], rating: 5, reviews: 0,
    description: 'T-shirt tema biker dengan desain "Diablos Route 666". Desain bold untuk jiwa petualang.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 102, name: 'Shirt Full Throttle Baby', slug: 'shirt-full-throttle-baby', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt full throttle baby.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Full Throttle Baby" dengan desain eye-catching. Cocok untuk pecinta motor dan musik.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 103, name: 'Shirt Gimme Danger', slug: 'shirt-gimme-danger', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt gimme danger.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Gimme Danger" klasik. Desain timeless yang cocok untuk semua occasions.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 104, name: 'Shirt Hard Work With Less Sleep', slug: 'shirt-hard-work-with-less-sleep', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt hard work with less sleep.png'], rating: 5, reviews: 0,
    description: 'T-shirt motivasi "Hard Work With Less Sleep". Untuk para pejuang yang pantang menyerah.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 105, name: 'Shirt Hysteric Glamour', slug: 'shirt-hysteric-glamour', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt hysteric glamour.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Hysteric Glamour" dengan desain stylish. Tampilan edgy untuk kamu yang beda.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 106, name: 'Shirt Keep Going', slug: 'shirt-keep-going', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt keep going.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Keep Going" sederhana tapi powerful. Pengingat untuk terus maju.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 107, name: 'Shirt Life Begins After Coffee', slug: 'shirt-life-begins-after-coffee', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt life begins after coffee.png'], rating: 5, reviews: 0,
    description: 'T-shirt pecinta kopi "Life Begins After Coffee". Cocok untuk daily wear para coffee addict.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 108, name: 'Shirt Live For Victory', slug: 'shirt-live-for-victory', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt live for victory.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Live For Victory" penuh semangat. Semangat juara dalam setiap langkah.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 109, name: 'Shirt MER', slug: 'shirt-mer', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt mer.png'], rating: 5, reviews: 0,
    description: 'T-shirt "MER" minimalis. Desain clean untuk tampilan kasual yang elegan.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 110, name: 'Shirt Red Coffee', slug: 'shirt-red-coffee', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt red coffee.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Red Coffee" dengan nuansa merah. Desain unik perpaduan kopi dan warna.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 111, name: 'Shirt Ride To Live', slug: 'shirt-ride-to-live', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt ride to live.png'], rating: 5, reviews: 0,
    description: 'T-shirt biker "Ride To Live". Filosofi hidup untuk mereka yang mencintai berkendara.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 112, name: 'Shirt Roadcrew Bad Rider With Good Engine', slug: 'shirt-roadcrew-bad-rider-with-good-engine', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt roadcrew bad riderwith good engine.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Roadcrew Bad Rider With Good Engine". Desain funny untuk rider sejati.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 113, name: 'Shirt Skull Rider', slug: 'shirt-skull-rider', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt skull rider.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Skull Rider" dengan desain tengkorak. Tampilan badass untuk biker hard-core.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 114, name: 'Shirt Small Engine Big Fun', slug: 'shirt-small-engine-big-fun', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt small engine big fun.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Small Engine Big Fun" warna gelap. Desain fun untuk pecinta motor mesin kecil.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 115, name: 'Shirt Small Engine Big Fun White', slug: 'shirt-small-engine-big-fun-white', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt small engine big fun white.png'], rating: 5, reviews: 0,
    description: 'T-shirt "Small Engine Big Fun" versi putih. Desain sama dengan variasi warna terang.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 116, name: 'Shirt We Are The Spark', slug: 'shirt-we-are-the-spark', price: 175000, category: 'apparel',
    badge: 'NEW', images: ['/products/shirt we are the spark.png'], rating: 5, reviews: 0,
    description: 'T-shirt "We Are The Spark". Jadilah percikan perubahan di sekitarmu.',
    weight: 180, details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit', 'Ready size S-XXL'],
    hasVariants: false,
  },
  {
    id: 200, name: 'Print Banner', slug: 'print-banner', price: 150000, category: 'print',
    badge: 'NEW', images: ['/products/print banner.png'], rating: 5, reviews: 0,
    description: 'Banner berkualitas tinggi untuk promosi bisnis Anda. Tahan lama dan warna tajam.',
    weight: 500, details: ['Material: Banner Premium', 'Printing: Full Color', 'Weather resistant', 'Custom size available'],
    hasVariants: false,
  },
  {
    id: 201, name: 'Print Poster', slug: 'print-poster', price: 75000, category: 'print',
    badge: 'NEW', images: ['/products/print poster.JPG'], rating: 5, reviews: 0,
    description: 'Poster aesthetic untuk dekorasi ruang Anda. Kualitas cetak premium.',
    weight: 200, details: ['Material: Paper Premium', 'Printing: HD Quality', 'Various sizes available', 'Indoor use'],
    hasVariants: false,
  },
  {
    id: 202, name: 'Print X-Banner', slug: 'print-x-banner', price: 125000, category: 'print',
    badge: 'NEW', images: ['/products/print x-banner.png'], rating: 5, reviews: 0,
    description: 'X-Banner portable untuk event dan promosi. Mudah dipasang dan dibawa.',
    weight: 800, details: ['Material: Plastic + Stand', 'Printing: Full Color', 'Stand included', 'Portable design'],
    hasVariants: false,
  },
  {
    id: 300, name: 'DIY Patung Dawet Ayu Banjarnegara', slug: 'diy-patung-dawet-ayu-banjarnegara', price: 185000, category: 'diy',
    badge: 'NEW', images: ['/products/diy patung dawet ayu banjarnegara.png'], rating: 5, reviews: 0,
    description: 'Kit DIY patung Dawet Ayu khas Banjarnegara. Rak sendiri patung tradisional dengan resin berkualitas.',
    weight: 400, details: ['Material: Resin Premium', 'Weight: 400gr', 'Includes mold & resin', 'Instructions included', 'Traditional Banjarnegara motif'],
    ...resinVariants,
  },
  {
    id: 301, name: 'DIY Patung Dawet Ayu Banjarnegara Varian 2', slug: 'diy-patung-dawet-ayu-banjarnegara-varian-2', price: 175000, category: 'diy',
    badge: 'NEW', images: ['/products/diy patung dawet ayu banjarnegara varian 2.png'], rating: 5, reviews: 0,
    description: 'Varian 2 DIY Patung Dawet Ayu dengan pose berbeda. Kit lengkap dengan resin dan cetakan detail.',
    weight: 380, details: ['Material: Resin Premium', 'Weight: 380gr', 'Includes mold & resin', 'Different pose variant', 'Traditional craftsmanship'],
    ...resinVariants,
  },
  {
    id: 302, name: 'DIY Resin Candi Arjuna', slug: 'diy-resin-candi-arjuna', price: 195000, category: 'diy',
    badge: 'NEW', images: ['/products/diy resin candi arjuna.png'], rating: 5, reviews: 0,
    description: 'Kit DIY Candi Arjuna dari Borobudur. Rak sendiri candi legendaris Indonesia dengan resin premium.',
    weight: 450, details: ['Material: Resin Premium', 'Weight: 450gr', 'Includes mold & resin', 'Borobudur motif', 'Detailed architectural elements'],
    ...resinVariants,
  },
  {
    id: 303, name: 'DIY Resin Candi Arjuna Varian 2', slug: 'diy-resin-candi-arjuna-varian-2', price: 185000, category: 'diy',
    badge: 'NEW', images: ['/products/diy resin candi arjuna varian 2.png'], rating: 5, reviews: 0,
    description: 'Varian 2 Candi Arjuna dengan detail arsiran berbeda. Cocok untuk koleksi sejarah dan DIY enthusiast.',
    weight: 420, details: ['Material: Resin Premium', 'Weight: 420gr', 'Includes mold & resin', 'Alternative detail variant', 'Historical accuracy'],
    ...resinVariants,
  },
  {
    id: 304, name: 'DIY Resin Miniatur Tugu Banjarnegara', slug: 'diy-resin-miniatur-tugu-banjarnegara', price: 165000, category: 'diy',
    badge: 'NEW', images: ['/products/diy resin miniatur tugu banjarnegara.JPG'], rating: 5, reviews: 0,
    description: 'Kit DIY miniatur Tugu Banjarnegara. Monumen ikonik kota Banjarnegara dalam bentuk resin miniatur.',
    weight: 350, details: ['Material: Resin Premium', 'Weight: 350gr', 'Includes mold & resin', 'Iconic monument', 'City landmark replica'],
    ...resinVariants,
  },
  {
    id: 305, name: 'DIY Resin Miniatur Tugu Banjarnegara Varian 1', slug: 'diy-resin-miniatur-tugu-banjarnegara-varian-1', price: 175000, category: 'diy',
    badge: 'NEW', images: ['/products/diy resin miniatur tugu banjarnegara varian 1.JPG'], rating: 5, reviews: 0,
    description: 'Varian 1 Miniatur Tugu Banjarnegara dengan base landscape. Kit lengkap dengan aksesori landscape.',
    weight: 380, details: ['Material: Resin Premium', 'Weight: 380gr', 'Includes mold & resin', 'Landscape base included', 'Premium variant'],
    ...resinVariants,
  },
]

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)
  const [selectedScale, setSelectedScale] = useState<string>('1:64')
  const [selectedFinish, setSelectedFinish] = useState<string>('Polos')
  const [showShipping, setShowShipping] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-heading font-bold text-heading-xl mb-4">Produk Tidak Ditemukan</h1>
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Kembali ke Toko
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const categoryLabel = product.category === '3d-print' ? '3D Print' : product.category === 'apparel' ? 'Apparel' : 'DIY Crafts'

  const getVariantPrice = (): number => {
    if (!product.hasVariants || !product.variants) return product.price
    const scaleExtra = product.variants.scalesPrice[selectedScale] ?? 0
    const finishExtra = product.variants.finishesPrice[selectedFinish] ?? 0
    return product.price + scaleExtra + finishExtra
  }

  const totalPrice = getVariantPrice() * quantity

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-body-sm text-foreground/50 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Semua Produk
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4 shadow-card">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${
                    product.badge === 'NEW' ? 'badge-new' : 'badge-sale'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div>
              {/* Category & Title */}
              <div className="mb-2">
                <span className="text-caption text-foreground/50 uppercase tracking-wider">{categoryLabel}</span>
              </div>

              <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-body-sm text-foreground/60">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="font-heading font-bold text-3xl text-primary">{formatCurrency(product.price)}</span>
                <p className="text-body-sm text-foreground/50 mt-1">Harga sudah termasuk pajak</p>
              </div>

              {/* Description */}
              <p className="text-body text-foreground/70 leading-relaxed mb-6">{product.description}</p>

              {/* Scale Selection */}
              {product.hasVariants && product.variants && (
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-body-sm mb-3">
                    Pilih Skala
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {product.variants.scales.map((scale) => {
                      const extra = product.variants!.scalesPrice[scale] ?? 0
                      const isSelected = selectedScale === scale
                      return (
                        <button
                          key={scale}
                          onClick={() => setSelectedScale(scale)}
                          className={`px-3 py-2.5 rounded-lg border text-body-sm font-heading transition-colors ${
                            isSelected
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-border hover:border-foreground/30'
                          }`}
                        >
                          <div>{scale}</div>
                          {extra > 0 && (
                            <div className="text-caption text-foreground/40 mt-0.5">
                              +{formatCurrency(extra)}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Finish Selection */}
              {product.hasVariants && product.variants && (
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-body-sm mb-3">
                    Pewarnaan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.finishes.map((finish) => {
                      const extra = product.variants!.finishesPrice[finish] ?? 0
                      const isSelected = selectedFinish === finish
                      return (
                        <button
                          key={finish}
                          onClick={() => setSelectedFinish(finish)}
                          className={`px-4 py-2 rounded-lg border text-body-sm font-heading transition-colors ${
                            isSelected
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-border hover:border-foreground/30'
                          }`}
                        >
                          <div>{finish}</div>
                          {extra > 0 && (
                            <div className="text-caption text-foreground/40 mt-0.5">
                              +{formatCurrency(extra)}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Price with variant label */}
              <div className="mb-6">
                <span className="font-heading font-bold text-3xl text-primary">
                  {formatCurrency(getVariantPrice())}
                </span>
                {product.hasVariants && product.variants && selectedScale !== '1:64' && (
                  <span className="text-caption text-foreground/50 ml-2">
                    (skala {selectedScale})
                  </span>
                )}
                {product.hasVariants && product.variants && selectedFinish !== 'Polos' && (
                  <span className="text-caption text-foreground/50 ml-2">
                    ({selectedFinish})
                  </span>
                )}
                <p className="text-body-sm text-foreground/50 mt-1">Harga sudah termasuk pajak</p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-body-sm mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-heading font-semibold text-body">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                  <span className="text-caption text-foreground/50 ml-2">({product.weight}g each)</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-6">
                <span className="font-heading font-semibold">Total:</span>
                <span className="font-heading font-bold text-primary text-lg">{formatCurrency(totalPrice)}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => {
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: getVariantPrice(),
                      image: product.images[0],
                      weight: product.weight,
                    })
                    setAddedToCart(true)
                    setTimeout(() => setAddedToCart(false), 1500)
                  }}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  {addedToCart ? 'Ditambahkan!' : 'Add to Cart'}
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`px-4 py-3 rounded-lg border transition-colors ${
                    liked ? 'bg-primary text-white border-primary' : 'hover:bg-muted'
                  }`}
                >
                  <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* WhatsApp Quick Order */}
              <a
                href={`https://wa.me/6285137525599?text=${encodeURIComponent(
                  `Halo Kreasik! Saya ingin pesan:\n\n` +
                  `*Produk:* ${product.name}\n` +
                  `*Harga:* ${formatCurrency(getVariantPrice())}\n` +
                  `*Jumlah:* ${quantity}\n` +
                  `*Total:* ${formatCurrency(totalPrice)}\n\n` +
                  `Mohon info lebih lanjut. Terima kasih!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-success bg-success/5 text-success font-heading font-semibold hover:bg-success hover:text-white transition-colors mb-8"
              >
                <MessageCircle size={20} />
                Pesan Cepat via WhatsApp
              </a>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-card">
                  <Truck size={24} className="mx-auto mb-2 text-accent" />
                  <p className="text-caption text-foreground/60">Free Shipping*</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-card">
                  <Shield size={24} className="mx-auto mb-2 text-accent" />
                  <p className="text-caption text-foreground/60">Garansi 7 Hari</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-card">
                  <RefreshCw size={24} className="mx-auto mb-2 text-accent" />
                  <p className="text-caption text-foreground/60">Easy Return</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-heading-md mb-4">Detail Produk</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-body-sm text-foreground/70">
                      <Check size={16} className="text-success mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Calculator Toggle */}
              <button
                onClick={() => setShowShipping(!showShipping)}
                className="w-full btn-secondary flex items-center justify-center gap-2"
              >
                <Truck size={18} />
                Hitung Ongkir
              </button>

              {/* Shipping Calculator */}
              {showShipping && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="bg-white rounded-xl p-6 shadow-card">
                    <ShippingCalculator defaultWeight={product.weight} />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-8">
              Produk Serupa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter((p) => p.category === product.category && p.slug !== product.slug)
                .slice(0, 4)
                .map((related) => {
                  const relatedPrice = related.hasVariants && related.variants
                    ? related.price + (related.variants.scalesPrice['1:64'] ?? 0) + (related.variants.finishesPrice['Polos'] ?? 0)
                    : related.price
                  const relatedMaxPrice = related.hasVariants && related.variants
                    ? related.price + Math.max(...Object.values(related.variants.scalesPrice)) + Math.max(...Object.values(related.variants.finishesPrice))
                    : related.price
                  const priceText = relatedPrice !== relatedMaxPrice
                    ? `${formatCurrency(relatedPrice)} — ${formatCurrency(relatedMaxPrice)}`
                    : formatCurrency(relatedPrice)
                  return (
                    <Link key={related.id} href={`/products/${related.slug}`} className="group">
                      <div className="card">
                        <div className="relative aspect-square bg-muted overflow-hidden">
                          <img
                            src={related.images[0]}
                            alt={related.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {related.badge && (
                            <span className={`absolute top-3 left-3 ${
                              related.badge === 'NEW' ? 'badge-new' : 'badge-sale'
                            }`}>
                              {related.badge}
                            </span>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-heading font-semibold text-body mb-1 group-hover:text-primary transition-colors line-clamp-1">
                            {related.name}
                          </h3>
                          <p className="font-heading font-bold text-primary text-sm">{priceText}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
