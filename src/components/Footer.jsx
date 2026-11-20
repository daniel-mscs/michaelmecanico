import { LogoMark, Wordmark } from './Logo'
import { WhatsAppIcon } from './Icons'
import { waLink, WHATSAPP_DISPLAY, CITY } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="stripe h-1.5 opacity-80" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="h-12 w-12" />
          <div>
            <Wordmark />
            <p className="mt-1 text-xs text-slate-500">{CITY}</p>
          </div>
        </div>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-white hover:text-volt">
          <WhatsAppIcon className="h-6 w-6 text-[#25D366]" /> {WHATSAPP_DISPLAY}
        </a>
      </div>
      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 pb-24 text-xs text-slate-500 sm:flex-row sm:justify-between md:pb-4">
          <span>© {new Date().getFullYear()} Michael Mecânico Particular</span>
          <span>Site feito por <strong className="text-slate-300">Nukze</strong></span>
        </div>
      </div>
    </footer>
  )
}
