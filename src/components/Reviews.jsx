import SectionTitle from './SectionTitle'
import { StarIcon } from './Icons'

// EXEMPLOS — substituir por avaliações reais de clientes (ex: Google).
const REVIEWS = [
  { name: 'Cliente exemplo', car: 'Onix 2019', text: 'Explicou tudo antes de fazer e cobrou o que tinha combinado. Carro ficou zero.' },
  { name: 'Cliente exemplo', car: 'Gol 2014', text: 'Resolveu um barulho na suspensão que outras oficinas não acharam. Recomendo.' },
  { name: 'Cliente exemplo', car: 'HB20 2017', text: 'Agendei pelo site, cheguei e já fui atendido. Atendimento direto e honesto.' },
]

export default function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle kicker="Avaliações" title="Quem já veio, volta" />
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {REVIEWS.map((r, i) => (
          <blockquote key={i} className="relative w-[85%] shrink-0 snap-center rounded-xl border border-line bg-coal p-5 md:w-auto">
            <span className="absolute right-4 top-4 rounded border border-fire/50 bg-fire/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-fire">
              Exemplo
            </span>
            <div className="flex gap-0.5 text-volt" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }, (_, k) => <StarIcon key={k} className="h-4 w-4" />)}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">“{r.text}”</p>
            <footer className="mt-4 text-xs">
              <span className="font-bold text-white">{r.name}</span>
              <span className="text-slate-500"> · {r.car}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">Avaliações ilustrativas, apenas para exemplo de layout.</p>
    </section>
  )
}
