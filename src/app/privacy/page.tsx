'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
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
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-8">Privacy Policy</h1>

            <div className="prose prose-sm max-w-none">
              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">1. Informasi yang Kami Kumpulkan</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Kami mengumpulkan informasi yang Anda berikan secara langsung, termasuk:
                </p>
                <ul className="list-disc list-inside text-body text-foreground/70 space-y-2 ml-4">
                  <li>Nama dan informasi kontak (nama, email, nomor telepon)</li>
                  <li>Alamat pengiriman dan tagihan</li>
                  <li>Informasi pembayaran</li>
                  <li>Riwayat pesanan dan transaksi</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">2. Penggunaan Informasi</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc list-inside text-body text-foreground/70 space-y-2 ml-4">
                  <li>Memproses dan mengirimkan pesanan Anda</li>
                  <li>Menghubungi Anda terkait pesanan</li>
                  <li>Mengirimkan promosi dan penawaran khusus (dengan persetujuan Anda)</li>
                  <li>Meningkatkan layanan dan pengalaman pengguna</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">3. Perlindungan Data</h2>
                <p className="text-body text-foreground/70">
                  Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">4. Cookie</h2>
                <p className="text-body text-foreground/70">
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser Anda untuk menolak cookie, namun hal ini mungkin mempengaruhi fungsionalitas website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">5. Hak Anda</h2>
                <p className="text-body text-foreground/70 mb-3">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-body text-foreground/70 space-y-2 ml-4">
                  <li>Mengakses informasi pribadi Anda</li>
                  <li>Memperbarui atau memperbaiki informasi Anda</li>
                  <li>Meminta penghapusan data Anda</li>
                  <li>Menolak pemasaran langsung</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading font-semibold text-heading-sm mb-4">6. Perubahan Kebijakan</h2>
                <p className="text-body text-foreground/70">
                  Kami dapat memperbarui Privacy Policy ini dari waktu ke waktu. Perubahan material akan dikomunikasikan melalui email atau pemberitahuan di website kami.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-heading-sm mb-4">7. Kontak</h2>
                <p className="text-body text-foreground/70">
                  Untuk pertanyaan terkait Privacy Policy, hubungi kami di: <a href="mailto:privacy@kreasik.com" className="text-primary hover:underline">privacy@kreasik.com</a>
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
