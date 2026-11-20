import { LogoMark } from './Logo'
import { CalendarIcon, WhatsAppIcon, CheckIcon } from './Icons'
import { waLink, CITY } from '../config'

const perks = ['Orçamento antes de mexer', 'Atendimento direto com o mecânico', 'Peças de procedência']

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-volt/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-fire/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-14 pt-8 md:grid-cols-[1.2fr_1fr] md:pb-24 md:pt-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-fire" /> Oficina em {CITY}
          </p>
          <h1 className="font-wide text-[2.4rem] leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Teu carro em <span className="text-volt text-glow">boas mãos.</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-slate-300 sm:text-lg">
            Mecânica particular, sem enrolação. A gente diagnostica, te explica e passa o orçamento antes de mexer em qualquer coisa.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#agendar"
              className="flex items-center justify-center gap-2 rounded-lg bg-volt px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-ink shadow-[0_0_30px_rgb(0_212_255/0.4)] transition active:scale-[0.98]"
            >
              <CalendarIcon className="h-5 w-5" /> Agendar revisão
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/15 bg-white/5 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:border-volt/60 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Pedir orçamento no WhatsApp
            </a>
          </div>

          <ul className="mt-7 grid gap-2 text-sm text-slate-300">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-volt" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-first mx-auto w-40 sm:w-64 md:order-none md:w-full md:max-w-sm">
          <div className="absolute inset-6 rounded-full bg-volt/25 blur-2xl" />
          <LogoMark eager className="relative aspect-square w-full shadow-[0_0_50px_rgb(0_212_255/0.35)] ring-4" />
        </div>
      </div>
      <div className="stripe h-2 opacity-80" />
    </section>
  )
}
