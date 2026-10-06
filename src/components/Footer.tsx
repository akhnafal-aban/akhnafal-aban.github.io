import { profile } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-tight">
          {profile.name} · {profile.based}
        </p>
        <p className="font-sans text-xs font-medium">
          Built with Vite + React + Tailwind. Neobrutalism variant.
        </p>
      </div>
    </footer>
  )
}
