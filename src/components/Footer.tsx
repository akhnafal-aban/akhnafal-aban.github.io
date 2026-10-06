import { positioning } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="bg-ink py-6 text-center text-paper/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs">
          {positioning.name} — {positioning.lane} · {positioning.location}
        </p>
        <p className="mt-1 font-mono text-[11px]">
          Last updated {new Date().toISOString().slice(0, 10)} · built with Vite + React ·{' '}
          <a href={positioning.links.github} target="_blank" rel="noreferrer" className="underline">
            source ↗
          </a>
        </p>
      </div>
    </footer>
  )
}
