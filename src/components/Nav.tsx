import { useState } from 'react'
import { cn } from '@/lib/cn'
import { nav, profile } from '@/data/portfolio'

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className={cn(
            'group inline-flex items-center gap-2 border-2 border-ink bg-acid px-3 py-1.5 font-display text-sm font-black uppercase tracking-tight',
            'shadow-brutal-sm transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none',
          )}
        >
          <span aria-hidden className="text-base leading-none">
            ◉
          </span>
          NAA
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                'border-2 border-ink bg-paper px-3 py-1.5 font-display text-xs font-bold uppercase tracking-tight',
                'shadow-brutal-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none',
                i % 4 === 0 && 'hover:bg-acid hover:text-ink',
                i % 4 === 1 && 'hover:bg-punch hover:text-paper',
                i % 4 === 2 && 'hover:bg-volt hover:text-paper',
                i % 4 === 3 && 'hover:bg-slime hover:text-ink',
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className={cn(
            'hidden border-2 border-ink bg-ink px-3 py-1.5 font-display text-xs font-bold uppercase tracking-tight text-paper shadow-brutal-sm',
            'transition-transform duration-150 hover:-translate-y-0.5 hover:bg-punch hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none sm:inline-flex',
          )}
        >
          Hire me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper shadow-brutal-sm md:hidden',
          )}
        >
          <span className="text-base leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-ink bg-paper px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-2 border-ink bg-paper px-3 py-2 font-display text-sm font-bold uppercase tracking-tight shadow-brutal-sm"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
