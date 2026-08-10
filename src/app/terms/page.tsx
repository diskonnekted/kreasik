'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-8">Terms of Service</h1>

            <div className="prose prose-sm max-w-none">
              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">1. Kesepakatan</h2>
                <p className="text-body text-foreground/70">
                  Dengan mengakses dan menggunakan website Kreasik, Anda menyetujui untuk terikat pada Terms of Service ini. Jika Anda tidak setuju dengan bagian tertentu, silakan menggunakan website kami dengan pembatasan.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">2. Produk & Harga</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Kami berupaya menampilkan produk seakurat mungkin. Namun, kami tidak menjamin bahwa deskripsi, warna, atau informasi lainnya akurat, lengkap, atau terkini. Harga dapat berubah tanpa pemberitahuan terlebih dahulu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">3. Pesanan</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Pesanan Anda tidak berarti diterima sebelum kami mengkonfirmasi ketersediaan dan memproses pembayaran. Kami berhak untuk menolak atau membatalkan pesanan dalam situasi tertentu, termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside text-body text-foreground/70 space-y-2 ml-4">
                  <li>Kesalahan pada harga atau deskripsi produk</li>
                  <li>Ketersediaan stok</li>
                  <li>Gagal pembayaran</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">4. Pengiriman</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Waktu pengiriman adalah estimasi dan dapat berubah tergantung lokasi, ketersediaan produk, dan faktor eksternal. Kami tidak bertanggung jawab atas keterlambatan yang disebabkan oleh kurir.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">5. Pengembalian & Refund</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Anda dapat mengembalikan produk dalam waktu 7 hari setelah diterima dengan syarat:
                </p>
                <ul className="list-disc list-inside text-body text-foreground/70 space-y-2 ml-4">
                  <li>Produk dalam kondisi asli dan tidak rusak</li>
                  <li>Dengan kemasan original</li>
                  <li>Tidak merupakan produk custom yang sudah dibuat sesuai permintaan</li>
                </ul>
                <p className="text-body text-foreground/70 mt-3">
                  Refund akan diproses dalam 7-14 hari kerja setelah produk diterima dan diperiksa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">6. Akun Pengguna</h2>
                <p className="text-body text-foreground/70">
                  Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda dan semua aktivitas yang terjadi di bawah akun Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">7. Perubahan Terms</h2>
                <p className="text-body text-foreground/70">
                  Kami dapat mengubah Terms of Service ini dari waktu ke waktu. Perubahan akan efektif segera setelah dipublikasikan di website kami.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-heading-sm mb-4">8. Kontak</h2>
                <p className="text-body text-foreground/70">
                  Untuk pertanyaan terkait Terms of Service, hubungi kami di: <a href="mailto:support@kreasik.com" className="text-primary hover:underline">support@kreasik.com</a>
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
