import { cn } from '@/lib/cn'
import { profile } from '@/data/portfolio'
import profilePhoto from '@/assets/profile.webp'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-4 border-ink bg-grid"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span
              className={cn(
                'inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1 font-display text-xs font-bold uppercase tracking-widest shadow-brutal-sm',
              )}
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-punch" />
              Open to iOS & backend roles
            </span>

            <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-7xl md:text-8xl">
              <span className="block">Noor</span>
              <span className="mt-1 block bg-ink px-2 py-1 text-paper">
                Akhnafal
              </span>
              <span className="mt-1 block">Aban</span>
            </h1>

            <p className="mt-6 max-w-xl border-l-4 border-ink bg-paper px-4 py-3 font-sans text-base font-medium leading-relaxed shadow-brutal-sm">
              {profile.headline}. Based in {profile.location}. Shipping iOS in
              Swift, backends in Laravel, and keeping Linux boxes alive in
              between.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className={cn(
                  'inline-flex items-center gap-2 border-2 border-ink bg-acid px-4 py-2 font-display text-sm font-black uppercase tracking-tight shadow-brutal-sm',
                  'transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none',
                )}
              >
                See work →
              </a>
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  'inline-flex items-center gap-2 border-2 border-ink bg-paper px-4 py-2 font-display text-sm font-black uppercase tracking-tight shadow-brutal-sm',
                  'transition-transform duration-150 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none',
                )}
              >
                Email me
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="mb-6">
              {/* Photo polaroid */}
              <div className="relative -rotate-2 border-4 border-ink bg-paper p-2 shadow-brutal-lg sm:-rotate-3">
                {/* tape */}
                <span
                  aria-hidden
                  className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-3 bg-acid/80 border-2 border-ink shadow-brutal-sm"
                />
                <img
                  src={profilePhoto}
                  alt="Noor Akhnafal Aban"
                  width={800}
                  height={800}
                  loading="eager"
                  decoding="async"
                  className="block aspect-square w-full bg-paper-2 object-cover"
                />
                <p className="mt-2 border-t-2 border-ink/20 pt-2 text-center font-display text-[11px] font-bold uppercase tracking-widest text-ink">
                  Noor · Jakarta
                </p>
              </div>
            </div>

            <div className="relative rotate-2 border-4 border-ink bg-punch p-5 shadow-brutal-lg">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-paper">
                Currently
              </p>
              <p className="mt-2 font-display text-lg font-black leading-tight text-paper">
                iOS @ Apple Developer Academy
              </p>
              <p className="mt-1 text-sm font-medium text-paper/80">
                UC Jakarta · Feb 2026 →
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 border-t-2 border-ink/30 pt-4">
                {[
                  ['3', 'roles live'],
                  ['6', 'projects'],
                  ['3.87', 'GPA'],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="border-2 border-ink bg-paper px-2 py-2 text-center shadow-brutal-sm"
                  >
                    <div className="font-display text-lg font-black leading-none">
                      {n}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-tight">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
