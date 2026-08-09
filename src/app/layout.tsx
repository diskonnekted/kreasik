import type { Metadata } from 'next'
import { Syne, Manrope } from 'next/font/google'
import './globals.css'

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
  title: 'Kreasik — 3D Print & Kerajinan DIY Keren',
  description: 'Temuin produk unik hasil karya tangan + teknologi 3D printing. Vas, kaos custom, kerajinan tangan, dan banyak lagi.',
  keywords: ['3D print', 'DIY', 'kerajinan tangan', 'fashion', 'produk unik', 'vase'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-[family-name:var(--font-manrope)]">{children}</body>
    </html>
  )
}
