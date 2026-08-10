'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Package, Search, Truck, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [trackingInfo, setTrackingInfo] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrackingInfo({
        orderId: orderId.toUpperCase(),
        status: 'Shipped',
        courier: 'JNE',
        trackingNumber: 'JR' + Math.floor(Math.random() * 1000000000),
        estimatedDelivery: '2-3 hari kerja',
        history: [
          { date: '2025-01-15 14:30', status: 'Paket sedang dalam pengiriman', location: 'Jakarta' },
          { date: '2025-01-15 09:00', status: 'Paket telah keluar dari hub', location: 'Jakarta Hub' },
          { date: '2025-01-14 20:00', status: 'Paket tiba di hub', location: 'Jakarta Hub' },
          { date: '2025-01-14 15:00', status: 'Paket telah diambil', location: 'Kreasik Warehouse' },
        ]
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <Link href="/" className="inline-flex items-center gap-2 text-body-sm text-foreground/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>

          <div className="max-w-2xl mx-auto">
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">Lacak Pesanan</h1>
            <p className="text-body text-foreground/60 mb-12">
              Masukkan nomor pesanan Anda untuk melacak status pengiriman
            </p>

            <div className="bg-white rounded-xl p-6 shadow-card mb-8">
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Nomor Pesanan</label>
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                    <input
                      type="text"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder="Contoh: KRS-12345"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <p className="text-caption text-foreground/40 mt-1">
                    Nomor pesanan terdapat di email konfirmasi Anda
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Package size={18} />
                  {loading ? 'Mencari...' : 'Lacak Pesanan'}
                </button>
              </form>
            </div>

            {trackingInfo && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-card">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-heading font-bold text-heading-sm">Order {trackingInfo.orderId}</h2>
                      <p className="text-body-sm text-foreground/60 mt-1">{trackingInfo.courier} - {trackingInfo.trackingNumber}</p>
                    </div>
                    <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-body-sm font-semibold">
                      {trackingInfo.status}
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-body-sm">
                      <Clock size={16} className="text-primary" />
                      <span>Estimasi tiba: <strong>{trackingInfo.estimatedDelivery}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {trackingInfo.history.map((event: any, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-muted'}`} />
                          {idx < trackingInfo.history.length - 1 && (
                            <div className="w-0.5 h-full bg-muted mt-1" />
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="text-body-sm font-semibold text-foreground">{event.status}</p>
                          <p className="text-caption text-foreground/40 mt-0.5">
                            {event.date} - {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-info/5 border border-info/20 rounded-xl p-4 text-center">
                  <p className="text-body-sm text-foreground/70">
                    Butuh bantuan? <Link href="/contact" className="text-primary hover:underline font-semibold">Hubungi Kami</Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
