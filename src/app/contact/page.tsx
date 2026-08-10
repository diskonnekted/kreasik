'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Terima kasih ${formData.name}! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.`)
    setFormData({ name: '', email: '', subject: '', message: '' })
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

          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-heading-lg md:text-heading-xl mb-4">Hubungi Kami</h1>
            <p className="text-body text-foreground/60 mb-12">
              Kami siap membantu Anda. Silakan hubungi kami melalui form atau kontak di bawah ini.
            </p>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-heading font-semibold text-heading-sm mb-6">Informasi Kontak</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-body-sm mb-1">Email</h3>
                        <a href="mailto:kreasikproduction@gmail.com" className="text-body-sm text-foreground/60 hover:text-primary transition-colors">kreasikproduction@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Phone size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-body-sm mb-1">Telepon / WhatsApp</h3>
                        <a href="tel:085137525599" className="text-body-sm text-foreground/60 hover:text-primary transition-colors">0851-3752-5599</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <MapPin size={20} className="text-success" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-body-sm mb-1">Alamat</h3>
                        <p className="text-body-sm text-foreground/60">Jl. S. Parman, Parakancanggah, Kec. Banjarnegara, Kab. Banjarnegara, Jawa Tengah 53412</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-warning/10 rounded-lg">
                        <Clock size={20} className="text-warning" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-body-sm mb-1">Jam Kerja</h3>
                        <p className="text-body-sm text-foreground/60">Senin - Sabtu: 08.00 - 17.00 WIB<br />Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-body-sm mb-4">Ikuti Kami</h3>
                  <div className="flex gap-3">
                    <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="TikTok">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                    </a>
                    <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="YouTube">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-card space-y-5">
                  <div>
                    <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@anda.com"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Subjek *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Apa yang bisa kami bantu?"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Pesan *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
