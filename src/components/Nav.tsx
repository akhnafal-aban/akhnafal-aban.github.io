import { positioning } from '@/data/portfolio'
import { cn } from '@/lib/cn'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-baseline gap-2 font-display text-sm font-black uppercase tracking-tight"
        >
          <span className="border-2 border-ink bg-acid px-1.5 py-0.5 text-ink shadow-brutal-sm">NAA</span>
          <span className="hidden text-xs font-bold text-ink/70 sm:inline">{positioning.lane}</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {[
            { href: '#work', label: 'Work' },
            { href: '#case-studies', label: 'Case studies' },
            { href: '#writing', label: 'Writing' },
            { href: '#experience', label: 'Experience' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'border-2 border-transparent px-2 py-1 font-display text-xs font-bold uppercase tracking-tight text-ink/70',
                'transition-colors hover:border-ink hover:bg-acid hover:text-ink',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={positioning.resumeUrl}
            download
            className="hidden border-2 border-ink bg-paper px-3 py-1 font-display text-xs font-black uppercase tracking-tight shadow-brutal-sm transition-transform hover:-translate-y-0.5 hover:shadow-brutal sm:inline-block"
          >
            Résumé ↓
          </a>
          <a
            href={`mailto:${positioning.email}?subject=Backend%20role%20-%20from%20your%20portfolio`}
            className="border-2 border-ink bg-ink px-3 py-1 font-display text-xs font-black uppercase tracking-tight text-paper shadow-brutal-sm transition-transform hover:-translate-y-0.5 hover:shadow-brutal"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  )
}
