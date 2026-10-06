import { cn } from '@/lib/cn'
import { skillGroups } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}

export function Skills() {
  return (
    <section id="skills" className="border-b-4 border-ink bg-paper-2 bg-dots">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeader
          index="04"
          kicker="Stack"
          title="Skills"
          accent="slime"
          blurb="Two ends of the wire: SwiftUI on the client, Laravel + Linux on the server."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="border-4 border-ink bg-paper p-4 shadow-brutal"
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-block h-3 w-3 border-2 border-ink',
                    accentBg[g.accent],
                  )}
                  aria-hidden
                />
                <h3 className="font-display text-sm font-black uppercase tracking-tight">
                  {g.label}
                </h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="border-2 border-ink bg-paper px-2 py-1 font-display text-[11px] font-bold uppercase tracking-tight shadow-brutal-sm transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
