'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { InstagramIcon } from '@/components/instagram-icon'

const LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Créations', href: '#creations' },
  { label: 'Services', href: '#services' },
  { label: 'Réserver', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/auralux_by_mrn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['accueil', 'creations', 'services', 'reservation', 'contact']
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(`#${id}`) },
        { threshold: 0.35 },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[#1A0A1E]/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
      >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Left: wordmark */}
        <a href="#accueil" aria-label="AURALUX — Accueil">
          <Image
            src="/images/logo_texte-removebg-preview.png"
            alt="AURALUX"
            width={120}
            height={28}
            style={{ height: 'auto' }}
            className="object-contain drop-shadow-[0_0_10px_rgba(201,168,76,0.4)]"
          />
        </a>

        {/* Center: desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  activeSection === link.href ? 'text-gold' : 'text-ivory/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: instagram (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suivez AURALUX sur Instagram"
            className="hidden text-ivory/80 transition-colors duration-300 hover:text-gold md:inline-flex"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            className="inline-flex flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          >
            <span className="block h-0.5 w-6 rounded-full bg-gold" />
            <span className="block h-0.5 w-6 rounded-full bg-gold" />
            <span className="block h-0.5 w-6 rounded-full bg-gold" />
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-[#2D0A3E] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <Image
            src="/images/logo_texte-removebg-preview.png"
            alt="AURALUX"
            width={120}
            height={28}
            style={{ height: 'auto' }}
            className="object-contain drop-shadow-[0_0_10px_rgba(201,168,76,0.4)]"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
            className="p-2 text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col items-center justify-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl font-semibold tracking-wide text-gold transition-opacity duration-300 hover:opacity-80"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-ivory/80 transition-colors duration-300 hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="text-xs tracking-widest">@auralux_by_mrn</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
