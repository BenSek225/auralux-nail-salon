'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Reveal } from '@/components/reveal'

type Creation = { src: string; alt: string; label: string }

const creations: Creation[] = [
  {
    src: '/images/nail-floral-rose-or.jpeg',
    alt: 'Ongles amande blanc et rose avec motifs floraux peints à la main et perles dorées',
    label: 'Floral rose & or',
  },
  {
    src: '/images/nail-botanique-or.jpeg',
    alt: 'Nail art botanique : fleurs orangées et bleues sur ongles transparents avec perles dorées',
    label: 'Botanique dorée',
  },
  {
    src: '/images/nail-bleu-etoile-polka.jpeg',
    alt: 'French rose avec motifs bleus, étoiles dorées et myrtilles peintes',
    label: 'Étoiles & polka',
  },
  {
    src: '/images/nail-bijou-or-rose.jpeg',
    alt: 'Ongles rose pâle avec ornements 3D dorés et charm bijou',
    label: 'Bijoux dorés',
  },
  {
    src: '/images/nail-french-fleur-rouge.jpeg',
    alt: 'French manucure carrée blanc nacré avec fleur rouge peinte et perle dorée',
    label: 'French & fleur',
  },
  {
    src: '/images/nail.jpeg',
    alt: 'Ongles chrome doré avec motif papillon orange et perles dorées',
    label: 'Chrome papillon',
  },
  {
    src: '/images/nail-stiletto-papillon-teal.jpeg',
    alt: 'Stiletto : papillon orange et teal sur french transparent, accent chrome doré',
    label: 'Papillon teal',
  },
  {
    src: '/images/nail-leopard-rose-or.jpeg',
    alt: 'Ongles amande rose avec imprimé léopard bordeaux, gold foil et french blanc',
    label: 'Léopard & or',
  },
  {
    src: '/images/nail-stiletto-rose-marbre.jpeg',
    alt: 'Stiletto rose vif avec effet marbre, papillons bleus et rhinestones',
    label: 'Marbre rose',
  },
  {
    src: '/images/nail-papillon-bleu-etoile.jpeg',
    alt: 'Ongles blanc et rose avec papillons bleus peints, étoiles et perles',
    label: 'Papillon bleu',
  },
]

function GalleryCard({ c, i }: { c: Creation; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateXRaw = useTransform(my, [-0.5, 0.5], [7, -7])
  const rotateYRaw = useTransform(mx, [-0.5, 0.5], [-7, 7])
  const rotateX = useSpring(rotateXRaw, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 300, damping: 30 })

  return (
    <motion.div
      ref={ref}
      className="group"
      style={{ perspective: '800px' }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
    >
      <motion.figure
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-2xl border border-gold/20 transition-colors duration-500 group-hover:border-gold/70 group-hover:shadow-[0_0_35px_rgba(201,168,76,0.45)]"
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={c.src || '/placeholder.svg'}
            alt={c.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 20vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent opacity-80" />
          {/* shimmer sweep on hover */}
          <div className="btn-shimmer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-left font-serif text-sm italic text-ivory">
          {c.label}
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}

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

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {creations.map((c, i) => (
            <GalleryCard key={c.src} c={c} i={i} />
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
