import { Slide } from '../components/Slide'

export function UiIntroSlide({ id }: { id?: string }) {
  return (
    <Slide id={id}>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="m-0 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          Enough with the internals. Lemme show you the UI.
        </h2>
        <p className="m-0 mt-6 max-w-[46ch] text-[clamp(1rem,1.6vw,1.25rem)] leading-[1.6] text-ink-2">
          UI-nya masih sederhana, sih. Fokus utamanya di sini adalah belajar UI slicing dengan
          menerapkan best practices dalam struktur dan implementasi SwiftUI.
        </p>
      </div>
    </Slide>
  )
}