'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Truck, Clock, Package, Check, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ShippingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="container-narrow mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <Link href="/" className="inline-flex items-center gap-2 text-body-sm text-foreground/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">Info Pengiriman</h1>
            <p className="text-body text-foreground/60 mb-12">
              Informasi lengkap tentang pengiriman pesanan Anda
            </p>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Kurir合作伙伴</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck size={24} className="text-primary" />
                    <h3 className="font-heading font-semibold text-body">JNE</h3>
                  </div>
                  <p className="text-body-sm text-foreground/60">Reguler, YES, TIKI</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck size={24} className="text-accent" />
                    <h3 className="font-heading font-semibold text-body">J&T</h3>
                  </div>
                  <p className="text-body-sm text-foreground/60">Reguler, Express</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck size={24} className="text-success" />
                    <h3 className="font-heading font-semibold text-body">SiCepat</h3>
                  </div>
                  <p className="text-body-sm text-foreground/60">REG, YAYASi, SERPAT</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck size={24} className="text-warning" />
                    <h3 className="font-heading font-semibold text-body">Anteraja</h3>
                  </div>
                  <p className="text-body-sm text-foreground/60">Reguler, Same Day</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Estimasi Waktu Pengiriman</h2>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Jabodetabek</h3>
                    <p className="text-body-sm text-foreground/60">2-3 hari kerja</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Sumatera</h3>
                    <p className="text-body-sm text-foreground/60">3-5 hari kerja</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Clock size={20} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Java (selain Jabodetabek)</h3>
                    <p className="text-body-sm text-foreground/60">2-4 hari kerja</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Clock size={20} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Kalimantan, Sulawesi, Bali & Nusa Tenggara</h3>
                    <p className="text-body-sm text-foreground/60">4-7 hari kerja</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Clock size={20} className="text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Papua & Maluku</h3>
                    <p className="text-body-sm text-foreground/60">5-10 hari kerja</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
                <h2 className="font-heading font-semibold text-heading-sm mb-6">Pengambilan Langsung</h2>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-body mb-2">Ambil di Tempat (Gratis)</h3>
                      <p className="text-body-sm text-foreground/70 mb-2">
                        Anda bisa mengambil pesanan langsung di toko kami tanpa biaya pengiriman:
                      </p>
                      <ul className="text-body-sm text-foreground/70 space-y-1 ml-4">
                        <li><strong>Alamat:</strong> Jl. S. Parman, Parakancanggah, Banjarnegara 53412</li>
                        <li><strong>Jam Ambil:</strong> Senin - Sabtu, 08.00 - 17.00 WIB</li>
                        <li><strong>Telepon:</strong> <a href="tel:085137525599" className="text-primary hover:underline">0851-3752-5599</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

            <section>
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Cara Melacak Pesanan</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Cek Email Konfirmasi</h3>
                    <p className="text-body-sm text-foreground/60">Setelah pesanan dikonfirmasi, Anda akan menerima email dengan nomor tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Kunjungi Website Kurir</h3>
                    <p className="text-body-sm text-foreground/60">Masukkan nomor tracking di website kurir yang bersangkutan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Pantau Status Pengiriman</h3>
                    <p className="text-body-sm text-foreground/60">Lihat status terbaru dan estimasi hari penerimaan paket Anda</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
