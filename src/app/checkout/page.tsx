'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import ShippingCalculator from '@/components/sections/ShippingCalculator'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

const demoCart: CartItem[] = [
  {
    id: 13,
    name: 'Resin Angel Girl',
    price: 370000,
    quantity: 1,
    image: '/products/resin angel girl.png',
  },
  {
    id: 15,
    name: 'Resin General Figure',
    price: 340000,
    quantity: 1,
    image: '/products/resin general figure.png',
  },
]

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>(demoCart)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    postalCode: '',
    notes: '',
  })
  const [shippingCost, setShippingCost] = useState(0)
  const [shippingInfo, setShippingInfo] = useState<{
    cost: number
    etd: string
    courier: string
    service: string
  } | null>(null)
  const [showShipping, setShowShipping] = useState(false)

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const isFreeShipping = subtotal >= 200000
  const effectiveShippingCost = isFreeShipping ? 0 : shippingCost
  const total = subtotal + effectiveShippingCost
  const freeShippingRemaining = Math.max(0, 200000 - subtotal)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const handleShippingSelect = (cost: number, etd: string, courier: string, service: string) => {
    setShippingCost(cost)
    setShippingInfo({ cost, etd, courier, service })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Order placed!\nShipping: ${shippingInfo?.courier} - ${shippingInfo?.service}\nEstimated: ${shippingInfo?.etd} days\nTotal: ${formatCurrency(total)}`)
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-body-sm text-foreground/50 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Checkout</span>
        </nav>

        <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Info */}
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h2 className="font-heading font-semibold text-heading-md mb-6">Info Pengiriman</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-caption text-foreground/60 mb-1">Nama Depan *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-foreground/60 mb-1">Nama Belakang *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-foreground/60 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-foreground/60 mb-1">No. HP *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="08123456789"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-caption text-foreground/60 mb-1">Alamat Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Jl. Contoh No. 123"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-caption text-foreground/60 mb-1">Alamat Baris 2</label>
                    <input
                      type="text"
                      value={formData.address2}
                      onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Gedung, lantai, dll (opsional)"
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-foreground/60 mb-1">Kota *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Jakarta"
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-foreground/60 mb-1">Kode Pos *</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-caption text-foreground/60 mb-1">Catatan Pesanan</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Catetan buat kurir..."
                  />
                </div>
              </div>

              {/* Shipping Calculator */}
              <div className="bg-white rounded-xl p-6 shadow-card">
                <button
                  type="button"
                  onClick={() => setShowShipping(!showShipping)}
                  className="flex items-center justify-between w-full"
                >
                  <h2 className="font-heading font-semibold text-heading-md">Ongkos Kirim</h2>
                  {shippingInfo ? (
                    <span className="text-accent font-heading font-semibold text-body-sm">
                      {shippingInfo.courier} - {formatCurrency(shippingCost)}
                    </span>
                  ) : (
                    <ChevronRight
                      size={20}
                      className={`text-foreground/40 transition-transform ${showShipping ? 'rotate-90' : ''}`}
                    />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: showShipping ? 'auto' : 0, opacity: showShipping ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    <ShippingCalculator
                      defaultWeight={1000}
                      onShippingSelect={handleShippingSelect}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-card sticky top-24">
                <h2 className="font-heading font-semibold text-heading-md mb-6">Ringkasan Belanja</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-medium text-body-sm text-foreground truncate">{item.name}</p>
                        <p className="text-caption text-foreground/50">{formatCurrency(item.price)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-body-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-foreground/40 hover:text-destructive transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2">
                  {/* Free Shipping Banner */}
                  {!isFreeShipping && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-2">
                      <p className="text-caption text-primary font-semibold mb-1">
                        {freeShippingRemaining > 0 ? (
                          <>
                            Tambah <span className="font-heading font-bold">{formatCurrency(freeShippingRemaining)}</span> lagi untuk{' '}
                            <span className="underline">Gratis Ongkir!</span>
                          </>
                        ) : (
                          '🎉 Gratis Ongkir!'
                        )}
                      </p>
                      <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (subtotal / 200000) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {isFreeShipping && (
                    <div className="bg-success/5 border border-success/20 rounded-lg p-3 mb-2">
                      <p className="text-caption text-success font-semibold flex items-center gap-1">
                        <Check size={14} />
                        Gratis Ongkir untuk pesanan ini!
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between text-body-sm">
                    <span className="text-foreground/60">Subtotal</span>
                    <span className="font-heading font-semibold">{formatCurrency(subtotal)}</span>
                  </div>
                  {shippingCost > 0 && !isFreeShipping && (
                    <div className="flex justify-between text-body-sm">
                      <span className="text-foreground/60">
                        Ongkir ({shippingInfo?.courier})
                      </span>
                      <span className="font-heading font-semibold">{formatCurrency(shippingCost)}</span>
                    </div>
                  )}
                  {isFreeShipping && shippingCost > 0 && (
                    <div className="flex justify-between text-body-sm">
                      <span className="text-foreground/60">Ongkir ({shippingInfo?.courier})</span>
                      <span className="font-heading font-semibold text-success line-through">{formatCurrency(shippingCost)}</span>
                    </div>
                  )}
                  {shippingCost === 0 && showShipping && !isFreeShipping && (
                    <div className="flex justify-between text-body-sm text-foreground/40">
                      <span>Ongkir</span>
                      <span>Belum dipilih</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-heading font-semibold text-body">Total</span>
                    <span className="font-heading font-bold text-primary text-heading-sm">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mt-6 space-y-3">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-accent transition-colors">
                    <input type="radio" name="payment" defaultChecked className="text-accent" />
                    <div>
                      <p className="font-heading font-medium text-body-sm">QRIS</p>
                      <p className="text-caption text-foreground/50">GoPay, OVO, Dana, ShopeePay</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-accent transition-colors">
                    <input type="radio" name="payment" className="text-accent" />
                    <div>
                      <p className="font-heading font-medium text-body-sm">Transfer Bank</p>
                      <p className="text-caption text-foreground/50">BCA, Mandiri, BNI, BRI</p>
                    </div>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={shippingCost === 0 && showShipping}
                  className="w-full btn-primary mt-6 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <ShoppingBag size={18} />
                  Bayar {formatCurrency(total)}
                </button>

                <Link href="/" className="flex items-center gap-1 text-accent text-body-sm mt-4 hover:underline">
                  <ArrowLeft size={14} />
                  Lanjut Belanja
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
