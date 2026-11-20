export default function SectionTitle({ kicker, title, sub }) {
  return (
    <div className="mb-8 md:mb-12">
      <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-volt">
        <span className="h-[3px] w-6 bg-fire" /> {kicker}
      </p>
      <h2 className="font-wide text-3xl leading-none text-white sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-slate-400">{sub}</p>}
    </div>
  )
}
