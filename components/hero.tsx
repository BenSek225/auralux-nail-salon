'use client'

import Image from 'next/image'
import { InstagramIcon } from '@/components/instagram-icon'
import { Sparkles } from '@/components/sparkles'

function scrollToBooking() {
  document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="bg-velvet relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      <Sparkles count={32} />

      {/* subtle vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 40%, rgba(20,5,30,0.55) 100%)',
        }}
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <div className="relative mb-4 h-56 w-56 sm:h-72 sm:w-72">
          <Image
            src="/images/img/logo-removebg-preview.png"
            alt="Logo AURALUX : une main délicate dans une arche dorée entourée de cristaux"
            fill
            priority
            className="object-contain drop-shadow-[0_0_35px_rgba(201,168,76,0.45)]"
          />
        </div>

        <h1 className="sr-only">AURALUX</h1>

        <p className="mt-4 font-serif text-lg italic text-ivory/90 sm:text-2xl">
          {'« L\'aura au bout des doigts. »'}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-ivory/75 sm:text-base">
          {
            "L'art de la manucure d'exception. Des créations uniques, imaginées sur-mesure pour révéler votre véritable identité."
          }
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={scrollToBooking}
            className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-plum shadow-[0_8px_30px_rgba(201,168,76,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-gold-soft sm:w-auto"
          >
            Réserver une séance
          </button>
          <button
            type="button"
            onClick={scrollToBooking}
            className="w-full rounded-full border border-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:scale-[1.03] hover:bg-gold/10 sm:w-auto"
          >
            Créer mon projet
          </button>
        </div>

        <a
          href="https://www.instagram.com/auralux_by_mrn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Suivez AURALUX sur Instagram"
          className="mt-10 inline-flex items-center gap-2 text-ivory/70 transition-colors duration-300 hover:text-gold"
        >
          <InstagramIcon className="h-5 w-5" />
          <span className="text-xs tracking-widest">@auralux_by_mrn</span>
        </a>
      </div>
    </section>
  )
}
