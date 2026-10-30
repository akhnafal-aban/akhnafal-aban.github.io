import { Slide } from './components/Slide'
import { registry } from './projects/registry'

type EndCardProps = {
  title: string
  onBack: () => void
}

function EndCard({ title, onBack }: EndCardProps) {
  return (
    <Slide>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h2 className="m-0 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
          Selesai membaca {title}.
        </h2>
        <p className="m-0 mt-3 font-mono text-[12px] text-ink-3">proyek lain menyusul</p>
        <button
          type="button"
          onClick={onBack}
          className="mt-8 rounded-full bg-ios-blue px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(10,132,255,0.35)] transition-transform active:scale-[0.98]"
        >
          Kembali ke daftar proyek
        </button>
      </div>
    </Slide>
  )
}

type ProjectViewProps = {
  id: string
  onBack: () => void
}

export function ProjectView({ id, onBack }: ProjectViewProps) {
  const def = registry[id]

  return (
    <main>
      <button
        type="button"
        onClick={onBack}
        aria-label="Kembali ke daftar proyek"
        className="glass fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full text-ink sm:left-5 sm:top-5 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-[13px] sm:font-medium"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" stroke="#1d1d1f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline">Daftar proyek</span>
      </button>

      {def ? (
        <>
          <def.Chapters />
          <EndCard title={def.title} onBack={onBack} />
        </>
      ) : (
        <Slide>
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <h2 className="m-0 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[-0.02em]">
              Konten proyek ini belum tersedia.
            </h2>
            <button
              type="button"
              onClick={onBack}
              className="mt-8 rounded-full bg-ios-blue px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(10,132,255,0.35)] transition-transform active:scale-[0.98]"
            >
              Kembali ke daftar proyek
            </button>
          </div>
        </Slide>
      )}
    </main>
  )
}