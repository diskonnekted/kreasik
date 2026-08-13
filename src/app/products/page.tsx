'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingBag, Star, SlidersHorizontal, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useCart } from '@/context/CartContext'

const PRODUCTS_PER_PAGE = 9

interface Product {
  id: number
  slug: string
  name: string
  category: string
  badge?: string
  image: string
  rating: number
  reviews: number
  description: string
  weight: number
  basePrice: number
  variations?: {
    finish: string[]
    scale: string[]
    scalePrice: Record<string, number>
    finishPrice: Record<string, number>
  }
}

const products: Product[] = [
  {
    id: 13,
    slug: 'resin-angel-girl',
    name: 'Resin Angel Girl',
    category: '3d-print',
    badge: 'NEW',
    image: '/products/resin angel girl.png',
    rating: 5,
    reviews: 12,
    description: 'Patung resin angel girl dengan detail halus. Koleksi limit-edition untuk para collector.',
    weight: 250,
    basePrice: 250000,
    variations: {
      finish: ['Polos', 'Hand Painted'],
      scale: ['1:64', '1:35', '1:12', '1:6'],
      scalePrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 14,
    slug: 'resin-angel-girl-in-ground',
    name: 'Resin Angel Girl In Ground',
    category: '3d-print',
    badge: 'NEW',
    image: '/products/resin angel girl in ground.png',
    rating: 5,
    reviews: 8,
    description: 'Resin angel girl dengan base landscape. Karya seni resin berkualitas tinggi.',
    weight: 350,
    basePrice: 280000,
    variations: {
      finish: ['Polos', 'Hand Painted'],
      scale: ['1:64', '1:35', '1:12', '1:6'],
      scalePrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 15,
    slug: 'resin-general-figure',
    name: 'Resin General Figure',
    category: '3d-print',
    badge: 'NEW',
    image: '/products/resin general figure.png',
    rating: 5,
    reviews: 15,
    description: 'Figure general dengan armor detail. Perfect untuk display koleksi.',
    weight: 300,
    basePrice: 220000,
    variations: {
      finish: ['Polos', 'Hand Painted'],
      scale: ['1:64', '1:35', '1:12', '1:6'],
      scalePrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 16,
    slug: 'resin-girl-in-white-dress',
    name: 'Resin Girl In White Dress',
    category: '3d-print',
    badge: 'NEW',
    image: '/products/resin girl in white dress.png',
    rating: 5,
    reviews: 20,
    description: 'Resin girl in white dress yang elegan. Detail pakaian dan rambut sangat halus.',
    weight: 280,
    basePrice: 265000,
    variations: {
      finish: ['Polos', 'Hand Painted'],
      scale: ['1:64', '1:35', '1:12', '1:6'],
      scalePrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 17,
    slug: 'resin-girl-sit',
    name: 'Resin Girl Sit',
    category: '3d-print',
    badge: 'NEW',
    image: '/products/resin girl sit.png',
    rating: 5,
    reviews: 10,
    description: 'Resin figure girl duduk dengan pose natural. Cocok untuk desk display.',
    weight: 220,
    basePrice: 240000,
    variations: {
      finish: ['Polos', 'Hand Painted'],
      scale: ['1:64', '1:35', '1:12', '1:6'],
      scalePrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 18,
    slug: 'resin-soldier-advancing',
    name: 'Resin Soldier Advancing',
    category: '3d-print',
    badge: 'NEW',
    image: '/products/resin soldier advancing.png',
    rating: 5,
    reviews: 18,
    description: 'Figure soldier advancing dengan pose dinamis. Detail uniform dan senjata sempurna.',
    weight: 270,
    basePrice: 230000,
    variations: {
      finish: ['Polos', 'Hand Painted'],
      scale: ['1:64', '1:35', '1:12', '1:6'],
      scalePrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 300, slug: 'diy-patung-dawet-ayu-banjarnegara', name: 'DIY Patung Dawet Ayu Banjarnegara', category: 'diy', badge: 'NEW',
    image: '/products/diy patung dawet ayu banjarnegara.png', rating: 5, reviews: 0,
    description: 'Kit DIY patung Dawet Ayu khas Banjarnegara. Rak sendiri patung tradisional dengan resin berkualitas.',
    weight: 400, basePrice: 185000,
    variations: {
      finish: ['Polos', 'Cat Sendiri'],
      scale: ['Kecil', 'Sedang', 'Besar'],
      scalePrice: { 'Kecil': 0, 'Sedang': 35000, 'Besar': 75000 },
      finishPrice: { 'Polos': 0, 'Cat Sendiri': 25000 },
    },
  },
  {
    id: 301, slug: 'diy-patung-dawet-ayu-banjarnegara-varian-2', name: 'DIY Patung Dawet Ayu Banjarnegara Varian 2', category: 'diy', badge: 'NEW',
    image: '/products/diy patung dawet ayu banjarnegara varian 2.png', rating: 5, reviews: 0,
    description: 'Varian 2 DIY Patung Dawet Ayu dengan pose berbeda. Kit lengkap dengan resin dan cetakan detail.',
    weight: 380, basePrice: 175000,
    variations: {
      finish: ['Polos', 'Cat Sendiri'],
      scale: ['Kecil', 'Sedang', 'Besar'],
      scalePrice: { 'Kecil': 0, 'Sedang': 30000, 'Besar': 70000 },
      finishPrice: { 'Polos': 0, 'Cat Sendiri': 25000 },
    },
  },
  {
    id: 302, slug: 'diy-resin-candi-arjuna', name: 'DIY Resin Candi Arjuna', category: 'diy', badge: 'NEW',
    image: '/products/diy resin candi arjuna.png', rating: 5, reviews: 0,
    description: 'Kit DIY Candi Arjuna dari Borobudur. Rak sendiri candi legendaris Indonesia dengan resin premium.',
    weight: 450, basePrice: 195000,
    variations: {
      finish: ['Polos', 'Gold Leaf'],
      scale: ['1:100', '1:50', '1:25'],
      scalePrice: { '1:100': 0, '1:50': 45000, '1:25': 95000 },
      finishPrice: { 'Polos': 0, 'Gold Leaf': 55000 },
    },
  },
  {
    id: 303, slug: 'diy-resin-candi-arjuna-varian-2', name: 'DIY Resin Candi Arjuna Varian 2', category: 'diy', badge: 'NEW',
    image: '/products/diy resin candi arjuna varian 2.png', rating: 5, reviews: 0,
    description: 'Varian 2 Candi Arjuna dengan detail arsiran berbeda. Cocok untuk koleksi sejarah dan DIY enthusiast.',
    weight: 420, basePrice: 185000,
    variations: {
      finish: ['Polos', 'Gold Leaf'],
      scale: ['1:100', '1:50', '1:25'],
      scalePrice: { '1:100': 0, '1:50': 40000, '1:25': 90000 },
      finishPrice: { 'Polos': 0, 'Gold Leaf': 55000 },
    },
  },
  {
    id: 304, slug: 'diy-resin-miniatur-tugu-banjarnegara', name: 'DIY Resin Miniatur Tugu Banjarnegara', category: 'diy', badge: 'NEW',
    image: '/products/diy resin miniatur tugu banjarnegara.JPG', rating: 5, reviews: 0,
    description: 'Kit DIY miniatur Tugu Banjarnegara. Monumen ikonik kota Banjarnegara dalam bentuk resin miniatur.',
    weight: 350, basePrice: 165000,
    variations: {
      finish: ['Polos', 'Weathered'],
      scale: ['Kecil', 'Sedang', 'Besar'],
      scalePrice: { 'Kecil': 0, 'Sedang': 25000, 'Besar': 65000 },
      finishPrice: { 'Polos': 0, 'Weathered': 35000 },
    },
  },
  {
    id: 305, slug: 'diy-resin-miniatur-tugu-banjarnegara-varian-1', name: 'DIY Resin Miniatur Tugu Banjarnegara Varian 1', category: 'diy', badge: 'NEW',
    image: '/products/diy resin miniatur tugu banjarnegara varian 1.JPG', rating: 5, reviews: 0,
    description: 'Varian 1 Miniatur Tugu Banjarnegara dengan base landscape. Kit lengkap dengan aksesori landscape.',
    weight: 380, basePrice: 175000,
    variations: {
      finish: ['Polos', 'Weathered'],
      scale: ['Kecil', 'Sedang', 'Besar'],
      scalePrice: { 'Kecil': 0, 'Sedang': 30000, 'Besar': 70000 },
      finishPrice: { 'Polos': 0, 'Weathered': 35000 },
    },
  },
  {
    id: 401, slug: 'diy-bupati-dipayudha', name: 'Bupati Dipayudha', category: 'diy', badge: 'NEW',
    image: '/products/craft bupati dipayudha.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Bupati Dipayudha berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 402, slug: 'diy-dawet-ayu-2', name: 'Dawet Ayu 2', category: 'diy', badge: 'NEW',
    image: '/products/craft dawet ayu 2.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Dawet Ayu 2 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 404, slug: 'diy-dawet-ayu-5', name: 'Dawet Ayu 5', category: 'diy', badge: 'NEW',
    image: '/products/craft dawet ayu 5.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Dawet Ayu 5 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 405, slug: 'diy-dawet-ayu', name: 'Dawet Ayu', category: 'diy', badge: 'NEW',
    image: '/products/craft dawet ayu.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Dawet Ayu berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 406, slug: 'diy-panglima-besar', name: 'Panglima Besar', category: 'diy', badge: 'NEW',
    image: '/products/craft panglima besar.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Panglima Besar berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 407, slug: 'diy-patung-jendral-sudirman', name: 'Patung Jendral Sudirman', category: 'diy', badge: 'NEW',
    image: '/products/craft patung jendral sudirman.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Patung Jendral Sudirman berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 408, slug: 'diy-patung-sukarno', name: 'Patung Sukarno', category: 'diy', badge: 'NEW',
    image: '/products/craft patung sukarno.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Patung Sukarno berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 409, slug: 'diy-pengibaran-bendera-proklamasi-1945', name: 'Pengibaran Bendera Proklamasi 1945', category: 'diy', badge: 'NEW',
    image: '/products/craft pengibaran bendera proklamasi 1945.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Pengibaran Bendera Proklamasi 1945 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 410, slug: 'diy-piala-padel', name: 'Piala Padel', category: 'diy', badge: 'NEW',
    image: '/products/craft piala padel.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Piala Padel berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 411, slug: 'diy-plakat-adv', name: 'Plakat ADV', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat adv.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat ADV berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 412, slug: 'diy-plakat-design-poster', name: 'Plakat Design Poster', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat design poster.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Design Poster berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 413, slug: 'diy-plakat-fatayat-nu', name: 'Plakat Fatayat NU', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat fatayat nu.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Fatayat NU berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 414, slug: 'diy-plakat-hari-koperasi', name: 'Plakat Hari Koperasi', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat hari koperasi.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Hari Koperasi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 415, slug: 'diy-plakat-kriya-kayu', name: 'Plakat Kriya Kayu', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat kriya kayu.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Kriya Kayu berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 416, slug: 'diy-plakat-lkbb', name: 'Plakat LKBB', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat lkbb.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat LKBB berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 417, slug: 'diy-plakat-lomba-menyanyi', name: 'Plakat Lomba Menyanyi', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat lomba menyanyi.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Lomba Menyanyi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 418, slug: 'diy-plakat-man-2', name: 'Plakat MAN 2', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat man 2.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat MAN 2 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 419, slug: 'diy-plakat-pkl', name: 'Plakat PKL', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat pkl.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat PKL berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 420, slug: 'diy-plakat-rohis', name: 'Plakat Rohis', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat rohis.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Rohis berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
  {
    id: 421, slug: 'diy-plakat-smansabara', name: 'Plakat Smansabara', category: 'diy', badge: 'NEW',
    image: '/products/craft plakat smansabara.JPG', rating: 5, reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Smansabara berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.', weight: 300, basePrice: 150000,
  },
]

const categories = [
  { id: 'all', label: 'Semua Produk' },
  { id: '3d-print', label: '3D Print' },
  { id: 'diy', label: 'DIY Crafts' },
  { id: 'junkyard', label: 'Junkyard' },
]

const sortOptions = [
  { id: 'newest', label: 'Terbaru' },
  { id: 'price-low', label: 'Harga: Rendah ke Tinggi' },
  { id: 'price-high', label: 'Harga: Tinggi ke Rendah' },
  { id: 'rating', label: 'Rating Tertinggi' },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000])
  const [sortBy, setSortBy] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBadges, setSelectedBadges] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [hasVariantsOnly, setHasVariantsOnly] = useState(false)
  const { addItem } = useCart()

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleBadge = (badge: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter(b => b !== badge) : [...prev, badge]
    )
  }

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory
      const matchPrice = p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1]
      const matchSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchBadge = selectedBadges.length === 0 || (p.badge ? selectedBadges.includes(p.badge) : selectedBadges.includes('all'))
      const matchRating = p.rating >= minRating
      const matchVariants = !hasVariantsOnly || p.variations !== undefined
      return matchCategory && matchPrice && matchSearch && matchBadge && matchRating && matchVariants
    })

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.basePrice - b.basePrice)
        break
      case 'price-high':
        result.sort((a, b) => b.basePrice - a.basePrice)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
        break
      default:
        result.sort((a, b) => b.id - a.id)
    }

    return result
  }, [selectedCategory, priceRange, sortBy, searchQuery, selectedBadges, minRating, hasVariantsOnly])

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)
  }, [filteredProducts, currentPage])

  // Reset ke halaman 1 ketika filter berubah
  const handleFilterChange = (updater: (prev: any) => any) => {
    setCurrentPage(1)
    updater({ selectedCategory, priceRange, sortBy, searchQuery })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const clearFilters = () => {
    setCurrentPage(1)
    setSelectedCategory('all')
    setPriceRange([0, 500000])
    setSortBy('newest')
    setSearchQuery('')
    setSelectedBadges([])
    setMinRating(0)
    setHasVariantsOnly(false)
  }

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[1] < 500000 || searchQuery !== '' || selectedBadges.length > 0 || minRating > 0 || hasVariantsOnly

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero - Full width on mobile */}
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <h1 className="font-heading font-bold text-heading-md md:text-heading-lg mb-2">
            Semua Produk
          </h1>
          <p className="text-body text-foreground/60">
            Temuin produk unik & kreatif yang kamu cari
          </p>
        </div>

        {/* Main Content - Full width on mobile */}
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-xl p-6 shadow-card space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-body-sm flex items-center gap-2">
                    <SlidersHorizontal size={16} />
                    Filter
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-caption text-accent hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Search */}
                <div>
                  <h4 className="font-heading font-semibold text-body-sm mb-3">Cari Produk</h4>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setCurrentPage(1)}
                    placeholder="Cari produk..."
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="font-heading font-semibold text-body-sm mb-3">Kategori</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label
                        key={cat.id}
                        className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors ${
                          selectedCategory === cat.id ? 'bg-primary/5 text-primary' : 'hover:bg-muted'
                        }`}
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="accent-primary"
                        />
                        <span className="text-body-sm">{cat.label}</span>
                        <span className="text-caption text-foreground/40 ml-auto">
                          {cat.id === 'all'
                            ? products.length
                            : products.filter((p) => p.category === cat.id).length}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-heading font-semibold text-body-sm mb-3">Harga Maks</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-primary"
                    />
                    <div className="flex items-center justify-between text-caption text-foreground/50 bg-muted px-3 py-2 rounded">
                      <span>{formatCurrency(priceRange[0])}</span>
                      <span>—</span>
                      <span>{formatCurrency(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Badge Filter */}
                <div>
                  <h4 className="font-heading font-semibold text-body-sm mb-3">Tipe</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedBadges.includes('NEW')}
                        onChange={() => toggleBadge('NEW')}
                        className="accent-primary"
                      />
                      <span className="text-body-sm">🆕 NEW</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedBadges.includes('SALE')}
                        onChange={() => toggleBadge('SALE')}
                        className="accent-primary"
                      />
                      <span className="text-body-sm">🏷️ SALE</span>
                    </label>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-heading font-semibold text-body-sm mb-3">Rating Minimal</h4>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                          className="accent-primary"
                        />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-caption text-foreground/50">& up</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === 0}
                        onChange={() => setMinRating(0)}
                        className="accent-primary"
                      />
                      <span className="text-body-sm">Semua Rating</span>
                    </label>
                  </div>
                </div>

                {/* Variants Filter */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                    <input
                      type="checkbox"
                      checked={hasVariantsOnly}
                      onChange={() => setHasVariantsOnly(!hasVariantsOnly)}
                      className="accent-primary"
                    />
                    <span className="text-body-sm">Hanya produk dengan variasi</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full btn-secondary flex items-center justify-center gap-2"
              >
                <SlidersHorizontal size={18} />
                Filter & Urutkan
              </button>

              {/* Mobile Filter Panel */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-card space-y-6">
                      {/* Search */}
                      <div>
                        <h4 className="font-heading font-semibold text-body-sm mb-3">Cari Produk</h4>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setCurrentPage(1)}
                          placeholder="Cari nama atau deskripsi..."
                          className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <h4 className="font-heading font-semibold text-body-sm mb-3">Kategori</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`px-3 py-2 rounded-lg text-body-sm font-heading transition-colors ${
                                selectedCategory === cat.id
                                  ? 'bg-primary text-white'
                                  : 'bg-muted hover:bg-muted/80'
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Range */}
                      <div>
                        <h4 className="font-heading font-semibold text-body-sm mb-3">Maks Harga</h4>
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="0"
                            max="500000"
                            step="10000"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full accent-primary"
                          />
                          <p className="text-caption text-foreground/60 text-center">
                            {formatCurrency(priceRange[1])}
                          </p>
                        </div>
                      </div>

                      {/* Badge Filter */}
                      <div>
                        <h4 className="font-heading font-semibold text-body-sm mb-3">Tipe</h4>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => toggleBadge('NEW')}
                            className={`px-3 py-2 rounded-lg text-body-sm transition-colors ${
                              selectedBadges.includes('NEW')
                                ? 'bg-primary text-white'
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                          >
                            🆕 NEW
                          </button>
                          <button
                            onClick={() => toggleBadge('SALE')}
                            className={`px-3 py-2 rounded-lg text-body-sm transition-colors ${
                              selectedBadges.includes('SALE')
                                ? 'bg-primary text-white'
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                          >
                            🏷️ SALE
                          </button>
                        </div>
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <h4 className="font-heading font-semibold text-body-sm mb-3">Rating Minimal</h4>
                        <div className="flex gap-2">
                          {[0, 1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              onClick={() => setMinRating(rating)}
                              className={`px-3 py-2 rounded-lg text-body-sm font-heading transition-colors ${
                                minRating === rating
                                  ? 'bg-primary text-white'
                                  : 'bg-muted hover:bg-muted/80'
                              }`}
                            >
                              {rating === 0 ? 'Semua' : `${rating}+`}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Variants Filter */}
                      <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={hasVariantsOnly}
                            onChange={() => setHasVariantsOnly(!hasVariantsOnly)}
                            className="accent-primary"
                          />
                          <span className="text-body-sm">Hanya produk dengan variasi</span>
                        </label>
                      </div>

                      {/* Sort */}
                      <div>
                        <h4 className="font-heading font-semibold text-body-sm mb-3">Urutkan</h4>
                        <select
                          value={sortBy}
                          onChange={(e) => { setCurrentPage(1); setSortBy(e.target.value) }}
                          className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {sortOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Clear */}
                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="w-full btn-secondary text-body-sm"
                        >
                          Reset Semua Filter
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Active Filter Tags */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-caption font-semibold">
                      {categories.find(c => c.id === selectedCategory)?.label}
                      <button onClick={() => setSelectedCategory('all')} className="hover:text-destructive">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {priceRange[1] < 500000 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-caption font-semibold">
                      Max {formatCurrency(priceRange[1])}
                      <button onClick={() => setPriceRange([0, 500000])} className="hover:text-destructive">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-caption font-semibold">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="hover:text-destructive">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedBadges.map(badge => (
                    <span key={badge} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 text-success text-caption font-semibold">
                      {badge}
                      <button onClick={() => toggleBadge(badge)} className="hover:text-destructive">
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  {minRating > 0 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-warning/10 text-warning text-caption font-semibold">
                      {'⭐'.repeat(minRating)} & up
                      <button onClick={() => setMinRating(0)} className="hover:text-destructive">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {hasVariantsOnly && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-info/10 text-info text-caption font-semibold">
                      Dengan Variasi
                      <button onClick={() => setHasVariantsOnly(false)} className="hover:text-destructive">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Sort & Count - Desktop */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <div className="flex-1 max-w-sm">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setCurrentPage(1)}
                    placeholder="Cari produk..."
                    className="w-full px-3 py-2 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="text-body-sm text-foreground/60 ml-6">
                  Menampilkan <span className="font-semibold text-foreground">{paginatedProducts.length}</span> dari <span className="font-semibold text-foreground">{filteredProducts.length}</span> produk
                </p>
                <div className="flex items-center gap-2 ml-6">
                  <span className="text-body-sm text-foreground/60">Urutkan:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => { setCurrentPage(1); setSortBy(e.target.value) }}
                    className="px-3 py-1.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sort & Count - Mobile (when filters closed) */}
              <div className="lg:hidden mb-4 flex items-center justify-between">
                <p className="text-body-sm text-foreground/60">
                  Menampilkan <span className="font-semibold text-foreground">{paginatedProducts.length}</span> dari <span className="font-semibold text-foreground">{filteredProducts.length}</span> produk
                </p>
              </div>

              {/* Products */}
              {paginatedProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  <AnimatePresence>
                    {paginatedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="group"
                      >
                        <Link href={`/products/${product.slug}`} className="block">
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
                                <span
                                  className={`absolute top-3 left-3 ${
                                    product.badge === 'NEW' ? 'badge-new' : 'badge-sale'
                                  }`}
                                >
                                  {product.badge}
                                </span>
                              )}
                              {/* Quick Actions */}
                              <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <button
                                  onClick={() => toggleLike(product.id)}
                                  className={`p-2.5 rounded-full bg-white shadow-md transition-colors ${
                                    likedProducts.has(product.id)
                                      ? 'bg-primary text-white'
                                      : 'hover:bg-gray-100'
                                  }`}
                                  aria-label="Add to wishlist"
                                >
                                  <Heart
                                    size={16}
                                    fill={likedProducts.has(product.id) ? 'currentColor' : 'none'}
                                  />
                                </button>
                                <button
                                  onClick={() => addItem({ id: product.id, name: product.name, price: product.basePrice, image: product.image, weight: product.weight })}
                                  className="p-2.5 rounded-full bg-white shadow-md hover:bg-accent hover:text-white transition-colors"
                                  aria-label="Add to cart"
                                >
                                  <ShoppingBag size={16} />
                                </button>
                              </div>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                              <p className="text-caption text-foreground/50 mb-1 capitalize">
                                {product.category === '3d-print'
                                  ? '3D Print'
                                  : product.category === 'apparel'
                                  ? 'Apparel'
                                  : product.category === 'diy'
                                  ? 'DIY Crafts'
                                  : product.category === 'print'
                                  ? 'Print Products'
                                  : product.category === 'junkyard'
                                  ? 'Junkyard'
                                  : product.category}
                              </p>
                              <h3 className="font-heading font-semibold text-body mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                {product.name}
                              </h3>
                              <p className="text-body-sm text-foreground/50 mb-2 line-clamp-2">
                                {product.description}
                              </p>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={14}
                                      className={
                                        i < product.rating
                                          ? 'text-yellow-400 fill-yellow-400'
                                          : 'text-gray-300'
                                      }
                                    />
                                  ))}
                                </div>
                                <span className="text-caption text-foreground/50">
                                  ({product.reviews})
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="font-heading font-bold text-primary">
                                  {formatCurrency(product.basePrice)}
                                </p>
                                <p className="text-caption text-foreground/40">
                                  {product.weight}g
                                </p>
                              </div>
                              {product.variations && (
                                <p className="text-caption text-accent/70 mt-2">
                                  Tersedia dalam berbagai skala & finish
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-foreground/30" />
                  </div>
                  <h3 className="font-heading font-semibold text-heading-md mb-2">
                    Produk tidak ditemukan
                  </h3>
                  <p className="text-body text-foreground/60 mb-6">
                    Coba ubah filter atau kata kunci pencarian kamu
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Reset Semua Filter
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg border font-heading text-body-sm transition-colors ${
                        currentPage === page
                          ? 'bg-primary text-white border-primary'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
