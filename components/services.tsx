import { Hand, Palette, Sparkle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Hand,
    title: 'Manucure sur-mesure',
    text: 'Un soin pensé pour sublimer vos mains.',
  },
  {
    icon: Palette,
    title: "Nail art d'exception",
    text: 'Des motifs uniques, dessinés à la main.',
  },
  {
    icon: Sparkle,
    title: 'Pose semi-permanente',
    text: 'Une tenue longue durée, un éclat permanent.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-velvet px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold/70">Savoir-faire</p>
          <h2 className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl">
            Nos Services
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 150}>
                <article className="group h-full rounded-2xl border border-gold/25 bg-secondary/40 p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_0_35px_rgba(201,168,76,0.3)]">
                  <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-plum/40 transition-colors duration-500 group-hover:border-gold">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/70">{s.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
