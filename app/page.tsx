import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Gallery } from '@/components/gallery'
import { Services } from '@/components/services'
import { BookingForm } from '@/components/booking-form'
import { InstagramSection } from '@/components/instagram-section'
import { SiteFooter } from '@/components/site-footer'
import { Cursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Page() {
  return (
    <main className="bg-velvet min-h-screen overflow-x-hidden">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* Reel vidéo — mobile uniquement */}
      <section className="bg-velvet px-6 pb-6 md:hidden">
        <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-gold/20 shadow-[0_0_40px_rgba(201,168,76,0.15)]">
          <video
            src="/images/video nails.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <Gallery />
      <Services />
      <BookingForm />
      <InstagramSection />
      <SiteFooter />
    </main>
  )
}
