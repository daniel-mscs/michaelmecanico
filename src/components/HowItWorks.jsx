import SectionTitle from './SectionTitle'

const steps = [
  { t: 'Agenda online', d: 'Escolhe o serviço, o dia e o horário que fica bom pra ti.' },
  { t: 'Traz o carro', d: 'Chega no horário marcado, sem fila e sem espera.' },
  { t: 'Diagnóstico e orçamento', d: 'A gente avalia e te passa o valor antes de mexer em qualquer coisa.' },
  { t: 'Retira pronto', d: 'Serviço feito, peças trocadas na mão e carro testado.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-line bg-coal/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionTitle kicker="Como funciona" title="Simples, do jeito certo" />
        <ol className="relative grid gap-6 md:grid-cols-4 md:gap-4">
          <span className="absolute bottom-6 left-[22px] top-6 w-[2px] bg-gradient-to-b from-volt via-volt/40 to-fire md:hidden" />
          {steps.map((s, i) => (
            <li key={s.t} className="relative flex gap-4 md:flex-col">
              <span className="font-wide relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-lg text-volt ring-2 ring-volt">
                {i + 1}
              </span>
              <div>
                <h3 className="font-wide text-base text-white">{s.t}</h3>
                <p className="mt-1 text-sm text-slate-400">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
