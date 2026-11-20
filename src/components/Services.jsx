import SectionTitle from './SectionTitle'
import { BrakeIcon, SuspensionIcon, EngineIcon, InjectionIcon } from './Icons'
import { SERVICES } from '../config'

const icons = { freio: BrakeIcon, suspensao: SuspensionIcon, motor: EngineIcon, injecao: InjectionIcon }

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle kicker="Serviços" title="O que a gente resolve" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => {
          const Icon = icons[s.id]
          return (
            <article
              key={s.id}
              className="group relative overflow-hidden rounded-xl border border-line bg-coal p-5 transition hover:border-volt/50"
            >
              <div className="absolute right-0 top-0 h-1 w-16 bg-fire" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-volt/10 text-volt ring-1 ring-volt/30 transition group-hover:bg-volt group-hover:text-ink">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-wide text-lg text-white">{s.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
