import { recommendations } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'

export function Recommendations() {
  return (
    <section id="recommendations" className="border-t-4 border-ink bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeader number="04" title="Recommendations" />
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          Third-party verification outranks self-report. One callable client reference beats the
          whole portfolio. These are placed next to the work that proves the claim.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {recommendations.map((rec) => (
            <blockquote key={rec.name} className="border-4 border-ink bg-paper p-5 shadow-brutal">
              <p className="text-sm leading-relaxed text-ink/80">“{rec.quote}”</p>
              <footer className="mt-4 border-t-2 border-ink/20 pt-3">
                <p className="font-display text-sm font-black">{rec.name}</p>
                <p className="font-mono text-xs text-ink/60">
                  {rec.title} · {rec.org} · {rec.relation}
                </p>
              </footer>
              {rec.placeholder && (
                <p className="mt-3 inline-block border border-dashed border-ink/40 bg-paper-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-tight text-ink/50">
                  [placeholder — quote pending]
                </p>
              )}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
