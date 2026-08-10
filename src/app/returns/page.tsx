'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, CheckCircle, XCircle, Package, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ReturnsPage() {
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
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">Kebijakan Pengembalian</h1>
            <p className="text-body text-foreground/60 mb-12">
              Panduan lengkap pengembalian dan refund produk
            </p>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Syarat Pengembalian</h2>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <CheckCircle size={24} className="text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Waktu 7 Hari</h3>
                    <p className="text-body-sm text-foreground/60">Pengembalian dapat dilakukan dalam waktu 7 hari setelah produk diterima</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <CheckCircle size={24} className="text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Kondisi Produk</h3>
                    <p className="text-body-sm text-foreground/60">Produk harus dalam kondisi asli, tidak rusak, dan tidak digunakan</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <CheckCircle size={24} className="text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Kemasan Lengkap</h3>
                    <p className="text-body-sm text-foreground/60">Kemasan original dan semua aksesori harus lengkap</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-card flex items-start gap-4">
                  <XCircle size={24} className="text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Tidak Termasuk Custom Order</h3>
                    <p className="text-body-sm text-foreground/60">Produk custom yang dibuat sesuai permintaan tidak dapat dikembalikan kecuali ada cacat produksi</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Prosedur Pengembalian</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Hubungi Kami</h3>
                    <p className="text-body-sm text-foreground/60">Kirim email ke returns@kreasik.com dengan nomor pesanan dan alasan pengembalian</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Kemasan Ulang Produk</h3>
                    <p className="text-body-sm text-foreground/60">Kemas produk dengan rapi menggunakan kemasan original atau yang setara</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Kirim Produk Kembali</h3>
                    <p className="text-body-sm text-foreground/60">Kirim produk ke alamat yang kami berikan. Biaya kirim awal ditanggung kami, biaya kirim kembali ditanggung pelanggan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Pemeriksaan</h3>
                    <p className="text-body-sm text-foreground/60">Tim kami akan memeriksa kondisi produk yang dikembalikan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-heading font-semibold text-body-sm mb-1">Refund</h3>
                    <p className="text-body-sm text-foreground/60">Refund akan diproses dalam 7-14 hari kerja setelah produk diterima dan diperiksa</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Cacat Produksi</h2>
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Package size={24} className="text-warning mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-body mb-2">Garansi Cacat Produksi</h3>
                    <p className="text-body-sm text-foreground/70 mb-3">
                      Jika produk yang Anda terima memiliki cacat produksi, kami akan menggantikan produk atau memberikan refund penuh tanpa biaya kirim.
                    </p>
                    <p className="text-body-sm text-foreground/70">
                      <strong>Cara klaim:</strong> Foto produk cacat dalam 2x24 jam setelah diterima, kirim ke returns@kreasik.com dengan nomor pesanan.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-heading-sm mb-6">Pertanyaan Umum</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-body-sm mb-2">Berapa lama refund diproses?</h3>
                  <p className="text-body-sm text-foreground/60">Refund diproses dalam 7-14 hari kerja setelah produk diterima dan dikonfirmasi kondisinya.</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-body-sm mb-2">Apakah biaya kirim awal dikembalikan?</h3>
                  <p className="text-body-sm text-foreground/60">Ya, untuk pengembalian karena perubahan keinginan, subtotal produk akan dikembalikan. Biaya kirim awal juga akan dikembalikan.</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-body-sm mb-2">Bisa tukar produk?</h3>
                  <p className="text-body-sm text-foreground/60">Ya, Anda bisa memilih untuk tukar produk dengan item lain yang memiliki nilai sama atau lebih tinggi.</p>
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
