export function SiteFooter() {
  return (
    <footer className="bg-velvet border-t border-gold/15 px-6 py-12 text-center">
      <p className="font-serif text-xl font-semibold tracking-[0.2em] text-gold-gradient">
        AURALUX
      </p>
      <p className="mt-4 text-xs uppercase tracking-widest text-ivory/60">
        Toutes les réservations se font via WhatsApp
      </p>
      <a
        href="tel:+33662164536"
        className="mt-2 inline-block text-sm text-ivory/80 transition-colors hover:text-gold"
      >
        +33 6 62 16 45 36
      </a>
      <p className="mt-8 text-[11px] text-ivory/40">
        © {new Date().getFullYear()} AURALUX. {"L'aura au bout des doigts."}
      </p>
    </footer>
  )
}
