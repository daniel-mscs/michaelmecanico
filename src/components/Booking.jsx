import { useMemo, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import { SERVICES, waLink } from '../config'
import { CheckIcon, WhatsAppIcon } from './Icons'

const OPTIONS = [...SERVICES.map((s) => s.name), 'Revisão geral', 'Outro / não sei']
const WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const WEEKDAY_SLOTS = ['08:00', '09:00', '10:00', '11:00', '13:30', '14:30', '15:30', '16:30']
const SATURDAY_SLOTS = ['08:00', '09:00', '10:00', '11:00']

function nextDays(count = 12) {
  const out = []
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  while (out.length < count) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0) out.push(new Date(d))
  }
  return out
}

const fmtLong = (d) => {
  const s = d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function Step({ n, label, done, children }) {
  return (
    <fieldset className="mb-7 min-w-0">
      <legend className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
        <span className={`flex h-6 w-6 items-center justify-center rounded text-xs ${done ? 'bg-volt text-ink' : 'bg-steel text-slate-400 ring-1 ring-line'}`}>
          {done ? <CheckIcon className="h-3.5 w-3.5" /> : n}
        </span>
        {label}
      </legend>
      {children}
    </fieldset>
  )
}

const chip = (active) =>
  `rounded-lg border px-3 py-3 text-sm font-semibold transition active:scale-95 ${
    active ? 'border-volt bg-volt text-ink shadow-[0_0_18px_rgb(0_212_255/0.35)]' : 'border-line bg-steel text-slate-200 hover:border-volt/50'
  }`

export default function Booking() {
  const days = useMemo(() => nextDays(), [])
  const [service, setService] = useState(null)
  const [day, setDay] = useState(null)
  const [time, setTime] = useState(null)
  const [name, setName] = useState('')
  const [car, setCar] = useState('')
  const [sent, setSent] = useState(false)
  const summaryRef = useRef(null)

  const slots = day ? (day.getDay() === 6 ? SATURDAY_SLOTS : WEEKDAY_SLOTS) : []
  const ready = service && day && time

  const message = ready
    ? `Olá Michael! Quero agendar pelo site:\n• Serviço: ${service}\n• Dia: ${fmtLong(day)}\n• Horário: ${time}` +
      (name ? `\n• Nome: ${name}` : '') +
      (car ? `\n• Carro: ${car}` : '')
    : ''

  const reset = () => {
    setService(null); setDay(null); setTime(null); setName(''); setCar(''); setSent(false)
  }

  return (
    <section id="agendar" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle kicker="Agendamento" title="Marca teu horário" sub="Escolhe o serviço, o dia e a hora. Leva menos de um minuto." />

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <form
          className="min-w-0 rounded-2xl border border-line bg-coal p-5 sm:p-7"
          onSubmit={(e) => {
            e.preventDefault()
            if (!ready) return
            setSent(true)
            requestAnimationFrame(() => summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
          }}
        >
          <Step n={1} label="Serviço" done={!!service}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {OPTIONS.map((o) => (
                <button type="button" key={o} className={chip(service === o)} onClick={() => { setService(o); setSent(false) }} aria-pressed={service === o}>
                  {o}
                </button>
              ))}
            </div>
          </Step>

          <Step n={2} label="Dia" done={!!day}>
            <div className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:-mx-7 sm:px-7 [scrollbar-width:thin]">
              {days.map((d) => {
                const active = day && d.getTime() === day.getTime()
                return (
                  <button
                    type="button"
                    key={d.toISOString()}
                    onClick={() => { setDay(d); setTime(null); setSent(false) }}
                    aria-pressed={!!active}
                    aria-label={fmtLong(d)}
                    className={`flex w-16 shrink-0 snap-start flex-col items-center rounded-lg border py-2.5 transition active:scale-95 ${
                      active ? 'border-volt bg-volt text-ink' : 'border-line bg-steel text-slate-200 hover:border-volt/50'
                    }`}
                  >
                    <span className={`text-[11px] font-bold uppercase ${active ? 'text-ink/70' : 'text-slate-400'}`}>{WEEK[d.getDay()]}</span>
                    <span className="font-wide text-xl">{d.getDate()}</span>
                    <span className={`text-[10px] uppercase ${active ? 'text-ink/70' : 'text-slate-500'}`}>
                      {d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                    </span>
                  </button>
                )
              })}
            </div>
          </Step>

          <Step n={3} label="Horário" done={!!time}>
            {day ? (
              <div className="grid grid-cols-4 gap-2">
                {slots.map((s) => (
                  <button type="button" key={s} className={chip(time === s)} onClick={() => { setTime(s); setSent(false) }} aria-pressed={time === s}>
                    {s}
                  </button>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed border-line px-4 py-3 text-sm text-slate-500">Escolhe um dia primeiro.</p>
            )}
          </Step>

          <Step n={4} label="Teus dados (opcional)" done={!!(name && car)}>
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Teu nome" autoComplete="name"
                className="rounded-lg border border-line bg-steel px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-volt focus:outline-none"
              />
              <input
                value={car} onChange={(e) => setCar(e.target.value)} placeholder="Carro (ex: Gol 2015)"
                className="rounded-lg border border-line bg-steel px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-volt focus:outline-none"
              />
            </div>
          </Step>

          <button
            type="submit"
            disabled={!ready}
            className="w-full rounded-lg bg-volt py-4 text-sm font-extrabold uppercase tracking-wide text-ink shadow-[0_0_30px_rgb(0_212_255/0.35)] transition active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-steel disabled:text-slate-500 disabled:shadow-none"
          >
            {ready ? 'Confirmar agendamento' : 'Preenche serviço, dia e horário'}
          </button>
        </form>

        <aside ref={summaryRef} className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-steel to-coal p-6 md:sticky md:top-24 md:self-start" aria-live="polite">
          <div className="stripe absolute inset-x-0 top-0 h-1.5" />
          <h3 className="font-wide text-lg text-white">{sent ? 'Pedido pronto!' : 'Resumo'}</h3>
          <dl className="mt-4 space-y-3 text-sm">
            {[
              ['Serviço', service],
              ['Dia', day && fmtLong(day)],
              ['Horário', time],
              ['Carro', car],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line/70 pb-2">
                <dt className="text-slate-400">{k}</dt>
                <dd className="text-right font-semibold text-white">{v || '—'}</dd>
              </div>
            ))}
          </dl>

          {sent ? (
            <div className="mt-6">
              <p className="text-sm text-slate-300">
                Agora é só enviar pelo WhatsApp. O Michael confirma o horário contigo por lá.
              </p>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 text-sm font-extrabold uppercase tracking-wide text-ink active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Enviar no WhatsApp
              </a>
              <button onClick={reset} className="mt-3 w-full text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-white">
                Fazer outro agendamento
              </button>
            </div>
          ) : (
            <p className="mt-6 text-xs text-slate-500">
              O orçamento é passado depois do diagnóstico, sempre antes de qualquer serviço.
            </p>
          )}
        </aside>
      </div>
    </section>
  )
}
