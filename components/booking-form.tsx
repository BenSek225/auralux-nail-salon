'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'

const PRESTATIONS = [
  'Manucure classique',
  'Nail art',
  'Pose gel',
  'Semi-permanent',
  'Création sur-mesure',
]

const SNAPCHAT_URL = 'https://www.snapchat.com/add/mrn.ba'

export function BookingForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [prestation, setPrestation] = useState(PRESTATIONS[0])
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    window.open(SNAPCHAT_URL, '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full rounded-xl border border-gold/30 bg-plum/40 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 outline-none transition-colors duration-300 focus:border-gold focus:ring-1 focus:ring-gold/50'
  const labelClass = 'mb-2 block text-xs uppercase tracking-widest text-gold/80'

  return (
    <section id="reservation" className="bg-velvet px-6 py-24">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl">
            Réservez votre séance
          </h2>
          <p className="mt-4 text-pretty text-sm text-ivory/75 sm:text-base">
            {"Dites-nous votre vision, on s'occupe du reste."}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-gold/25 bg-secondary/30 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Prénom & Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Numéro de téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 00 00 00 00"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="date" className={labelClass}>
                  Date souhaitée
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${fieldClass} [color-scheme:dark]`}
                />
              </div>

              <div>
                <label htmlFor="prestation" className={labelClass}>
                  Type de prestation
                </label>
                <select
                  id="prestation"
                  value={prestation}
                  onChange={(e) => setPrestation(e.target.value)}
                  className={fieldClass}
                >
                  {PRESTATIONS.map((p) => (
                    <option key={p} value={p} className="bg-plum text-ivory">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message libre <span className="normal-case opacity-60">(optionnel)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre projet, vos inspirations..."
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-plum shadow-[0_8px_30px_rgba(201,168,76,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-gold-soft"
            >
              Envoyer ma demande ✨
            </button>

            <p className="mt-4 text-center text-xs text-ivory/50">
              Votre demande sera envoyée via Snapchat.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
