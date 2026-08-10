import type { Metadata } from 'next'
import { Syne, Manrope } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kreasik Production — Percetakan & Digital Printing Banjarnegara',
  description: 'Jasa percetakan, digital printing, dan sablon di Banjarnegara. Cetak dokumen, banner, spanduk, dan produk custom mug, tumbler. Jl. S. Parman, Parakancanggah.',
  keywords: ['percetakan banjarnegara', 'digital printing', 'sablon', 'cetak banner', 'cetak mug', 'kreasik production'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-[family-name:var(--font-manrope)]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
