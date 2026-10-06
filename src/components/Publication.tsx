import { publication } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { cn } from '@/lib/cn'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}

export function Publication() {
  return (
    <section id="publication" className="border-t-4 border-ink bg-paper-2">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeader number="06" title="Publication" />
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          One peer-reviewed, Garuda-indexed co-authored article. Kept as a single line — it proves
          investigation rigor, not engineering depth.
        </p>
        <div className="mt-8 max-w-3xl border-4 border-ink bg-paper p-5 shadow-brutal sm:p-6">
          <span className={cn('inline-block border-2 border-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider', accentBg[publication.accent])}>
            {publication.venue}
          </span>
          <h3 className="mt-3 font-display text-lg font-black leading-tight">{publication.title}</h3>
          <p className="mt-1 text-sm italic text-ink/70">{publication.subtitle}</p>
          <dl className="mt-4 grid gap-2 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Authors</dt>
              <dd className="text-sm">{publication.authors}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Issue</dt>
              <dd className="text-sm">{publication.issue}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Indexed</dt>
              <dd className="text-sm">{publication.indexed}</dd>
            </div>
          </dl>
          <a
            href={publication.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block border-2 border-ink bg-paper px-3 py-1 font-display text-xs font-black uppercase tracking-tight shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Repo ↗
          </a>
        </div>
      </div>
    </section>
  )
}
