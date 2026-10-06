import { education, awards, skillGroups } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { cn } from '@/lib/cn'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader number="07" title="Education & skills" />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="border-4 border-ink bg-paper p-5 shadow-brutal">
            <h3 className="font-display text-lg font-black">{education.school}</h3>
            <p className="mt-1 text-sm text-ink/70">{education.place}</p>
            <p className="mt-2 text-sm">{education.degree}</p>
            <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs">
              <span className="border-2 border-ink bg-paper-2 px-2 py-1">{education.years}</span>
              <span className="border-2 border-ink bg-acid px-2 py-1 font-bold">GPA {education.gpa}</span>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">Awards</p>
            <ul className="mt-2 space-y-2">
              {awards.map((award) => (
                <li key={award} className="flex gap-2 border-l-4 border-ink pl-3 text-sm text-ink/80">
                  <span aria-hidden className="font-bold">★</span> {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">
            Skills demonstrated in the projects above
          </p>
          <div className="mt-3 space-y-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink/60">
                  <span className={cn('inline-block h-2.5 w-2.5 border border-ink', accentBg[group.accent])} />
                  {group.label}
                </p>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-2 border-ink/70 px-1.5 py-0.5 font-mono text-[11px] font-medium text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
