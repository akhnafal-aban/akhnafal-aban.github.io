import { projects, type Project } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { cn } from '@/lib/cn'

const accentBg: Record<string, string> = {
  acid: 'bg-acid',
  punch: 'bg-punch',
  volt: 'bg-volt',
  slime: 'bg-slime',
  foam: 'bg-foam',
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border-4 border-ink bg-paper p-5 shadow-brutal">
      <div className="flex items-start justify-between gap-3">
        <span className={cn('inline-block h-3 w-3 shrink-0 border-2 border-ink', accentBg[project.accent])} aria-hidden />
        <span className="text-right font-display text-[10px] font-bold uppercase tracking-wider text-ink/60">
          {project.meta}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-black leading-tight">{project.title}</h3>
      <p className="mt-1 font-display text-xs font-bold uppercase tracking-tight text-ink/50">{project.name}</p>

      <p className="mt-3 text-sm leading-relaxed text-ink/80">{project.blurb}</p>

      <p className="mt-3 border-l-2 border-ink/40 pl-2 text-xs font-medium text-ink/70">
        <span className="font-bold uppercase tracking-tight">Role:</span> {project.role}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="border-2 border-ink/70 px-1.5 py-0.5 font-mono text-[10px] font-medium text-ink/80"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2 border-t-2 border-ink/20 pt-3">
        {project.caseStudySlug && (
          <a
            href={`#case-${project.caseStudySlug}`}
            className="border-2 border-ink bg-ink px-2.5 py-1 font-display text-[11px] font-black uppercase tracking-tight text-paper shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Case study →
          </a>
        )}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-ink bg-acid px-2.5 py-1 font-display text-[11px] font-black uppercase tracking-tight shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Live demo ↗
          </a>
        ) : (
          <span className="border-2 border-ink/30 px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-tight text-ink/40">
            Demo pending
          </span>
        )}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-ink bg-paper px-2.5 py-1 font-display text-[11px] font-black uppercase tracking-tight shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Repo ↗
          </a>
        ) : (
          <span className="border-2 border-ink/30 px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-tight text-ink/40">
            Private / case study only
          </span>
        )}
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader number="01" title="Selected work" />
      <p className="mt-3 max-w-2xl text-sm text-ink/70">
        Four projects, ordered by depth: a production platform, a shipped iOS app, a Go learning
        project, and a peer-reviewed research pipeline. Each card links to evidence you can check.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
