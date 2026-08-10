import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
