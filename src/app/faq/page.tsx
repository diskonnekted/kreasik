'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const faqData = [
  {
    question: 'Apa saja layanan yang ditawarkan Kreasik Production?',
    answer: 'Kami menyediakan jasa percetakan dokumen, digital printing (banner, spanduk, backdrop, sticker), sablon (kaos, mug, tumbler), dan pembuatan produk custom seperti mug bergambar, tumbler custom, dan merchandise lainnya.',
  },
  {
    question: 'Berapa lama waktu pengerjaan?',
    answer: 'Untuk cetak dokumen dan sticker, pengerjaan 1-2 jam. Banner dan spanduk 1-2 hari kerja. Sablon dan custom order 2-5 hari kerja tergantung jumlah dan kompleksitas.',
  },
  {
    question: 'Apakah bisa order online?',
    answer: 'Ya! Anda bisa order online melalui WhatsApp di 0851-3752-5599. Kirimkan desain atau ide Anda, kami akan proses dan deliver ke lokasi Anda.',
  },
  {
    question: 'Bagaimana cara mengambil pesanan?',
    answer: 'Anda bisa mengambil pesanan langsung di toko kami: Jl. S. Parman, Parakancanggah, Banjarnegara. Jam kerja: Senin - Sabtu, 08.00 - 17.00 WIB.',
  },
  {
    question: 'Apakah ada minimal order?',
    answer: 'Untuk cetak dokumen tidak ada minimal order. Untuk banner dan sablon, minimal order 1 lembar/unit. Untuk custom order seperti mug, minimal 1 piece.',
  },
  {
    question: 'Apa format file yang diterima untuk cetak?',
    answer: 'Kami menerima file dalam format PDF, JPG, PNG, PSD, AI, dan CDR. Untuk hasil terbaik, resolusi minimal 150dpi untuk ukuran besar dan 300dpi untuk cetak kecil.',
  },
  {
    question: 'Apakah bisa minta contoh/demo dulu?',
    answer: 'Bisa! Hubungi kami via WhatsApp dan jelaskan kebutuhan Anda. Kami bisa kirim foto contoh hasil cetakan atau arrange kunjungan ke toko.',
  },
  {
    question: 'Bagaimana cara mendapatkan harga?',
    answer: 'Hubungi kami via WhatsApp di 0851-3752-5599 atau langsung datang ke toko. Sampaikan jenis cetak, ukuran, jumlah, dan kami akan berikan penawaran harga terbaik.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">Frequently Asked Questions</h1>
            <p className="text-body text-foreground/60 mb-12">
              Temukan jawaban untuk pertanyaan yang sering ditanyakan
            </p>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-background/50 transition-colors"
                  >
                    <span className="font-heading font-semibold text-body pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-foreground/40 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-foreground/40 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-body text-foreground/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-heading font-semibold text-body mb-4">Masih punya pertanyaan?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <div>
                    <p className="text-body-sm font-semibold">WhatsApp / Telepon</p>
                    <a href="tel:085137525599" className="text-body-sm text-foreground/60 hover:text-primary">0851-3752-5599</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <p className="text-body-sm font-semibold">Kunjungi Toko</p>
                    <p className="text-body-sm text-foreground/60">Jl. S. Parman, Parakancanggah, Banjarnegara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
