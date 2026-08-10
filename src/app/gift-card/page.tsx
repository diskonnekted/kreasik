'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Gift, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function GiftCardPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <Link href="/" className="inline-flex items-center gap-2 text-body-sm text-foreground/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Gift size={48} className="mx-auto mb-4 text-primary" />
              <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">Gift Card</h1>
              <p className="text-body text-foreground/60">
                Hadiah sempurna untuk orang tersayang. Gift Card Kreasik bisa digunakan untuk semua produk.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { amount: 50000, label: 'Rp 50.000', desc: 'Cocok untuk hadiah kecil' },
                { amount: 100000, label: 'Rp 100.000', desc: 'Pilihan paling populer' },
                { amount: 250000, label: 'Rp 250.000', desc: 'Untuk pecinta produk unik' },
              ].map((gc) => (
                <div key={gc.amount} className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary transition-colors">
                  <CreditCard size={40} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-heading font-bold text-heading-sm text-primary mb-1">{gc.label}</h3>
                  <p className="text-body-sm text-foreground/60">{gc.desc}</p>
                  <Link href="/products" className="btn-primary mt-4 inline-flex items-center gap-2">
                    Beli Sekarang
                  </Link>
                </div>
              ))}
            </div>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Cara Menggunakan Gift Card</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Beli Gift Card</h3>
                    <p className="text-body-sm text-foreground/60">Pilih nominal dan lakukan pembayaran</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Terima Kode Gift Card</h3>
                    <p className="text-body-sm text-foreground/60">Kode akan dikirim ke email Anda secara instan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Pilih Produk</h3>
                    <p className="text-body-sm text-foreground/60">Jelajahi semua produk Kreasik dan tambahkan ke keranjang</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Masukkan Kode di Checkout</h3>
                    <p className="text-body-sm text-foreground/60">Masukkan kode gift card pada halaman checkout</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Syarat & Ketentuan</h2>
              <ul className="list-disc list-inside text-body-sm text-foreground/70 space-y-2 ml-4">
                <li>Gift card berlaku selama 12 bulan dari tanggal pembelian</li>
                <li>Dapat digunakan untuk pembelian di website Kreasik</li>
                <li>Tidak dapat ditukar dengan uang tunai</li>
                <li>Jika total pembelian lebih kecil dari nominal gift card, selisih tidak dikembalikan</li>
                <li>Jika total pembelian lebih besar, Anda dapat menambahkan pembayaran lain</li>
                <li>Gift card tidak dapat digunakan untuk pembelian gift card lagi</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
