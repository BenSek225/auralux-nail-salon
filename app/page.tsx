import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Gallery } from '@/components/gallery'
import { Services } from '@/components/services'
import { BookingForm } from '@/components/booking-form'
import { InstagramSection } from '@/components/instagram-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-velvet min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <BookingForm />
      <InstagramSection />
      <SiteFooter />
    </main>
  )
}
