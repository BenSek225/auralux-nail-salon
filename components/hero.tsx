'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { InstagramIcon } from '@/components/instagram-icon'
import { Sparkles } from '@/components/sparkles'

function scrollToBooking() {
  document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })
}

const tagline = "« L'aura au bout des doigts. »"

export function Hero() {
  return (
    <section
      id="accueil"
      className="bg-velvet relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      <Sparkles count={32} />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 40%, rgba(20,5,30,0.55) 100%)',
        }}
      />

      {/* Aurora animated layers */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 20%, rgba(107,21,48,0.5), transparent)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 75%, rgba(45,10,62,0.65), transparent)' }}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">

        {/* Illustration — pulse animation */}
        <motion.div
          className="relative mb-2 h-48 w-48 sm:h-64 sm:w-64"
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/logo_simple-removebg-preview.png"
            alt="Emblème AURALUX : une main délicate tenant un cristal lumineux dans une arche dorée"
            fill
            priority
            className="object-contain drop-shadow-[0_0_35px_rgba(201,168,76,0.45)]"
          />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          className="relative h-14 w-64 sm:h-16 sm:w-80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/logo_texte-removebg-preview.png"
            alt="AURALUX"
            fill
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(201,168,76,0.5)]"
          />
        </motion.div>

        <h1 className="sr-only">AURALUX</h1>

        {/* Tagline — typewriter */}
        <motion.p
          className="mt-4 font-serif text-lg italic text-ivory/90 sm:text-2xl"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035, delayChildren: 0.6 } } }}
        >
          {tagline.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-ivory/75 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {"L'art de la manucure d'exception. Des créations uniques, imaginées sur-mesure pour révéler votre véritable identité."}
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary CTA — shimmer */}
          <button
            type="button"
            onClick={scrollToBooking}
            className="btn-shimmer relative w-full overflow-hidden rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-plum shadow-[0_8px_30px_rgba(201,168,76,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-gold-soft sm:w-auto"
          >
            Réserver une séance
          </button>
          <button
            type="button"
            onClick={scrollToBooking}
            className="btn-shimmer relative w-full overflow-hidden rounded-full border border-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:scale-[1.03] hover:bg-gold/10 sm:w-auto"
          >
            Créer mon projet
          </button>
        </motion.div>

        <motion.a
          href="https://www.instagram.com/auralux_by_mrn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Suivez AURALUX sur Instagram"
          className="mt-10 inline-flex items-center gap-2 text-ivory/70 transition-colors duration-300 hover:text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <InstagramIcon className="h-5 w-5" />
          <span className="text-xs tracking-widest">@auralux_by_mrn</span>
        </motion.a>
      </div>
    </section>
  )
}
