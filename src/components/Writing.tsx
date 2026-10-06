import { writing } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader number="03" title="Writing" />
      <p className="mt-3 max-w-2xl text-sm text-ink/70">
        Technical posts in English on real problems from real projects. Writing is the cheapest
        seniority signal available — and the one that proves I can communicate in an English-first
        team.
      </p>
      <ul className="mt-8 space-y-4">
        {writing.map((post) => (
          <li key={post.slug} className="border-2 border-ink bg-paper p-4 shadow-brutal-sm">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-base font-black leading-tight">{post.title}</h3>
              <span className="shrink-0 font-mono text-[11px] text-ink/50">{post.date}</span>
            </div>
            <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
            {post.placeholder && (
              <p className="mt-2 inline-block border border-dashed border-ink/40 bg-paper-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-tight text-ink/50">
                [placeholder — post pending]
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
