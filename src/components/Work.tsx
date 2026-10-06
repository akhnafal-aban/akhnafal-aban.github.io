import { cn } from '@/lib/cn'
import { type Project, projects } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}
const accentText: Record<string, string> = {
  acid: 'text-ink',
  punch: 'text-paper',
  volt: 'text-paper',
  slime: 'text-ink',
  foam: 'text-ink',
}

function Card({ p }: { p: Project }) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col border-4 border-ink bg-paper p-5 shadow-brutal',
        'transition-transform duration-150 will-change-transform hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-brutal-lg',
      )}
    >
      <div
        className={cn(
          'absolute -top-3 left-5 inline-flex items-center gap-1.5 border-2 border-ink px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest shadow-brutal-sm',
          accentBg[p.accent],
          accentText[p.accent],
        )}
      >
        {p.meta}
      </div>

      <div className="mt-2 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight">
          {p.title}
        </h3>
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              'inline-flex shrink-0 items-center gap-1 border-2 border-ink bg-paper px-2 py-1 font-display text-[10px] font-bold uppercase tracking-widest shadow-brutal-sm',
              'transition-transform duration-150 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-brutal',
            )}
            aria-label={`${p.title} repository`}
          >
            Repo ↗
          </a>
        )}
      </div>

      <p className="mt-3 border-l-4 border-ink pl-3 font-sans text-sm font-medium leading-relaxed">
        {p.blurb}
      </p>

      {p.bullets && (
        <ul className="mt-3 space-y-1.5">
          {p.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 font-sans text-[13px] leading-snug"
            >
              <span aria-hidden className="font-display font-black">
                ▸
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {p.stack.map((s) => (
          <li
            key={s}
            className="border-2 border-ink bg-paper px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-tight shadow-brutal-sm"
          >
            {s}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeader
          index="01"
          kicker="Selected work"
          title="Projects"
          accent="acid"
          blurb="A mix of native iOS, production backend, and research — chosen to show range, not just one stack."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
