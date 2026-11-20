import { useState } from 'react'
import SectionTitle from './SectionTitle'

// Para usar fotos reais: coloque os arquivos em /public/galeria e preencha before/after.
const ITEMS = [
  { title: 'Troca de discos e pastilhas', before: null, after: null },
  { title: 'Amortecedores dianteiros', before: null, after: null },
  { title: 'Limpeza do cabeçote', before: null, after: null },
  { title: 'Limpeza de bicos injetores', before: null, after: null },
]

function Placeholder({ kind }) {
  const before = kind === 'before'
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${
        before
          ? 'bg-[radial-gradient(circle_at_30%_40%,#5a3a22,#2a1c14_55%,#0c0a09)]'
          : 'bg-[radial-gradient(circle_at_70%_40%,#1a4a5c,#0d2230_55%,#05070a)]'
      }`}
    >
      <span className="rounded bg-black/40 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60">
        Foto em breve
      </span>
    </div>
  )
}

function Compare({ item }) {
  const [pos, setPos] = useState(50)
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-coal">
      <div className="relative aspect-[4/3] select-none">
        <div className="absolute inset-0">
          {item.after ? <img src={item.after} alt={`${item.title} — depois`} loading="lazy" className="h-full w-full object-cover" /> : <Placeholder kind="after" />}
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {item.before ? <img src={item.before} alt={`${item.title} — antes`} loading="lazy" className="h-full w-full object-cover" /> : <Placeholder kind="before" />}
        </div>
        <span className="absolute left-2 top-2 rounded bg-fire px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">Antes</span>
        <span className="absolute right-2 top-2 rounded bg-volt px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-ink">Depois</span>
        <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgb(0_212_255/0.8)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-black text-ink shadow-lg">
            ‹›
          </span>
        </div>
        <input
          type="range" min="0" max="100" value={pos}
          onChange={(e) => setPos(+e.target.value)}
          aria-label={`Comparar antes e depois: ${item.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="px-4 py-3 text-sm font-semibold text-white">{item.title}</figcaption>
    </figure>
  )
}

export default function BeforeAfter() {
  return (
    <section id="galeria" className="border-y border-line bg-coal/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionTitle kicker="Antes e depois" title="O trabalho fala por si" sub="Arrasta a barra pra comparar." />
        <div className="grid gap-4 sm:grid-cols-2">
          {ITEMS.map((it) => <Compare key={it.title} item={it} />)}
        </div>
      </div>
    </section>
  )
}
