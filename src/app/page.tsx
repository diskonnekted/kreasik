import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Categories from '@/components/sections/Categories'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import Story from '@/components/sections/Story'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Story />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
