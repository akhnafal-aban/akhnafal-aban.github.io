import { cn } from '@/lib/cn'
import { profile } from '@/data/portfolio'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, accent: 'bg-acid' },
  { label: 'GitHub', value: 'akhnafal-aban', href: profile.links.github, accent: 'bg-volt text-paper' },
  { label: 'LinkedIn', value: 'akhnaf-aban', href: profile.links.linkedin, accent: 'bg-punch text-paper' },
  { label: 'YouTube', value: '@noorakhnafalaban', href: profile.links.youtube, accent: 'bg-slime' },
]

export function Contact() {
  return (
    <section id="contact" className="border-b-4 border-ink bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 text-paper sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-paper bg-acid font-display text-base font-black text-ink shadow-brutal-sm">
              05
            </span>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-widest text-paper/70">
                Get in touch
              </p>
              <h2 className="font-display text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
                Contact
              </h2>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-lg font-sans text-base font-medium leading-relaxed text-paper/90">
              Building iOS at the Apple Developer Academy while running backend
              and infrastructure in production. Open to iOS, backend, or
              full-stack work — and to interesting freelance infrastructure.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className={cn(
                'mt-6 inline-flex items-center gap-2 border-4 border-paper bg-acid px-5 py-3 font-display text-base font-black uppercase tracking-tight text-ink shadow-brutal',
                'transition-transform duration-150 hover:-translate-y-1 hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none',
              )}
            >
              ✉ {profile.email}
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 md:col-span-5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  className={cn(
                    'group block border-4 border-paper bg-paper px-4 py-3 text-ink shadow-brutal',
                    'transition-transform duration-150 hover:-translate-y-1 hover:shadow-brutal-lg',
                  )}
                >
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 border-2 border-ink px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest shadow-brutal-sm',
                      l.accent,
                    )}
                  >
                    {l.label}
                  </span>
                  <span className="mt-2 block font-display text-base font-black leading-none tracking-tight">
                    {l.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
