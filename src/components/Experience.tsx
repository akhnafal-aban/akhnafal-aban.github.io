import { roles } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader number="05" title="Experience" />
      <ol className="mt-8 space-y-6">
        {roles.map((role) => (
          <li key={role.org + role.period} className="border-l-4 border-ink pl-4 sm:pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-base font-black">{role.title}</h3>
              <span className="font-mono text-xs text-ink/60">{role.period} · {role.kind}</span>
            </div>
            <p className="mt-0.5 font-mono text-sm font-medium text-ink/70">{role.org}</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-ink/80">
              {role.points.map((point) => (
                <li key={point} className="mt-1">{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
