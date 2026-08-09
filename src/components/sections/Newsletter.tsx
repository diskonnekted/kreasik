'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'
import Image from 'next/image'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-heading-lg md:text-heading-xl text-white mb-4">
              Stay Updated Yuk!
            </h2>
            <p className="text-body text-white/80 leading-relaxed mb-8">
              Dapetin info produk baru, drop eksklusif, inspirasi kreatif, sama promo spesial langsung di inbox kamu.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukin email kamu"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit"
                className="bg-foreground text-white font-heading font-semibold px-8 py-3.5 rounded-lg
                         hover:bg-foreground/90 transition-all duration-200 active:scale-[0.98]
                         flex items-center justify-center gap-2 min-w-[140px]"
              >
                {subscribed ? (
                  <>
                    <Check size={18} />
                    Berhasil!
                  </>
                ) : (
                  'Langganan'
                )}
              </button>
            </form>

            <p className="text-caption text-white/50 mt-4">
              Ga spam, bisa unsubscribe kapan aja.
            </p>
          </motion.div>

          {/* QRIS Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-card-hover max-w-sm w-full text-center">
              <div className="inline-flex items-center gap-2 badge bg-accent/10 text-accent mb-6">
                <Check size={14} />
                Payment Available
              </div>
              <h3 className="font-heading font-semibold text-heading-md mb-2">
                Bayar Pakai QRIS
              </h3>
              <p className="text-body-sm text-foreground/60 mb-6">
                Scan buat bayar pakai GoPay, OVO, Dana, ShopeePay, dan lain-lain
              </p>
              <div className="bg-white rounded-xl p-4 inline-block">
                <Image
                  src="/qris-qrcode.jpeg"
                  alt="QRIS Payment Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 mt-6">
                {['GoPay', 'OVO', 'Dana', 'Shopee'].map((ewallet) => (
                  <span
                    key={ewallet}
                    className="text-caption text-foreground/40 bg-muted px-2 py-1 rounded"
                  >
                    {ewallet}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
