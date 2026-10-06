import { positioning, proofChips } from '@/data/portfolio'
import { cn } from '@/lib/cn'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-ink bg-grid">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Positioning line first — the 6-15s scan target */}
        <p className="inline-flex items-center gap-2 border-2 border-ink bg-acid px-3 py-1 font-display text-xs font-bold uppercase tracking-widest shadow-brutal-sm">
          <span aria-hidden className="h-2 w-2 rounded-full bg-punch" />
          {positioning.lane} · {positioning.location}
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {positioning.name}
        </h1>

        <p className="mt-5 max-w-2xl border-l-4 border-ink bg-paper px-4 py-3 text-base font-medium leading-relaxed sm:text-lg">
          {positioning.oneLiner}
        </p>

        {/* Proof chips — metrics tied to ships, not academics */}
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {proofChips.map((chip) => (
            <div
              key={chip.label}
              className="border-2 border-ink bg-paper px-3 py-3 shadow-brutal-sm"
            >
              <dt className="sr-only">{chip.label}</dt>
              <dd className="font-display text-2xl font-black leading-none sm:text-3xl">{chip.value}</dd>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-tight text-ink/70">{chip.label}</p>
            </div>
          ))}
        </dl>

        {/* Primary CTAs — resume + prefilled email */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${positioning.email}?subject=Backend%20role%20-%20from%20your%20portfolio`}
            className={cn(
              'inline-flex items-center gap-2 border-2 border-ink bg-acid px-5 py-2.5 font-display text-sm font-black uppercase tracking-tight shadow-brutal-sm',
              'transition-transform hover:-translate-y-0.5 hover:shadow-brutal',
            )}
          >
            Email me →
          </a>
          <a
            href={positioning.resumeUrl}
            download
            className={cn(
              'inline-flex items-center gap-2 border-2 border-ink bg-paper px-5 py-2.5 font-display text-sm font-black uppercase tracking-tight shadow-brutal-sm',
              'transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-brutal',
            )}
          >
            Download résumé (PDF)
          </a>
          <a
            href={positioning.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-display text-sm font-bold uppercase tracking-tight text-ink/70 underline decoration-2 underline-offset-4 hover:text-ink"
          >
            GitHub ↗
          </a>
        </div>

        {/* Availability line — kills the "still a student?" guess */}
        <p className="mt-6 text-sm font-medium text-ink/60">
          {positioning.availability} · graduating {positioning.graduation}
        </p>
      </div>
    </section>
  )
}
