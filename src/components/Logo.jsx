// Logo oficial (public/logo.webp) num selo branco, pra manter as letras pretas legíveis no fundo escuro.
export function LogoMark({ className = '', eager = false }) {
  return (
    <span className={`inline-block overflow-hidden rounded-full bg-white ring-2 ring-volt/60 ${className}`}>
      <img
        src="/logo.webp"
        alt="Logo Michael Mecânico Particular"
        width="640"
        height="640"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full scale-[1.04] object-contain"
      />
    </span>
  )
}

export function Wordmark({ size = 'md' }) {
  const big = size === 'lg'
  return (
    <div className="leading-none">
      <div className={`font-wide text-white ${big ? 'text-4xl sm:text-5xl' : 'text-lg'}`}>Michael</div>
      <div className={`mt-1 flex items-center gap-2 font-bold uppercase tracking-[0.18em] text-volt ${big ? 'text-sm' : 'text-[10px]'}`}>
        <span className="inline-block h-[3px] w-4 bg-fire" />
        Mecânico Particular
      </div>
    </div>
  )
}
