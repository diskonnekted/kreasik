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
    description: 'Patung resin angel girl dengan detail halus. Koleksi limit-edition untuk para collector.',
    weight: 250,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
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
    description: 'Resin angel girl dengan base landscape. Karya seni resin berkualitas tinggi.',
    weight: 350,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
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
    description: 'Figure general dengan armor detail. Perfect untuk display koleksi.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
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
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
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
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
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
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    ...resinVariants,
  },
  {
    id: 300,
    name: 'DIY Patung Dawet Ayu Banjarnegara',
    slug: 'diy-patung-dawet-ayu-banjarnegara',
    price: 185000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/diy patung dawet ayu banjarnegara.png'],
    rating: 5,
    reviews: 0,
    description: 'Kit DIY patung Dawet Ayu khas Banjarnegara. Rak sendiri patung tradisional dengan resin berkualitas.',
    weight: 400,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: true,
    variants: {
      scales: ["Kecil","Sedang","Besar"],
      scalesPrice: {
        'Kecil': 0,
        'Sedang': 35000,
        'Besar': 75000
      },
      finishes: ["Polos","Cat Sendiri"],
      finishesPrice: {
        'Polos': 0,
        'Cat Sendiri': 25000
      }
    },
  },
  {
    id: 301,
    name: 'DIY Patung Dawet Ayu Banjarnegara Varian 2',
    slug: 'diy-patung-dawet-ayu-banjarnegara-varian-2',
    price: 175000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/diy patung dawet ayu banjarnegara varian 2.png'],
    rating: 5,
    reviews: 0,
    description: 'Varian 2 DIY Patung Dawet Ayu dengan pose berbeda. Kit lengkap dengan resin dan cetakan detail.',
    weight: 380,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: true,
    variants: {
      scales: ["Kecil","Sedang","Besar"],
      scalesPrice: {
        'Kecil': 0,
        'Sedang': 30000,
        'Besar': 70000
      },
      finishes: ["Polos","Cat Sendiri"],
      finishesPrice: {
        'Polos': 0,
        'Cat Sendiri': 25000
      }
    },
  },
  {
    id: 302,
    name: 'DIY Resin Candi Arjuna',
    slug: 'diy-resin-candi-arjuna',
    price: 195000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/diy resin candi arjuna.png'],
    rating: 5,
    reviews: 0,
    description: 'Kit DIY Candi Arjuna dari Borobudur. Rak sendiri candi legendaris Indonesia dengan resin premium.',
    weight: 450,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: true,
    variants: {
      scales: ["1:100","1:50","1:25"],
      scalesPrice: {
        '1:100': 0,
        '1:50': 45000,
        '1:25': 95000
      },
      finishes: ["Polos","Gold Leaf"],
      finishesPrice: {
        'Polos': 0,
        'Gold Leaf': 55000
      }
    },
  },
  {
    id: 303,
    name: 'DIY Resin Candi Arjuna Varian 2',
    slug: 'diy-resin-candi-arjuna-varian-2',
    price: 185000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/diy resin candi arjuna varian 2.png'],
    rating: 5,
    reviews: 0,
    description: 'Varian 2 Candi Arjuna dengan detail arsiran berbeda. Cocok untuk koleksi sejarah dan DIY enthusiast.',
    weight: 420,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: true,
    variants: {
      scales: ["1:100","1:50","1:25"],
      scalesPrice: {
        '1:100': 0,
        '1:50': 40000,
        '1:25': 90000
      },
      finishes: ["Polos","Gold Leaf"],
      finishesPrice: {
        'Polos': 0,
        'Gold Leaf': 55000
      }
    },
  },
  {
    id: 304,
    name: 'DIY Resin Miniatur Tugu Banjarnegara',
    slug: 'diy-resin-miniatur-tugu-banjarnegara',
    price: 165000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/diy resin miniatur tugu banjarnegara.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Kit DIY miniatur Tugu Banjarnegara. Monumen ikonik kota Banjarnegara dalam bentuk resin miniatur.',
    weight: 350,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: true,
    variants: {
      scales: ["Kecil","Sedang","Besar"],
      scalesPrice: {
        'Kecil': 0,
        'Sedang': 25000,
        'Besar': 65000
      },
      finishes: ["Polos","Weathered"],
      finishesPrice: {
        'Polos': 0,
        'Weathered': 35000
      }
    },
  },
  {
    id: 305,
    name: 'DIY Resin Miniatur Tugu Banjarnegara Varian 1',
    slug: 'diy-resin-miniatur-tugu-banjarnegara-varian-1',
    price: 175000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/diy resin miniatur tugu banjarnegara varian 1.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Varian 1 Miniatur Tugu Banjarnegara dengan base landscape. Kit lengkap dengan aksesori landscape.',
    weight: 380,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: true,
    variants: {
      scales: ["Kecil","Sedang","Besar"],
      scalesPrice: {
        'Kecil': 0,
        'Sedang': 30000,
        'Besar': 70000
      },
      finishes: ["Polos","Weathered"],
      finishesPrice: {
        'Polos': 0,
        'Weathered': 35000
      }
    },
  },
  {
    id: 401,
    name: 'Bupati Dipayudha',
    slug: 'diy-bupati-dipayudha',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft bupati dipayudha.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Bupati Dipayudha berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 402,
    name: 'Dawet Ayu 2',
    slug: 'diy-dawet-ayu-2',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft dawet ayu 2.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Dawet Ayu 2 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 404,
    name: 'Dawet Ayu 5',
    slug: 'diy-dawet-ayu-5',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft dawet ayu 5.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Dawet Ayu 5 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 405,
    name: 'Dawet Ayu',
    slug: 'diy-dawet-ayu',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft dawet ayu.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Dawet Ayu berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 406,
    name: 'Panglima Besar',
    slug: 'diy-panglima-besar',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft panglima besar.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Panglima Besar berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 407,
    name: 'Patung Jendral Sudirman',
    slug: 'diy-patung-jendral-sudirman',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft patung jendral sudirman.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Patung Jendral Sudirman berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 408,
    name: 'Patung Sukarno',
    slug: 'diy-patung-sukarno',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft patung sukarno.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Patung Sukarno berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 409,
    name: 'Pengibaran Bendera Proklamasi 1945',
    slug: 'diy-pengibaran-bendera-proklamasi-1945',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft pengibaran bendera proklamasi 1945.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Pengibaran Bendera Proklamasi 1945 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 410,
    name: 'Piala Padel',
    slug: 'diy-piala-padel',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft piala padel.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Piala Padel berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 411,
    name: 'Plakat ADV',
    slug: 'diy-plakat-adv',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat adv.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat ADV berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 412,
    name: 'Plakat Design Poster',
    slug: 'diy-plakat-design-poster',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat design poster.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Design Poster berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 413,
    name: 'Plakat Fatayat NU',
    slug: 'diy-plakat-fatayat-nu',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat fatayat nu.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Fatayat NU berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 414,
    name: 'Plakat Hari Koperasi',
    slug: 'diy-plakat-hari-koperasi',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat hari koperasi.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Hari Koperasi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 415,
    name: 'Plakat Kriya Kayu',
    slug: 'diy-plakat-kriya-kayu',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat kriya kayu.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Kriya Kayu berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 416,
    name: 'Plakat LKBB',
    slug: 'diy-plakat-lkbb',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat lkbb.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat LKBB berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 417,
    name: 'Plakat Lomba Menyanyi',
    slug: 'diy-plakat-lomba-menyanyi',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat lomba menyanyi.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Lomba Menyanyi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 418,
    name: 'Plakat MAN 2',
    slug: 'diy-plakat-man-2',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat man 2.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat MAN 2 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 419,
    name: 'Plakat PKL',
    slug: 'diy-plakat-pkl',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat pkl.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat PKL berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 420,
    name: 'Plakat Rohis',
    slug: 'diy-plakat-rohis',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat rohis.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Rohis berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 421,
    name: 'Plakat Smansabara',
    slug: 'diy-plakat-smansabara',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft plakat smansabara.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Plakat Smansabara berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 422,
    name: 'Diorama Proklamasi',
    slug: 'diy-diorama-proklamasi',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft diorama proklamasi.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Diorama Proklamasi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 423,
    name: 'Merdeka!',
    slug: 'diy-merdeka!',
    price: 150000,
    category: 'diy',
    badge: 'NEW',
    images: ['/products/craft merdeka!.JPG'],
    rating: 5,
    reviews: 0,
    description: 'Produk kerajinan tangan kreatif Merdeka! berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    weight: 300,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
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
  
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })
  const [isZoomed, setIsZoomed] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPos({ x, y })
  }

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
              <div 
                className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-4 shadow-card cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-200 ease-out"
                  style={{
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                  }}
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
