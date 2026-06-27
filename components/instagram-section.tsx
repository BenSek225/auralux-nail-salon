import { InstagramIcon } from '@/components/instagram-icon'
import { Reveal } from '@/components/reveal'

export function InstagramSection() {
  return (
    <section id="contact" className="bg-velvet px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <InstagramIcon className="mx-auto mb-6 h-10 w-10 text-gold" />
        <h2 className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl">
          Notre univers sur Instagram
        </h2>
        <p className="mt-4 text-sm text-ivory/75 sm:text-base">
          Découvrez nos dernières créations.
        </p>

        <a
          href="https://www.instagram.com/auralux_by_mrn"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-plum shadow-[0_8px_30px_rgba(201,168,76,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-gold-soft"
        >
          <InstagramIcon className="h-5 w-5" />
          @auralux_by_mrn
        </a>
      </Reveal>
    </section>
  )
}
