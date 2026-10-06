import { cn } from '@/lib/cn'
import { publications } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}

export function Publications() {
  return (
    <section id="publications" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeader
          index="03"
          kicker="Published"
          title="Writing"
          accent="volt"
          blurb="Research output, not blog posts — topic modeling on Indonesian Twitter data."
        />

        <div className="grid gap-6">
          {publications.map((p) => (
            <article
              key={p.title}
              className="grid gap-5 border-4 border-ink bg-paper p-5 shadow-brutal md:grid-cols-12 md:p-7"
            >
              <div className="md:col-span-3">
                <div
                  className={cn(
                    'inline-flex h-16 w-16 items-center justify-center border-4 border-ink font-display text-2xl font-black shadow-brutal-sm',
                    accentBg[p.accent],
                  )}
                  aria-hidden
                >
                  ✶
                </div>
                <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-widest">
                  Journal article
                </p>
                <p className="font-sans text-xs font-medium">{p.issue}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 font-sans text-sm font-medium italic">
                  {p.subtitle}
                </p>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="border-l-4 border-ink pl-3">
                    <dt className="font-display text-[10px] font-bold uppercase tracking-widest">
                      Authors
                    </dt>
                    <dd className="font-sans text-sm font-medium">
                      {p.authors}
                    </dd>
                  </div>
                  <div className="border-l-4 border-ink pl-3">
                    <dt className="font-display text-[10px] font-bold uppercase tracking-widest">
                      Venue
                    </dt>
                    <dd className="font-sans text-sm font-medium">
                      {p.venue}
                    </dd>
                  </div>
                  <div className="border-l-4 border-ink pl-3 sm:col-span-2">
                    <dt className="font-display text-[10px] font-bold uppercase tracking-widest">
                      Indexed
                    </dt>
                    <dd className="font-sans text-sm font-medium">
                      {p.indexed}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
