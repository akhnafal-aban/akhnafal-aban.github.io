import { ProjectCoverSlide } from './slides/ProjectCoverSlide'
import { MasalahSlide } from './slides/MasalahSlide'
import { TechStackSlide } from './slides/TechStackSlide'
import { ArsitekturSlide } from './slides/ArsitekturSlide'
import { CodeSlide } from './slides/CodeSlide'
import { UIGallerySlide } from './slides/UIGallerySlide'
import { UiCodeSlide } from './slides/UiCodeSlide'
import { EvidenceSlide } from './slides/EvidenceSlide'
import { Slide } from './components/Slide'

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
  return (
    <main>
      <button
        type="button"
        onClick={onBack}
        aria-label="Kembali ke daftar proyek"
        className="glass fixed left-5 top-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-ink"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" stroke="#1d1d1f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Kembali
      </button>

      {id === 'asset-tracker' ? (
        <>
          <ProjectCoverSlide id="cover-asset-tracker" />
          <MasalahSlide id="masalah" />
          <TechStackSlide id="stack" />
          <ArsitekturSlide id="arsitektur" />
          <CodeSlide id="code" />
          <UIGallerySlide id="ui" />
          <UiCodeSlide id="ui-code" />
          <EvidenceSlide id="bukti" />
          <EndCard title="Asset Tracker" onBack={onBack} />
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
