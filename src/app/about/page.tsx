'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Heart, Award, Users, MapPin, Phone, Clock } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-8">Tentang Kreasik Production</h1>

            <div className="prose prose-sm max-w-none">
              <section className="mb-8">
                <p className="text-body-lg text-foreground/80 leading-relaxed mb-6">
                  <strong>Kreasik Production</strong> adalah usaha jasa percetakan, digital printing, dan sablon yang berlokasi di Banjarnegara, Jawa Tengah. Berdiri di Jalan S. Parman, Kelurahan Parakancanggah, kami melayani berbagai kebutuhan cetak untuk individu, UMKM, hingga perusahaan.
                </p>
                <p className="text-body text-foreground/70 leading-relaxed mb-6">
                  Dengan pengalaman di bidang percetakan dan pembuatan produk custom, kami berkomitmen memberikan hasil berkualitas tinggi dengan harga yang terjangkau. Dari dokumen cetak, banner, spanduk, hingga produk custom seperti mug, tumbler, dan atribut promosi — semua bisa kami kerjakan.
                </p>
              </section>

              <section className="mb-8">
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-card">
                    <Heart size={32} className="mx-auto mb-3 text-primary" />
                    <h3 className="font-heading font-semibold text-body mb-2">Kualitas Terbaik</h3>
                    <p className="text-body-sm text-foreground/60">Peralatan cetak modern dan material premium</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-card">
                    <Award size={32} className="mx-auto mb-3 text-accent" />
                    <h3 className="font-heading font-semibold text-body mb-2">Berpengalaman</h3>
                    <p className="text-body-sm text-foreground/60">Trusted oleh ratusan pelanggan di Banjarnegara</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-card">
                    <Users size={32} className="mx-auto mb-3 text-success" />
                    <h3 className="font-heading font-semibold text-body mb-2">Custom Order</h3>
                    <p className="text-body-sm text-foreground/60">Bisa pesan sesuai keinginan Anda</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">Layanan Kami</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl shadow-card">
                    <h3 className="font-heading font-semibold text-body mb-2">📄 Percetakan Dokumen</h3>
                    <p className="text-body-sm text-foreground/60">Print dokumen, skripsi, booklet, majalah, dan berbagai kebutuhan cetak dokumen lainnya</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-card">
                    <h3 className="font-heading font-semibold text-body mb-2">🖨️ Digital Printing</h3>
                    <p className="text-body-sm text-foreground/60">Banner, spanduk, backdrop, stand X, sticker, dan media promosi cetak lainnya</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-card">
                    <h3 className="font-heading font-semibold text-body mb-2">🎨 Jasa Sablon</h3>
                    <p className="text-body-sm text-foreground/60">Sablon kaos, mug, tumbler, dan berbagai media lain dengan kualitas tahan lama</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-card">
                    <h3 className="font-heading font-semibold text-body mb-2">🎁 Produk Custom</h3>
                    <p className="text-body-sm text-foreground/60">Pembuatan mug custom, tumbler, gantungan kunci, dan merchandise sesuai keinginan Anda</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-6">Informasi Lokasi</h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-body-sm mb-1">Alamat</h3>
                      <p className="text-body-sm text-foreground/60">Jl. S. Parman, Parakancanggah, Kec. Banjarnegara, Kab. Banjarnegara, Jawa Tengah 53412</p>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-body-sm mb-1">Telepon</h3>
                      <a href="tel:085137525599" className="text-body-sm text-foreground/60 hover:text-primary transition-colors">0851-3752-5599</a>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Clock size={20} className="text-success" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-body-sm mb-1">Jam Operasional</h3>
                      <p className="text-body-sm text-foreground/60">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://waze.com/dir/Kreasik+Production+Banjarnegara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <MapPin size={18} />
                    Buka di Waze
                  </a>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-heading-sm mb-4">Hubungi Kami</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Mau cetak atau pesan produk custom? Langsung hubungi kami!
                </p>
                <p className="text-body text-foreground/70">
                  Telepon/WA: <a href="tel:085137525599" className="text-primary hover:underline font-semibold">0851-3752-5599</a><br />
                  Kunjungi: Jl. S. Parman, Parakancanggah, Banjarnegara
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
