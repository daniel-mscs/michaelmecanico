import { LogoMark, Wordmark } from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="Michael Mecânico Particular — início">
          <LogoMark eager className="h-10 w-10 shrink-0" />
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <a href="#servicos" className="hover:text-volt">Serviços</a>
          <a href="#como-funciona" className="hover:text-volt">Como funciona</a>
          <a href="#galeria" className="hover:text-volt">Antes e depois</a>
          <a href="#localizacao" className="hover:text-volt">Localização</a>
        </nav>
        <a
          href="#agendar"
          className="rounded-md bg-volt px-3.5 py-2 text-xs font-extrabold uppercase tracking-wide text-ink shadow-[0_0_20px_rgb(0_212_255/0.35)] active:scale-95"
        >
          Agendar
        </a>
      </div>
    </header>
  )
}
