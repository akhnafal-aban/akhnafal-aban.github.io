import { projects, type CaseStudy } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'

function CaseStudyBlock({ slug, name, title, cs }: { slug: string; name: string; title: string; cs: CaseStudy }) {
  return (
    <article id={`case-${slug}`} className="scroll-mt-20 border-4 border-ink bg-paper p-5 shadow-brutal sm:p-6">
      <h3 className="font-display text-xl font-black leading-tight sm:text-2xl">{title}</h3>
      <p className="mt-1 font-display text-xs font-bold uppercase tracking-tight text-ink/50">{name}</p>

      <dl className="mt-5 space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="inline font-display text-xs font-black uppercase tracking-widest text-ink/50">Context — </dt>
          <dd className="inline text-ink/80">{cs.context}</dd>
        </div>
        <div>
          <dt className="inline font-display text-xs font-black uppercase tracking-widest text-ink/50">Problem — </dt>
          <dd className="inline text-ink/80">{cs.problem}</dd>
        </div>
        <div>
          <dt className="block font-display text-xs font-black uppercase tracking-widest text-ink/50">My role</dt>
          <dd className="mt-1 text-ink/80">{cs.myRole}</dd>
        </div>
      </dl>

      <div className="mt-5">
        <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">Decisions</p>
        <ul className="mt-2 space-y-3">
          {cs.decisions.map((d) => (
            <li key={d.choice} className="border-l-4 border-ink pl-3">
              <p className="font-mono text-xs font-bold text-ink">{d.choice}</p>
              <p className="mt-1 text-xs text-ink/70">
                <span className="font-bold">Alternatives:</span> {d.alternatives}
              </p>
              <p className="mt-1 text-xs text-ink/70">
                <span className="font-bold">Trade-off:</span> {d.tradeoff}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">Hard part</p>
        <p className="mt-1 text-sm text-ink/80">{cs.hardPart}</p>
      </div>

      <div className="mt-5 border-2 border-ink bg-paper-2 p-3">
        <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">Result</p>
        <p className="mt-1 text-sm text-ink/80">{cs.result}</p>
      </div>

      <div className="mt-5">
        <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">Evidence</p>
        <ul className="mt-2 list-disc pl-5 text-xs text-ink/80">
          {cs.evidence.map((e) => (
            <li key={e} className="mt-0.5">{e}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="font-display text-xs font-black uppercase tracking-widest text-ink/50">What I'd change</p>
        <p className="mt-1 text-sm italic text-ink/70">{cs.lessons}</p>
      </div>
    </article>
  )
}

export function CaseStudies() {
  const withCase = projects.filter((p) => p.caseStudy && p.caseStudySlug)
  if (withCase.length === 0) return null
  return (
    <section id="case-studies" className="border-t-4 border-ink bg-paper-2">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeader number="02" title="Case studies" />
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          The detail a recruiter or hiring manager reads in 5–10 minutes. Each follows the same
          shape: context, problem, my role, decisions with trade-offs, the hard part, the measured
          result, evidence, and what I'd change.
        </p>
        <div className="mt-8 space-y-6">
          {withCase.map((p) => (
            <CaseStudyBlock
              key={p.id}
              slug={p.caseStudySlug as string}
              name={p.name}
              title={p.title}
              cs={p.caseStudy as CaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
