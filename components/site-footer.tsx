export function SiteFooter() {
  return (
    <footer className="bg-velvet border-t border-gold/15 px-6 py-10 text-center">
      <p className="font-serif text-xl font-semibold tracking-[0.2em] text-gold-gradient">
        AURALUX
      </p>
      <p className="mt-6 text-[11px] text-ivory/40">
        © {new Date().getFullYear()} AURALUX. {"L'aura au bout des doigts."}
      </p>
    </footer>
  )
}
