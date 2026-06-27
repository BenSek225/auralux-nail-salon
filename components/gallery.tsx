import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const creations = [
  {
    src: '/images/nail-butterfly.png',
    alt: "Nail art papillon iridescent avec détails dorés sur mains élégantes",
    label: 'Papillon iridescent',
  },
  {
    src: '/images/nail-gold-chrome.png',
    alt: 'Manucure chrome doré effet miroir',
    label: 'Chrome doré',
  },
  {
    src: '/images/nail-floral.png',
    alt: 'Nail art floral rose peint à la main avec touches dorées',
    label: 'Floral rosé',
  },
  {
    src: '/images/nail-jeweled.png',
    alt: 'Bouts des ongles ornés de cristaux et strass dorés',
    label: 'Bijoux & cristaux',
  },
]

export function Gallery() {
  return (
    <section id="creations" className="bg-velvet px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold/70">Galerie</p>
          <h2 className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl">
            Nos Créations
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {creations.map((c, i) => (
            <Reveal key={c.src} delay={i * 120} className="group">
              <figure className="relative overflow-hidden rounded-2xl border border-gold/20 transition-all duration-500 group-hover:border-gold/70 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={c.src || '/placeholder.svg'}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent opacity-80" />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-left font-serif text-sm italic text-ivory">
                  {c.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="font-serif text-lg italic text-ivory/80">
            Chaque création est unique, pensée pour vous.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
