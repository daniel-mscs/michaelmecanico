import SectionTitle from './SectionTitle'
import { PinIcon, ClockIcon } from './Icons'
import { ADDRESS_LINE, CITY, HOURS, MAPS_QUERY } from '../config'

const q = encodeURIComponent(MAPS_QUERY)

export default function Location() {
  return (
    <section id="localizacao" className="border-t border-line bg-coal/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionTitle kicker="Localização" title="Onde a gente tá" />
        <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-xl border border-line bg-steel">
            <iframe
              title="Mapa da oficina Michael Mecânico Particular"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full border-0 md:aspect-auto md:h-full md:min-h-[360px]"
              style={{ filter: 'invert(0.9) hue-rotate(180deg) saturate(0.8)' }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-line bg-coal p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-volt">
                <PinIcon className="h-5 w-5" /> Endereço
              </h3>
              <p className="mt-2 text-white">{ADDRESS_LINE}</p>
              <p className="text-slate-400">{CITY}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${q}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-lg border border-volt/50 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wide text-volt hover:bg-volt hover:text-ink"
              >
                Como chegar
              </a>
            </div>
            <div className="rounded-xl border border-line bg-coal p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-volt">
                <ClockIcon className="h-5 w-5" /> Horário
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {HOURS.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-line/70 pb-2 last:border-0">
                    <dt className="text-slate-400">{h.days}</dt>
                    <dd className={`font-semibold ${h.time === 'Fechado' ? 'text-fire' : 'text-white'}`}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
