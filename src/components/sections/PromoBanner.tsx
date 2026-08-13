'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

interface PromoProduct {
  id: number
  slug: string
  name: string
  originalPrice: number
  promoPrice: number
  image: string
  description: string
}

const promoProducts: PromoProduct[] = [
  {
    id: 423,
    slug: 'diy-merdeka!',
    name: 'Merdeka!',
    originalPrice: 150000,
    promoPrice: 124500, // 17% off
    image: '/products/craft merdeka!.JPG',
    description: 'Kit DIY miniatur bertuliskan semangat kemerdekaan dengan ornamen merah putih.'
  },
  {
    id: 422,
    slug: 'diy-diorama-proklamasi',
    name: 'Diorama Proklamasi',
    originalPrice: 150000,
    promoPrice: 124500,
    image: '/products/craft diorama proklamasi.JPG',
    description: 'Kit DIY diorama peristiwa bersejarah pembacaan teks Proklamasi Kemerdekaan.'
  },
  {
    id: 409,
    slug: 'diy-pengibaran-bendera-proklamasi-1945',
    name: 'Pengibaran Bendera Proklamasi 1945',
    originalPrice: 150000,
    promoPrice: 124500,
    image: '/products/craft pengibaran bendera proklamasi 1945.JPG',
    description: 'Kit DIY miniatur momen sakral pengibaran bendera pusaka pertama kali di tahun 1945.'
  }
]

export default function PromoBanner() {
  const { addItem } = useCart()
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 17, minutes: 45, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prev
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-[#c8102e]/5 via-white to-[#c8102e]/5 overflow-hidden">
      <div className="container-narrow mx-auto">
        {/* Banner Card */}
        <div className="relative bg-gradient-to-r from-[#c8102e] to-[#a00c22] rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden mb-16">
          {/* Background Decorative Patterns */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-12 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white font-heading font-bold text-caption tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/10">
                Spesial Hari Kemerdekaan RI ke-81
              </span>
              <h2 className="font-heading font-extrabold text-heading-lg md:text-heading-xl leading-tight mb-4">
                Promo Semarak Perjuangan Diskon 17%
              </h2>
              <p className="text-white/80 text-body mb-8 leading-relaxed">
                Sambut hari bersejarah bangsa dengan merakit langsung momen-momen emas perjuangan kemerdekaan. Dapatkan kit DIY eksklusif edisi terbatas dengan potongan harga spesial kemerdekaan.
              </p>
              
              {/* Countdown Timer */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="text-body-sm font-heading font-bold text-white/70 w-full lg:w-auto mb-2 lg:mb-0">
                  Sisa Waktu Promo:
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-heading-md font-heading font-bold min-w-[3.5rem] border border-white/5">
                      {formatNumber(timeLeft.days)}
                    </div>
                    <span className="text-caption text-white/60 mt-1">Hari</span>
                  </div>
                  <span className="font-bold text-heading-sm">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-heading-md font-heading font-bold min-w-[3.5rem] border border-white/5">
                      {formatNumber(timeLeft.hours)}
                    </div>
                    <span className="text-caption text-white/60 mt-1">Jam</span>
                  </div>
                  <span className="font-bold text-heading-sm">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-heading-md font-heading font-bold min-w-[3.5rem] border border-white/5">
                      {formatNumber(timeLeft.minutes)}
                    </div>
                    <span className="text-caption text-white/60 mt-1">Menit</span>
                  </div>
                  <span className="font-bold text-heading-sm">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-heading-md font-heading font-bold min-w-[3.5rem] border border-white/5">
                      {formatNumber(timeLeft.seconds)}
                    </div>
                    <span className="text-caption text-white/60 mt-1">Detik</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call To Action Button */}
            <div className="flex-shrink-0">
              <Link href="#independence-promo-products" className="inline-flex items-center gap-3 bg-white text-[#c8102e] font-heading font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Jelajahi Produk Kemerdekaan
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Promo Products Row */}
        <div id="independence-promo-products" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-heading-md md:text-heading-lg mb-2 text-foreground">
              Kit DIY Spesial Kemerdekaan
            </h3>
            <p className="text-body-sm text-foreground/50 max-w-md mx-auto">
              Miliki miniatur sejarah perjuangan bangsa dengan pengerjaan detail yang presisi dan berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promoProducts.map(p => (
              <motion.div
                key={p.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border border-border/60 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Independence Badge */}
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-[#c8102e] to-[#a00c22] text-white font-heading font-bold text-caption px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Diskon 17%
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <span className="text-caption font-semibold text-foreground/40 ml-1">(5.0)</span>
                  </div>
                  
                  <h4 className="font-heading font-bold text-heading-xs text-foreground mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h4>
                  
                  <p className="text-body-sm text-foreground/60 mb-6 flex-grow leading-relaxed">
                    {p.description}
                  </p>

                  {/* Price Row */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                    <div>
                      <span className="block text-caption text-foreground/30 line-through">
                        {formatCurrency(p.originalPrice)}
                      </span>
                      <span className="font-heading font-extrabold text-body text-[#c8102e]">
                        {formatCurrency(p.promoPrice)}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => addItem({
                        id: p.id,
                        name: p.name,
                        price: p.promoPrice,
                        image: p.image,
                        weight: 300
                      })}
                      className="bg-[#c8102e]/10 text-[#c8102e] hover:bg-[#c8102e] hover:text-white p-3 rounded-2xl transition-all duration-300 hover:scale-105"
                      aria-label="Tambah ke keranjang"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
